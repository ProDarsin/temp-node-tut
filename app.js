//npm is global comand that cames with node
// checking npm versin (npm --version)
 //local dependency : which means is used inthis patricalar project
 // command : npm i(install) <packname>
 // global depndency: which means is used any project
 // npm i -g <packname>
 // package.json :minifest file (store important info about project/package)
const _=require('lodash')
const item=[1,[2,[3,[4]]]]
const newItem=_.flattenDeep(item);
console.log(newItem);