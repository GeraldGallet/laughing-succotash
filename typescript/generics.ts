function printVariables<T, U>(a: T, b: U) {
  console.log(a, b)
}

printVariables(1, '2')
printVariables('1', '2')
printVariables(true, false)
printVariables(1, '2')
printVariables('1', '2')
printVariables(true, false)

type Color = 'red' | 'green' | 'blue'
function printColor<T extends Color>(color: T) {
  console.log(color)
}

printColor('red')
printColor('green')
printColor('blue')