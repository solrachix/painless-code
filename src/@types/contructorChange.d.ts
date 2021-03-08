declare interface Array<T> {
  /**
   * Appends new elements to the end of an array, and returns the new length of the array.
   * @param items New elements to add to the array.
   * @package Painless 
   */
  add(...items: T[]): number
  /**
   * Removes the last element from an array and returns it.
   * If the array is empty, undefined is returned and the array is not modified.
   * @package Painless
   */
  remove(...items: T[]): T | undefined
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
}