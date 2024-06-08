// The package.json file store information about our project
// it can be created manually in our root together with its properties
// it can also be set up step by step using npm init
// it can be created as default using npm init -y

const _ = require('lodash')

const arr = [1, [2, [3, [4]]]]

const newArr = _.flattenDeep(arr)
console.log(newArr)
