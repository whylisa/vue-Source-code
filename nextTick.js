宏任务: setTimeout
I / O
setInterval
setImmediate
主线程
MessageChannel

微任务: Promise系列.then.catch.finally
process.nexTick
MutationObserver

setTimeout(() => {
	console.log(8)
}, 2000)

setTimeout(() => {
	console.log(3)
	Promise.resolve().then(() => {
		console.log(4)
	})
	setTimeout(() => {
		console.log(6)
	}, 3000)
}, 1000)

new Promise((resolve, reject) => {
	console.log(5)
}).then(() => {
	console.log(7)
})

console.log(2)
setTimeout(()=>{
    console.log("setTimeout1");
    Promise.resolve().then(data => {
        console.log(222);
    });
});
setTimeout(()=>{
    console.log("setTimeout2");
});
Promise.resolve().then(data=>{
    console.log(111);
});
setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
})

console.log(2)
setTimeout(function () {
    console.log('setTimeout---0');
}, 0);

setTimeout(function () {
    console.log('setTimeout---200');
    setTimeout(function () {
        console.log('inner-setTimeout---0');
    });
    Promise.resolve().then(function () {
        console.log('promise5');
    });
}, 200);

Promise.resolve().then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
});
Promise.resolve().then(function () {
    console.log('promise3');
});
console.log('script end');

