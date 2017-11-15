/**
 * Created by web-01 on 2017/11/14.
 */
const url=require('url');

let string="http://bing.com:80/test/test2?k1=v1&k2=v2#ancle";

console.log(url.parse(string));
console.log(url.format(string));
