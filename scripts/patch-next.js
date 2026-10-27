const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'lib', 'has-necessary-dependencies.js');

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  const targetStr = 'const pkgPath = await _fs.promises.realpath((0, _resolvefrom.resolveFrom)(baseDir, `${p.pkg}/package.json`));';
  const replacementStr = 'let pkgPath; try { pkgPath = await _fs.promises.realpath((0, _resolvefrom.resolveFrom)(baseDir, `${p.pkg}/package.json`)); } catch (_) { pkgPath = (0, _resolvefrom.resolveFrom)(baseDir, `${p.pkg}/package.json`); }';

  if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('Successfully patched Next.js for OneDrive realpath support.');
  } else {
    console.log('Next.js already patched or snippet not found.');
  }
} else {
  console.log('Target file does not exist.');
}
