<?php
    $host="127.0.0.0";
    $user="root";
    $pwd="";
    $database="xz";
    $port="3306";
    $sql_charset="set name utf8";
    $conn=mysqli_connect($host,$user,$pwd,$database,$port);
    mysqli_query($conn,$sql_charset);

    function sql_execute($sql,$type){
        global $conn;
        $reault=mysqli_connect($conn,$sql);
        if(result){
             if(stripos($sql,"select")==-1){
                   return $result;
             }
        }
    }
?>