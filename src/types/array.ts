import 'colors'
import message from '../message'

const functionsName = ['add', 'remove', 'addFirst']

const functions = {
    add: Array.prototype.push,
    remove: Array.prototype.pop,
    addFirst: Array.prototype.unshift
}

for (const name of functionsName) {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
    if (!Array.prototype.hasOwnProperty(name)) Object(Array.prototype)[name] = Object(functions)[name]
    else message.exist(name)

    Object(Array.prototype)['_' + name] = Object(functions)[name]
}
