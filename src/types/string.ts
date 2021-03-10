import 'colors'
import message from '../message'

const functionsName = ['toUpperCase', 'lower', 'upper', 'capitalize', 'title', 'camelCase', 'escapeRegExp']

const functions = {
  toUpperCase: function (this: string) {
    return String(this)
  },

  lower: String.prototype.toLowerCase,
  upper: String.prototype.toUpperCase,
  capitalize: function (this: string) {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
  },
  title: function (this: string) {
    return this.replace(/\w\S*/g, (str) => {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
    })
  },
  camelCase: function (this: string) {
    const text = this.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
    return text.substr(0, 1).toLowerCase() + text.substr(1);
  },
  escapeRegExp: function (this: string) {
    return this.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
}

for (const name of functionsName) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
  if (!String.prototype.hasOwnProperty(name)) Object(String.prototype)[name] = Object(functions)[name]
  else message.exist(name)

  Object(String.prototype)['_' + name] = Object(functions)[name]
}