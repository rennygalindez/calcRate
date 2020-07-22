// Error message function to know where the error is.

//

module.exports = function (error, filename) {
  console.log(`Somethng was wrong in ${filename}, error description: ${error}`);
};
