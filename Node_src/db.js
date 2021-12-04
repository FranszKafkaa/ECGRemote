const mysql = require('mysql')


class dbo {
    constructor() {
        this.connection = mysql.createConnection({
            host: "cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            user: "fmlicoli8fxucbwn",
            password: "x9f4idv8lb53v01m",
            database: "p63fwwhqfebs9wx3",
            port: 3306
        })

        this.connection.connect(err => {
            if (err) throw err

            console.log("Banco conectado")
        })

    }

    save_txt(data){
        this.connection.query("insert into req_txt_log(nome_arquivo, caminho_arquivo,ip,json_data,user_agent,StatusCode,rota,method) values (?,?,?,?,?,?,?,?)", 
        data, (err, result) => {
            if(err) throw err

            console.log(result)
        })
    }
    get_txt(res){
        this.connection.query("select * from req_txt_log order by data_arquivo desc", (err, result ) => {
            if(err) throw err 

            res.json(result)
        })
    }

    get_all(res){  
        this.connection.query("select * from user_data", (err, result) => {
            if(err) throw err

            res.json(result)

        })

        
    }

    insert_data(data, res){
        this.connection.query("insert into user_data(data_req,ip,json_data, user_agent) values (CURDATE(), ?, ?, ?)", 
        data, (err, result)=>{
            if(err) throw err

            console.log(result)

            res.json({"res" : "Log Salvo"})

        })
    }

    deleteAll(res){
        this.connection.query("delete from user_data", (err, result) => {
            if(err) throw err

            console.log(result)
            res.json({"res": "log Deletado"})
        })
    }
}


module.exports = new dbo()