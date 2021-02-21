const message = require('../message')
require('colors')
const isEmpty = require('lodash.isempty')

const functionsName = [
    'add', 'addLast', 'remove', 'removeLast', 'addFirst', 'removeFirst',
    'isEmpty', 'isFilled'
]

const functions = {
    add: Array.prototype.push,
    addLast: Array.prototype.push, //alias add
    remove: Array.prototype.pop,
    removeLast: Array.prototype.pop, //alias remove
    addFirst: Array.prototype.unshift,
    removeFirst: Array.prototype.shift,
    isEmpty: function () {
        return isEmpty(this)
    },
    isFilled: function () {
        return !isEmpty(this)
    },
}

for (const name of functionsName) {
    if (typeof Array.prototype[name] !== 'function') Array.prototype[name] = functions[name]
    else message.exist(name)

    Array.prototype['_' + name] = functions[name]
}
