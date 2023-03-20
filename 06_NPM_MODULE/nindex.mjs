//Nowadays in Many NPM module "REQUIRE" function doesn't work for ESM so import such module use 
//"import" command and to use import command we have to save file with extn=".mjs"
import chalk from 'chalk';

import validator  from 'validator';

console.log(chalk.blue.underline.inverse.italic('Im Aniket Suthar'));

console.log(chalk.green.underline.inverse.italic('Success'));

console.log(chalk.red.underline.inverse.italic('Fail'));


//Not useful very effectively
const result=validator.isEmail('apsuthar24@gma.adasfcom');
console.log(result?chalk.green.inverse.italic(result):chalk.red.inverse.italic(result));