let vm = new Vue({
	el: 'app'
	
})

function Vue (options) {
	if("不是生产环境")
	
	this._init(options)//初始化
}

Vue.prototype._init = function (options?: Object) {
	const vm: Component = this
	vm._uid = uid++
	let startTag,endTag
	
	vm._isVue = true
	vm._self = vm
	initLifecycle(vm)
	initEvents(vm)
	initRender(vm)
	callHook(vm,'beforeCreate')
	initInjections(vm)
	initState(vm)
	initProvide(vm)
	
	callHook(vm,'created')
}
