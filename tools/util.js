// setup for file system
const fs = require('fs');

// set time stamp for logs
const ts = new Date();

// setup for directory
const dir = './logs';

const seperator = '\n=============\n';

// debug method
exports.debug = (data) => {
  const out1 = seperator + ts + '\n \n' + data + '\n \n' + seperator;

  // id debug mode equal true
  if (process.env.DEBUG) {
// if logs directories doesnt exist create a log directory

    if (!fs.existsSync(dir)) {
  // make logs directory folder
      fs.mkdirSync(dir);
  // make log file
      fs.writeFile('dir/err.log');
// else if logs directory does exist write
    } else if (fs.exists) {
      // write to existing file
      // writefile overwrites use appendfile to add
      fs.appendFile('logs/err.log', out1, (err) => {
        if (err) throw (err)
      // let dev know file was sucessfully appended
        console.log('Error log sucessfully updated');
      });
    } // closing if folder existing
  } // closing if debug process
}; // closing debug method
