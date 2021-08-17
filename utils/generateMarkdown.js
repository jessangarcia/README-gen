const fs = require('fs');

//creates the readme page with all the data, data added in the index.js
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
          //if there's an error, reject the promise and send the errors to the Promise's `.catch()` method
          if (err) {
              reject(err);
              //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
          }

          //if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
              ok: true,
              message: 'README created!'
          });
      });
  });
};

module.exports = {writeFile};