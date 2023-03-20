const add=(x,y)=>{
    return x+y;
};

const sub=(x,y)=>{
    return x-y;
};

const mult=(x,y)=>{
    return x*y;
};

const name="Aniket";

//The function or other parameter which we want to export is to be written here

//If multiple functions are needed to be exported
// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mult=mult;


//To remove writing this repetetive module.exports we can use this
module.exports={add,sub,mult,name};