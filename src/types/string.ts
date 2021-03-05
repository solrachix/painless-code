import 'colors'
import message from '../message'

const functionsName = ['toUpperCase', 'lower', 'upper', 'capitalize']

const functions = {
  toUpperCase: function (this: string) {
    return String(this)
  },

  lower: function (this: string) {
    return String(this).toLowerCase()
  },
  upper: function (this: string) {
    return String(this).toUpperCase()
  },
  capitalize: function (this: string) {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
  },
}

for (const name of functionsName) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
  if (!String.prototype.hasOwnProperty(name)) Object(String.prototype)[name] = Object(functions)[name]
  else message.exist(name)

  Object(String.prototype)['_' + name] = Object(functions)[name]
}