function getIP(json){
    alert('your ip is' + json.ip)
}

const fs = require('fs');

let Data = [new Date()] = json.ip

fs.writeFile("./data/data.json", Data, function(err){
    if(err === null) {
        console.log("저장 성공");

    }else{
        console.log("저장실패")
    }
});