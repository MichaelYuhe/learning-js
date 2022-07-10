function throttle (func, interval) {
	let toThrottle = false
	return function (...args) {
		if(!toThrottle) {
			toThrottle = true
			func.apply(this, args)
			setTimeout(() => {
				toThrottle = false
			}, interval)
		}
	}
}
