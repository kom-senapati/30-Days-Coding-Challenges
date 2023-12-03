// Challenge 28
// Description:
// Create a proxy object that intercepts 
// and logs all property access.

const Obj = { x: 1, y: 0 }

const loggingHandler = {
    get: function (target, prop, receiver) {
        console.log(`Accessing Property - ${prop}`)
        return Reflect.get(target, prop, receiver)
    }
}

const ProxyObj = new Proxy(Obj, loggingHandler)

for (let key in Obj) {
    console.log(ProxyObj[key])
}