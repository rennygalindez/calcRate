// Error message function to know where the error is.

//

module.exports = function (error, filename) {
  console.log(
    '\x1b[31m',
    `Something was wrong in ${filename}, error description: ${error}`,
  );
  return 1;
};
