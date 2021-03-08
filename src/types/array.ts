import 'colors'
import isEmpty from 'lodash.isempty'

import message from '../message'

const functionsName = [
	'add', 'addFirst', 'addLast', 'remove', 'removeFirst', 'removeLast',
	'isEmpty', 'isFilled',
	'shuffle'
]

const functions = {
	add: Array.prototype.push,
	addFirst: Array.prototype.unshift,
	addLast: Array.prototype.push,
	remove: Array.prototype.pop,
	removeFirst: Array.prototype.shift,
	removeLast: Array.prototype.pop,
	isEmpty: function () {
		return isEmpty(this)
	},
	isFilled: function () {
		return !isEmpty(this)
	},
	shuffle: function (this: unknown[]) {
    let currentIndex = this.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temporaryValue;
    }

    return this
  }
}

for (const name of functionsName) {
	// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
	if (!Array.prototype.hasOwnProperty(name)) Object(Array.prototype)[name] = Object(functions)[name]
	else message.exist(name)

	Object(Array.prototype)['_' + name] = Object(functions)[name]
}
