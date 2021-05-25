let {execSync} = require("child_process");

module.exports = class set_data{

    constructor(id) {
        this.id = id
    }
    run(cwd, command) {
        return execSync(command, { cwd, encoding: "utf8" });
    }
    getShaHead(cwd) {
        return this.run(cwd, "python3 ./python_src/main.py " + this.id);
    }
}