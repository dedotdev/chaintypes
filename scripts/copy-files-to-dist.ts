import * as fs from 'fs';
import * as path from 'path';

const filesToCopy = ['package.json', 'README.md', 'LICENSE'];
const targetDir = 'dist';

/**
 * Get all network directories from the src folder
 */
const getNetworkDirectories = (srcDir: string): string[] => {
  try {
    return fs.readdirSync(srcDir)
      .filter(file => fs.statSync(path.join(srcDir, file)).isDirectory());
  } catch (error) {
    console.error('Error reading network directories:', error);
    return [];
  }
};

/**
 * Generate exports for package.json
 */
const generateExports = (networks: string[]): Record<string, any> => {
  const exports: Record<string, any> = {
    '.': {
      types: './index.d.ts',
      import: './index.js',
      default: './index.js'
    }
  };

  // Add exports for each network
  networks.forEach(network => {
    exports[`./${network}`] = {
      types: `./${network}/index.d.ts`
    };
  });

  return exports;
};

const main = () => {
  if (!fs.existsSync(targetDir)) {
    return;
  }

  const currentDir = process.cwd();

  filesToCopy.forEach((file) => {
    let filePath = path.resolve(currentDir, file);

    if (!currentDir.endsWith('packages/chaintypes')) {
      return;
    }

    // Copy the root README.md if current dir
    if (file === 'README.md') {
      filePath = path.resolve(currentDir, '../..', file);
    }

    if (!fs.existsSync(filePath)) {
      return;
    }

    let fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

    if (file === 'package.json') {
      const pkgJson = JSON.parse(fileContent);
      pkgJson.main = '';
      pkgJson.module = './index.js';
      pkgJson.types = './index.d.ts';
      
      // Get network directories from src
      const srcDir = path.join(currentDir, 'src');
      const networks = getNetworkDirectories(srcDir);
      
      // Generate exports field
      pkgJson.exports = generateExports(networks);

      fileContent = JSON.stringify(pkgJson, null, 2);
    }

    fs.writeFileSync(path.join(currentDir, targetDir, file), fileContent);
  });
};

main();
