class ExtendArray extends Array {
  constructor() {
    super()

    super.push(10)
    super.push(20)
    super.push(30)
    super.push(40)
  }

  getTotal() {
    let total = 0
    for(let i=0; i<this.length; i++) {
      total += this[i]
    }
    return total
  }
}

// let obj = new ExtendArray()
// console.log(obj.getTotal())

class StrangeExtendArray extends ExtendArray {
  constructor() {
    super()
  }

  getTotal() {
    let total = 0
    for(let i=0; i<this.length; i++) {
      total += (this[i] * 5)
    }
    return total
  }
}

let obj = new StrangeExtendArray()
console.log(obj.getTotal())