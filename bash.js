const pwd = require("./pwd");
const ls = require("./ls");

//Output a prompt
process.stdout.write("prompt > ");
process.cwd();

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  const cwd = process.cwd();

  if (cmd === "pwd") {
    // //process.stdout.write(`Current directory: ${cwd}`);
    // process.stdout.write(`Current directory: ${process.cwd()}`);
    // //console.log(path.resolve(process.cwd()));ls
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else {
    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
