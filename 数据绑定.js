function initData (vm: Component) {
	let data = vm.$options.data
	data = vm._data = typeof data === "function"? getData(data,vm) : data || {},
	if(!isPlainObject(data)) {
		data = {}
		
	}
}

const keys = Object.keys(data)
const props = vm.$options.props
let i = keys.length

while (i--) {
	if(props && hasOwn(props,keys[i])) {
		
	}else if (!isReserved(keys[i])) {
		proxy(vm, `_data`,keys[i])
	}
	observe(data,true)
}