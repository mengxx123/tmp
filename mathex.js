console.log('== mathex ==')

function add(a, b) {
  return a + b
}

function mod(a, b) {
  return a % b
}

class Number {
  
  constructor(num) {
    this._value = num
  }

  equal(num) {
    return this._value === num
  }
}

// integer
class Integer {
  constructor(value) {
    this._value = value
  }

  add(num) {
    this._value += num
    return this
  }

  div(num) {
    if (num === 0) {
      throw new Exception()
    }
    this._value /= num
    return this
  }

  times(num) {
    this._value *= num
    return this
  }

  sub(num) {
    this._value -= num
    return this
  }
}


function equal(a, b) {
  if (a instanceof Integer) {
    return a._value === b
  }
  if (a instanceof Fraction) {
    return a.equal(b)
  }
  if (a instanceof Complex) {
    return a.equal(b)
  }
  if (a instanceof Number) {
    return a.equal(b)
  }
  return a === b
}

function max(...res) {
  // console.log('res', res)
  let max = res[0]
  for (let item of res) {
    if (item > max) {
      max = item
    }
  }
  return max
}

function min(...res) {
  // console.log('res', res)
  let minNum = res[0]
  for (let item of res) {
    if (item < minNum) {
      minNum = item
    }
  }
  return minNum
}
// function min(a, b) {
//   // if (a instanceof Integer) {
//   //   return a._value === b
//   // }
//   return Math.min(a, b)
// }

function pow(a, b) {
  return Math.pow(a, b)
}

function sin(num) {
  return Math.sin(num)
}

function abs(num) {
  if (typeof num === 'number') {
    return Math.abs(num)
  }
  return Math.abs(num._value)
}

window.mathex = {
  asd: 'asd',
  gougu(width, height) {
    return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
  },
  add,
  equal,
}

const PI = Math.PI
const pi = Math.PI
const e = Math.E
const E = Math.E

// fraction
class Fraction {
  constructor(top, bottom) {
    this._top = top
    this._bottom = bottom
  }

  equal(num) {
    if (num instanceof Fraction) {
      return this._top / this._bottom === num._top / num._bottom  
    }
    return this._top / this._bottom === num
  }
}

class Complex {
  constructor(first, last) {
    this._first = first
    this._last = last
  }

  equal(num) {
    return this._first === num && this._last === 0
  }
}

console.log('Fraction', Fraction)

function calculate(exp) {
  return exp
}

function format(exp) {
  return exp + '1'
}

function testing() {
  
  function testBoolean(desc, bool) {
    if (bool) {
      // console.log('ok')
    } else {
      console.error('not ok', desc)
    }
  }

  function testEqual(desc, a, b) {
    // console.log('a, b', a, b)
    testBoolean(desc, a === b)
    // if (a === b) {
    //   console.log('ok')
    // } else {
    //   console.error('not ok')
    // }
  }

  testEqual('add(1, 2)', add(1, 2), 3)

  testBoolean('equal(1, 2)', equal(2, 2))
  
  // number
  testBoolean('number', equal(new Number(2), 2))

  // integer
  testBoolean('new Integer(1)', equal(new Integer(2), 2))
  testBoolean('Integer add', equal(new Integer(2).add(2), 4))
  testBoolean('Integer div', equal(new Integer(8).div(2), 4))
  testBoolean('Integer times', equal(new Integer(2).times(4), 8))
  testBoolean('Integer sub', equal(new Integer(8).sub(4), 4))

  // fraction
  testBoolean('fraction', equal(new Fraction(1, 2), 0.5))
  testBoolean('fraction 2', equal(new Fraction(2, 4), 0.5))
  testBoolean('fraction 3', equal(new Fraction(2, 4), new Fraction(1, 2)))

  // complex
  testBoolean('complex', equal(new Complex(1, 0), 1))
  
  // abbs
  testEqual('abs(2)', abs(2), 2)
  testEqual('abs(-2)', abs(-2), 2)
  
  testEqual('Integer abs', abs(new Integer(-2)), 2)

  // max
  testEqual('max', max(1, 2), 2)
  testEqual('max much params', max(1, 2, 3, 5, 4), 5)
  testEqual('min', min(1, 2), 1)
  testEqual('min much params', min(3, 2, 1, 9), 1)

  testEqual('pow', pow(2, 3), 8)

  testEqual('sin', sin(45), Math.sin(45))

  testEqual('mod', mod(3, 2), 1)  
  testEqual('mod', format('1+2'), '1 + 2')  

  console.log('')

  
}

testing()

window._math = mathex
