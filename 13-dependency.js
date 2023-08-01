// npm - global command , which comes with node
// npm --version to check the version

// local dependency - use it only in this project
// npm i <packageName>

// global dependency - use it in any project
//sudo npm install -g <packageName> (mac)

// package.json - manifest file(stores important imformation about project/package)
//three ways to create it - 1. manual 2. npm init 3. npm init -y

// nodemon - dev dependency which auto restart the nodejs app after a change has been saved 

// two ways to remove dependency - 1. npm uninstall packageName 2. neuclear one

// external module 'lodash'
const _ = require('lodash')
const items = [1,[2,[3]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello this is using global nodemon....')
console.log('hahahah')
