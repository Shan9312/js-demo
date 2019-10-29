function isFunction (obj) {
  return typeof obj === 'function'
}

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor (handle) {
    if (!isFunction(handle)) {
      throw Error(`Promise resolver ${typeof handle} is not a function`)
    }
    this.value = null
    this.status = PENDING
    this.resolveQueue = []
    this.rejectQueue = []
    try {
      handle(this.resolve.bind(this), this.reject.bind(this))
    } catch (err) {
      throw Error('error', err)
    }
  }
  resolve (val) {
    if (this.status !== PENDING) {
      return this.value
    }
    this.status = FULFILLED
    this.value = val
    while (this.resolveQueue.length) {
      const currentFun = this.resolveQueue.shift();
      const newValue = currentFun(this.value)
      if (this.resolveQueue.length) {
        const fun = this.resolveQueue.shift();
        fun(newValue)
      }
    }
  }
  reject (val) {
    if (this.status !== PENDING) {
      return this.value
    }
    this.status = REJECTED
    this.value = val
  }
  then (resolve, reject) {
    const {status, value, resolveQueue, rejectQueue} = this
    return new MyPromise ((resolve, reject) => {
      switch (status) {
          case PENDING:
            resolveQueue.push(resolve)
            rejectQueue.push(reject)
            break
          case FULFILLED:
            resolve(value)
            break
          case REJECTED:
            reject(value)
            break
      }
    })
  }
}


const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000)
}).then((res) => {
  console.log('111', res)
}).then((res) => {
  console.log('222', res)
})
