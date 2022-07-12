
const repeat = (operation, num) => {
    return () => {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
  }
  
  const trampoline = (fn) => {
    while(fn && typeof fn === 'function') {
      fn = fn()
    }
  }
  
  module.exports = (operation, num) => {
    trampoline(() => {
      return repeat(operation, num)
    })
  }