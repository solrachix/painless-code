import 'colors'

/**
 * @param {string} nameFunction - name of function that already exists
 * @description shows warning message on console if function already exists
 */
const exist = (nameFunction: string) => {
    console.log(`WARNING: Function "${nameFunction}" already exists`.red)
}

export default { exist }
