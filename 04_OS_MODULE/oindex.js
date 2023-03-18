const os=require('os');

//Getting Architecture of OS
console.log(os.arch());


const freeMemory=os.freemem();
console.log(`${freeMemory/1024/1024/1024} GB is Free `);


const totalMemory=os.totalmem();
console.log(`${totalMemory/1024/1024/1024} GB is Free `);

console.log(os.hostname());

console.log(os.platform());

console.log(os.type());