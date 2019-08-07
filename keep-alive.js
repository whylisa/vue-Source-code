<keep-alive>
  <component></component>
</keep-alive>

created () {
	this.cache = Object.create(null)
}
destroyed () {
	for (const key in this.cache) {
		pruneCacheEntry(this.cache[key])
	}
}

render () {
	const vnode =: Vnode = getFirstComponentChild(this.$slots.default)
	const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
	
	if(componentOptions) {
		const name: ?string = getComponentName(componentOptions)
		if(name &&)
	}
}
