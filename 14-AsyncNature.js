console.log('start')

// time comsuming code is run at the end of imediate code execution
// offload this if it is time consuming
setTimeout(()=>{ // used for scheduling a function to be executed after a certain delay
    console.log('setTimeout executed')

}, 5000) // this is the delay amount in milliseconds

// imediate code is run first 
console.log('end')
console.log('end')
console.log('end')
console.log('end')
setTimeout(()=>{
    console.log('second timeout executing')
},10)
console.log('end')
console.log('end')
setInterval(()=>{ // a funciton used for scheduling a function to be executed repeatedly after a certain amount of time
    console.log('setInterval is executing')
},3000) // this is the amount of time interval
console.log('after setInterval code is executed')