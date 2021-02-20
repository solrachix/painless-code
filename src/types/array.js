require('colors')
const message = require('../message')

const functionsName = ['add', 'remove']

const functions = {
    add: Array.prototype.push,
    remove: Array.prototype.pop
}

for (const name of functionsName) {
    if (typeof Array.prototype[name] !== 'function') Array.prototype[name] = functions[name]
    else message.exist(name)

    Array.prototype['_' + name] = functions[name]
}
