const fs = require('fs')
function getIP(json){
    alert('your ip is' + json.ip)
}

console.log(getIP)
.then(() => {
    let Data = [new Date()] = getIP
    fs.writeFile("./data/data.json", JSON.stringify(Data))
})