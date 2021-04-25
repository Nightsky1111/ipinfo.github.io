const { resolve } = require("path");
const fs = require('fs')
const IPDATA = require('./data/data.json')

function getIP(json){
    alert('your ip is' + json.ip);
}




if(KeyboardEvent("?")){
    IPDATA[new Date()] = getIP
    
    fs.writeFile(resolve(process.cwd(), 'data/data.json'), JSON.stringify(IPDATA))
}