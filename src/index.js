class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.chooseComparator = (a,b) => {
      return a - b;
    }
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
  return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    let sortArray = [];
    for (let i = 0; i < indices.length; i++) {
      sortArray.push(this.array[indices[i]] );
    }
    sortArray.sort(this.chooseComparator);
    indices.sort();
    for (let j = 0; j < sortArray.length; j++) {
      this.array[indices[j]] = sortArray[j];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.chooseComparator = compareFunction;
  }
}

module.exports = Sorter;