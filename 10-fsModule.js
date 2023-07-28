// fs module - It provides an interface for working with the file system on your computer.
//  With the fs module, you can read from and write to files, create new files, delete files,
//   and perform various file-related operations.

const {readFileSync, writeFileSync} = require('fs') // import two functions of fs module

const content = readFileSync('./folder/subfolder/text.txt','utf8') // read content of passed file

console.log(content)

writeFileSync(
    './folder/write.txt',
    `created with content: ${content}`,
    {flag:'a'}
    ) // write to the file if present else create and write , flag is used to append the content