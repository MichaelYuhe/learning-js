function curry(fn) {
    const judge = (...args) => {
        if (args.length === fn.length) return fn(...args)
        return (...arg) => judge(...args, ...arg)
    }
    return judge
}