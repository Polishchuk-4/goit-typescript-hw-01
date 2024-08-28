function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

// function merge1<T, U>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }
