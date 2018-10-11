class Sorter {
  constructor() {
    this.array = [];
    this.chooseComparator = (a,b) => {
      return a - b;
    }
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    const sortArray = [];

    for (let i = 0, len = indices.length ; i < len; i++) {
      sortArray.push(this.array[indices[i]]);
    }

    sortArray.sort(this.chooseComparator);
    indices.sort( (a,b) => a - b);

    for (let j = 0, len = sortArray.length; j < len; j++) {
      this.array[indices[j]] = sortArray[j];
    }
  }

  setComparator(compareFunction) {
    this.chooseComparator = compareFunction;
  }
}

module.exports = Sorter;