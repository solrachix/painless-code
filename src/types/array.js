require('colors')
const message = require('../message')

const functionsName = ['add', 'remove', 'addFirst']

const functions = {
    add: Array.prototype.push,
    remove: Array.prototype.pop,
    addFirst: Array.prototype.unshift
}

for (const name of functionsName) {
    if (typeof Array.prototype[name] !== 'function') Array.prototype[name] = functions[name]
    else message.exist(name)

    Array.prototype['_' + name] = functions[name]
}
