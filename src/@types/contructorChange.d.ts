declare interface Array<T> {
  /**
   * Appends new elements to the end of an array, and returns the new length of the array.
   * @param items New elements to add to the array.
   */
  add(...items: T[]): number
  remove(...items: T[]): T | undefined
}

declare interface String {
  /** Converts all the alphabetic characters in a string to lowercase. */
  lower():  string,
  /** Converts all the alphabetic characters in a string to uppercase. */
  upper():  string,
  /** Converts the first alphabetic character to uppercase. */
  capitalize():  string,
}