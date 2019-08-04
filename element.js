function broadast(componentName,eventName,params) {
	this.$children.forEach( child => {
		var name = child.$options.componentName;
		if(name === componentName) {
			child.$emit.apply(child,[eventName].concat(params));
		}else {
			broadcast.apply(child,[componentName,eventName].concat([params]))
		}
	})
}
export default {
	methods: {
		dispatch(componentName,eventName,params) {
			var parent = this.$parent || this.$root
			var name = parent.$options.comparentName;
			while (parent && (!name || name !== comparentName)) {
				parent = parent.$parent
				
				if(parent) {
					name = parent.$options.componentName
				}
			}
			if(parent) {
				parent.$emit.apply(parent,[event,[eventName].concat(params)])
			}
		},
		broadcast(comparentName,eventName,params) {
			broadcast.call(thiscomponentName,eventName,params)
		}
	}
}