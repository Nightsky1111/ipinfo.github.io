const fs = require('fs')
function getIP(json){
    alert('your ip is' + json.ip)
}

console.log(getIP)
.then(() => {
    let data = getIP[new Date()]
    fs.writeFile("./data/data.json", JSON.stringify(data))
})