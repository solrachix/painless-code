require('colors')
const message = require('../message')

const functionsName = ['lower', 'capitalize', 'toUpperCase']

const functions = {
  lower: function () {
    return String(this).toLowerCase()
  },
  capitalize: function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
  },
  toUpperCase: function () {
    return String(this)
  }
}

for (const name of functionsName) {
  if (typeof String.prototype[name] !== 'function') String.prototype[name] = functions[name]
  else message.exist(name)

  String.prototype['_' + name] = functions[name]
}
