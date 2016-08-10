// setup for file system
const fs = require('fs');

// setup for directory
const dir = '/.logs';

// debug method
exports.debug = (data) => {
  // id debug mode equal true
  if (process.env.DEBUG) {
// if logs directories doesnt exist create a log directory
    if (!fs.existsSync(dir)) {
  // make logs directory folder
      fs.mkdirSync(dir);
      fs.writeFile('dir/err.log')
// else if logs directory does exist write
    } else if (fs.existsSync) {
      // write to existing file
      // writefile overwrites use appendfile
      fs.appendFile('logs/err.log', data, (err) => {
        // if  error throw error
        if (err) throw err;
        // let dev know file was sucessfully appended
        console.log('the data was appended to the file');
      });
    }
  } // closing if debug process
}; // closing debug method
