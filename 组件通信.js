<template>
  <child :msg="message"></child>
</template>

import child from './child.vue'
export default {
	components: {
		child
	},
	data () {
		return {
			message:'father message'
		}
	}
}

<template>
   <div>{{msg}}</div>
</template>
export default {
	props:{
		msg: {
			type: String,
			required: true
		}
	}
}

<tmepalte>
 <child @msgFunc="func"></child>
</tempalte>

import child from './child.vue'

export default {
	components:{
		child
	},
	methods: {
		func (msg) {
			console.log(msg)
		}
	}
}

<template>
  <button @click="handleChick">click me</button>
</tempalte>
export default {
	props: {
		msg: {
			type: String,
			required: true
		}
	},
	methods () {
		handleClick() {
			this.$emit('msgFunc')
		}
	}
}

let event = new Vue()

event.$on('eventName', (val) => {
	
})

event .$emit('eventName','this is a message')





















