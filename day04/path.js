/**
 * Created by web-01 on 2017/11/14.
 */
const path=require('path');
console.log(path.normalize('/test1//test2'));

console.log(path.join(__dirname,'/test1/test2'));

console.log(path.resolve('./test.js'));

console.log(path.isAbsolute(__filename));
console.log(path.extname(__filename));