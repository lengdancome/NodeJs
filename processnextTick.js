/**
 * Created by web-01 on 2017/11/13.
 */
console.log('start');
process.nextTick(()=>{
    console.log('next tick');
})
console.log('end');

console.log("start");
setImmediate(()=>{
    console.log('setImmediate');
})
process.nextTick(()=>{
    console.log("process nextTick");
})