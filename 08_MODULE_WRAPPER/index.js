//Defining Global Function using "(  )"{Grouping Operator} and things written inside it will be private
//JS inbuiltly implements this while exporting
//It is Like IIFE in ADV JS which is used to make things protected

//THE below mentioned CODE is BTS code can't be run by us
// (function(exports,require,module,__filename,__dirname){
//     const name="Aniket";
//     console.log(name);
// }) 

//IIFE(Immediately Invoked Function Operator) in  JS
(function(){
   var a="Aniket";
    console.log(a);
})();

//Getting the file and dirname
console.log(__filename);
console.log(__dirname);