import '../src/index'

const a= [ 'b', 1 ]
console.log(a.add('s'), a)

console.log('camelcase => ', "test__test-_-test--".camelCase())
console.log('escapeRegExp => ', "[lodash](https://lodash.com/)".escapeRegExp())
console.log('kebabCase => ', "Test__test-_-Test--".kebabCase())

console.log(String)