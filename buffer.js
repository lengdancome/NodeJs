/**
 * Created by web-01 on 2017/11/10.
 */
//buffer »º³åÇø
let buff1=new Buffer(32);
console.log(buff1);

let buff2=new Buffer(64,66,67);
console.log(buff2);

let buff3=new Buffer('ABCa');
console.log(buff3);

let buf=Buffer.alloc(4);
console.log(buf);

let buff5=Buffer.alloc(10);
let s1="AA";
let s2="BB";
buff5.write(s1);
buff5.write(s2,2);
console.log(buff5.toString());
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('binary'));

for(let i=0;i<buff5.length;i++){
    console.log(buff5[i]);
}

