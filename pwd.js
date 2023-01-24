// The stdin 'data' event fires after a user types in a line
module.exports = function pwd() {
  process.stdout.write(`Current directory: ${process.cwd()}`);
};
