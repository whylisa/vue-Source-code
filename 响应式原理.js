vue.js是一门MVVM框架,响应式原理依赖于[Object.defineProperty()()]

// 将数据data变成可观察(observable)

function obseve(value ,cb) {
	Object.keys(value).forEach((key) => defineReactive(value,ky,value[key],cb))
}
function defineReactive (obj,key,val,cb) {
	Object.defineProperty(obj,key,{
		enumerable: true,
		configurable: true,
		get: () => {
			return val
		},
		set: newVal => {
			val = newVal;
			cb()//订阅者收到消息的回调
		}
	})
}
class Vue {
	constructor(options) {
		this._data = options.data
		observe(this._data,options.render)
	}
}

let app = new Vue({
	el: '#app',
	data: {
		text: 'text',
		text2: 'text2'
	},
	render() {
		console.log("render")
	}
})

_proxy.call(this,options.data)

function _proxy(data) {
	const that = this;
	Object.keys(data).forEach(key => {
		Object.defineProperty(that,key,{
			configurable: true,
			enumerable: true,
			get: function proxyGetter () {
				return that._data[key]
			},
			set: function proxySetter (val) {
				that._data[key] = val
			}
		})
	})
}