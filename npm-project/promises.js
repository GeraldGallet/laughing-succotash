const myAsyncFunction = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Hello, world!')
    }, 3000)
  })
}

try {
  const myResult = await myAsyncFunction()
  console.log(myResult)
} catch (error) {
  console.log(error)
} finally {
  console.log('Finally')
}
