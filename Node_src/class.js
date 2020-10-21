let {execSync} = require("child_process");

class set_data{
    run(cwd, command) {
        return execSync(command, { cwd, encoding: "utf8" });
    }
    getShaHead(cwd) {
        return this.run(cwd, "echo penis");
    }
}

//python3 ./python_src/main.py

module.exports = new set_data()