require('colors')

/**
 * @param {string} nameFunction - name of function that already exists
 * @description shows warning message on console if function already exists
 */
const exist = (nameFunction) => {
    console.log(`WARNING: Function "${nameFunction}" already exists`.red)
}

module.exports = { exist }
