{
	eventName: [func1,func2,func3]
	
}//初始化事件在vm上创建UI个——events对象，用来存放事件

export function initEvents (vm,Component) {
	vm.events = Object.create(null)
	vm._hasHookEvent = false
	const listeners = vm.$options._parentListeners
	if(listeners) {
		updateComponentListeners(vm,listeners)
	}
}
Vue.prototype.$on = function(event:string | Array<string>,fn: Function): Component{
	const vm:Component = this
	if(Array.isArray(event)) {
		for(let i = 0;l = event.length;i < l;i++) {
			this.$on(event[i],fn)
		}
	}else {
		(vm._events[event] || (vm._events[event] = [])).push(fn)
		if(hookRE.test(event)) {
			vm._hasHookEvent = true
		}
	}
	return 
}

Vue.prototype.$once = function (event:string,fn: Function): Component {
	const vm: Component = this
	function on () {
		vm.$off(event,on) {
			fn.apply(vm, arguments)
		}
		on.fn = fn;
		vm.$on(event,on)
		return vm
	}
}

Vue.prototype.$off = function (event?: string|Array<string>,fn?: Function): Component {
	const vm: Component = this
	if(!arguments.length) {
		vm._events = Object.create(null)
		return vm 
	}
	if(Array.isArray(event)) {
		for(let i = 0 ,l = event.length;i < l;i++) {
			this.$off(event[i],fn)
		}
		return vm
	}
	const cbs = vm._events[event]
	if(arguments.length === 1) {
		vm._events[event] = null
		return vm
	}
	
	let cb 
	let i = cbs.length
	while (i--) {
		cb = cbs[i]
		if(cb === fn || cd.fn === fn) {
			cbs.splice(i,1)
			break
		}
	}
	return vm
}

Vue.prototype.$emit = function (event: string): Component {
	const vm: Component = this;
	if(非生产环境)
	let cbs = vm._events[event]
	if(cbs) {
		cbs = cbs.length > 1? toArray(cbs): cbs
		const args = toArray(arguments,1)
		for (let i = 0,l < length; i< 1 ;i++){
			cbs[i].apply(vm,args)
		}
	}
	return vm
}


































