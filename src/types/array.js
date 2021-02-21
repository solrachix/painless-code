require('colors')
const message = require('../message')

const functionsName = ['add', 'remove', 'addFirst', 'removeFirst']

const functions = {
    add: Array.prototype.push,
    remove: Array.prototype.pop,
    addFirst: Array.prototype.unshift,
    removeFirst: Array.prototype.shift
}

for (const name of functionsName) {
    if (typeof Array.prototype[name] !== 'function') Array.prototype[name] = functions[name]
    else message.exist(name)

    Array.prototype['_' + name] = functions[name]
}
