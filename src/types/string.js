require('colors')
const message = require('../message')

const functionsName = ['toUpperCase', 'lower', 'upper', 'capitalize', 'title']

const functions = {
  toUpperCase: function () {
    return String(this)
  },
  lower: function () {
    return String(this).toLowerCase()
  },
  upper: function () {
    return String(this).toUpperCase()
  },
  capitalize: function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
  },
  title: function () {
    return this.replace(/\w\S*/g, (str) => {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
    })
  }
}

for (const name of functionsName) {
  if (typeof String.prototype[name] !== 'function') String.prototype[name] = functions[name]
  else message.exist(name)

  String.prototype['_' + name] = functions[name]
}
