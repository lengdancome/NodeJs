/**
 * Created by web-01 on 2017/11/14.
 */
const mysql=require('mysql');

let pool=mysql.createPool({
    connectionLimit:10,
    user:'root'
});

pool.getConnection((err,connection)=>{
    if(err) throw err;
    let sql="delete from scroll,emp where id=9";

});