import * as fs from 'fs';
import * as path from 'path';

const filesToCopy = ['package.json', 'README.md', 'LICENSE'];
const targetDir = 'dist';

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

      fileContent = JSON.stringify(pkgJson, null, 2);
    }

    fs.writeFileSync(path.join(currentDir, targetDir, file), fileContent);
  });
};

main();
