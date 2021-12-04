// node.js use Common Js
// ever file is modele(default)
const names = require("./4-names")
const sayHi = require('./5-utils')
const data = require('./6-alternative')
// console.log(names);
require('./7-mind-graned')
sayHi(names.john)
sayHi(names.peter)
console.log(data)