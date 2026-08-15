const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const referencedAssets = [...indexHtml.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]);

const missing = [];
for (const asset of referencedAssets) {
  const filePath = path.join(root, asset);
  if (!fs.existsSync(filePath)) {
    missing.push(asset);
  } else if (fs.statSync(filePath).size === 0) {
    missing.push(`${asset} (empty)`);
  }
}

if (missing.length > 0) {
  console.error(`[build] missing or empty assets:\n${missing.map((a) => `  - ${a}`).join('\n')}`);
  process.exit(1);
}

const bundleFiles = fs.readdirSync(root).filter((f) => f.endsWith('.bundle.js'));
for (const file of bundleFiles) {
  try {
    execFileSync(process.execPath, ['--check', file], { cwd: root, stdio: 'pipe' });
  } catch (err) {
    console.error(`[build] syntax error in ${file}:\n${err.stderr}`);
    process.exit(1);
  }
}

console.log(
  `[build] OK - ${referencedAssets.length} referenced assets verified, ${bundleFiles.length} bundles parsed`
);
