const path = require("path")

const sqlite = require('sqlite3').verbose()



class dbo {
    constructor() {
        this.db = new sqlite.Database(path.resolve(__dirname, "../", "database/", "data.db"), err => {
            if(err) throw err; 

            console.log("Banco conectado")
        })

    }
    get_all(res){  
        this.db.all("select * from user_data order by data desc limit 5", [], (err, row) => {
            if (err) throw err;

            res.json(row);        
        })

    }

    insert_data(data, res){
        console.log(data)
        this.db.run("insert into user_data values (?,DATETIME('now', 'localtime'),?, ?)", data, (err) => {
            if (err)  throw err
        })

        res.json({"res" : "Log Salvo"})
    }

    deleteAll(res){
        this.db.run("delete from user_data", [], (err) => {
            if (err) throw err
        })

        res.json({"res" : "logs removidos"})
    }

}


module.exports = new dbo()