// global variable are the ones which can we accessed
// from any where in the program without importing explicitly

// __filename - print the name of current file with its complete address
// __dirname - print the path of current directory
// require - a method used to import modules

console.log(__filename);
console.log(__dirname);
setInterval(() => {
    console.log('running');
}, 1000);
