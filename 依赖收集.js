class Dep {
	constructor () {
		this.subs = []
	}
	addSub (sub: watcher) {
		remove(this.subs,sub)
	}
	removeSub (sub:Watcher) {
		remove(this.subs,sub)
	}
	notify () {
		const subs = this.subs.slice()
		for(let i = 0,l = subs.length;i < l;i++ ){
			subs[i].update()
		}
	}
}
function remove(arr,item) {
	if(arr.length) {
		const index = arr.indexOf(item)
		if(index > -1) {
			return arr.splice(index,1)
		}
	}
}

class Watcher {
	constructor (vm,expOrfn,cb,options) {
		this.cb = cb;
		this.vm = vm;
		Dep.target = this
		this.cb.call(this.vm)
	}
	update () {
		this.cb.call(this.vm)
	}
}
