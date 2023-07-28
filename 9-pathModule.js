
// path module

const path = require('path')

console.log(path.sep)
const filePath = path.join('/folder', 'subfolder//' , 'text.txt')
console.log(filePath)

console.log(`Base file name: ${path.basename(filePath)}`)

const absolute = path.resolve(__dirname, 'folder', 'subfolder', 'text.txt')
console.log(absolute)