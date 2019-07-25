const fs = require('fs');
fs.readFile('./1.txt',{encoding:'utf8'},(err,data)=>{
    if(err){
        console.log(err);
    }else {
        // console.log(data);
    }
})
fs.writeFile('./1.txt','我们',{encoding:'utf8',flag:'a'},(err)=>{
    if(err){
        console.log(err);
    }else {
    }
})  

fs.open('./1.txt','r','0o666',(err,fd)=>{
    if(err){
        console.log(err);
    }else {
        // console.log(fd);
        let buf = Buffer.alloc(4);
        fs.read(fd,buf,0,1,2,function(err,bty,buf){
            console.log(buf.toString());
        })
    }
})