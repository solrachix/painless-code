declare interface Array<T> {

  /**
   * Appends new elements to the end of an array, and returns the new length of the array.
   * @param items New elements to add to the array.
   * @package Painless 
   */
  add(...items: T[]): number

  /**
   * Inserts new elements at the start of an array, and returns the new length of the array.
   * @param items Elements to insert at the start of the array.
   * @package Painless
   */
  addFirst(...items: T[]): number

  /**
   * Inserts new elements at the end of an array, and returns the new length of the array.
   * @param items Elements to insert at the end of the array.
   * @package Painless
   */
  addLast(...items: T[]): number

  /**
   * Removes the last element from an array and returns it.
   * If the array is empty, undefined is returned and the array is not modified.
   * @package Painless
   */
  remove(...items: T[]): T | undefined

  /**
   * Removes the first element from an array and returns it.
   * If the array is empty, undefined is returned and the array is not modified.
   * @package Painless
   */
   removeFirst(...items: T[]): T | undefined

  /**
   * Checks if value is an empty object, collection, map, or set.
   * Objects are considered empty if they have no own enumerable string keyed properties.
   * Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.
   * @package Painless
   */
   isEmpty(...items: T[]): boolean

  /**
   * Checks if value is not an empty object, collection, map, or set.
   * Objects are considered empty if they have no own enumerable string keyed properties.
   * Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.
   * @package Painless
   */
  isFilled(...items: T[]): boolean

  /**
   * Shuffles all the elements of the array
   * @package Painless
   */
   shuffle(...items: T[]): T[]
}

declare interface String {
  /** 
   * Converts all the alphabetic characters in a string to lowercase. 
   * @package Painless 
  */
  lower():  string,
  /**
   *  Converts all the alphabetic characters in a string to uppercase.
   * @package Painless
   */
  upper():  string,
  /**
   *  Converts the first alphabetic character to uppercase. 
   * @package Painless 
  */
  capitalize():  string,
  /**
   *  Capitalize the first alphabetic character of each word
   * @package Painless 
  */
   title():  string,
}