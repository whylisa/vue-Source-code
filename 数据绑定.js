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

export function proxy(target: Object,sourceKey: string,key: string) {
	sharedPropertyDefinition.get = function proxyGetter() {
		return this.[sourceKey][key]
	}
	sharedPropertyDefinition.set = function proxySetter (val) {
		this.[sourceKey][key] = val
	}
	Object.defineProperty(target,key,sharedPeopertyDefinition)
}
export class {
	value: any;
	dep: Dep;
	vmCount: number;
	constructor (value: any) {
		this.value = value
		this.dep = new Dep()
		this.vmCount = 0
		
		def(value,'__ob__',this) 
		if(Array.isArray(value)) {
			const augument = hasProto?protoAugment: copyAugment,
			augment(value,arrayMetheds,arrayKeys)
			this.observeArray(value)
		}else {
			this.walk(value)
		}
	}
	walk(obj: Object ) {
		const keys = Object.keys(obj)
		for(let i= 0;i< keys.length;i++) {
			defineReactive(obj,keys[i],obj[keys[i]])
		}
	}
	observeArray(item: Array<any>) {
		for (let i = 0,l = items.length; i < l ;i++) {
			observe(items[i])
		}
	}
}