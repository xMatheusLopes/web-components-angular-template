const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/web-component-angular-template/runtime.js',
    './dist/web-component-angular-template/polyfills.js',
    './dist/web-component-angular-template/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/ui-button.js');
})();