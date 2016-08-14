const colors = require('colors');

// setup for file system
const fs = require('fs');

// set time stamp for logs
const ts = new Date();

const seperator = '\n=============\n'.magenta;

// debug method
exports.debug = (data) => {
  const out1 = seperator + ts + '\n \n' + data + '\n \n' + seperator;

  // id debug mode equal true
  if (process.env.DEBUG) {
    fs.appendFile('logs/err.log', out1, (err) => {
      if (err) throw err;
    // let dev know file was sucessfully appended
      console.log(colors.cyan('log updated sucessfully'));
    }); // closing append file
  } // closing if debug process
  console.log(out1);
}; // closing debug export
