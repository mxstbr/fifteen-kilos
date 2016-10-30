var fs = require('fs');
var fileSize = fs.statSync('./index.js').size;

if (fileSize === 15000) {
  console.log('index.js is exctly fifteen kilos');
  process.exit(0);
} else {
  console.log('!!index.js is not exactly fifteen kilos!!');
  process.exit(1);
}
