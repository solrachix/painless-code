import 'colors'
import message from '../message'

const functionsName = ['add', 'addFirst', 'remove', 'removeFirst']

const functions = {
    add: Array.prototype.push,
    addFirst: Array.prototype.unshift,
    remove: Array.prototype.pop,
    removeFirst: Array.prototype.shift
}

for (const name of functionsName) {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
    if (!Array.prototype.hasOwnProperty(name)) Object(Array.prototype)[name] = Object(functions)[name]
    else message.exist(name)

    Object(Array.prototype)['_' + name] = Object(functions)[name]
}
