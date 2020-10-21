class init {
    constructor() {
        this.data = []
        this.loadData = document.querySelector("#chartContainer")
    }

    async iniciar () {

        this.loadData.innerHTML += "<h1>Loading Chart Data...</h1>";


        let api = await fetch("http://localhost:3333/demo", {
            method: "POST",
            headers: {
                 'Content-Type': 'application/json'
            }
        }).catch((err) => {
            this.loadData.innerHTML += `<h1>Error on load Data ${err} </h1>`;
        })


        if (api.ok)
            api.json().then((res) => {
                console.log(res)
                this.data = res;
                this.renderChart()
            })
    }

    renderChart() {
        let dps = []

        let time = this.data["res"]["time"]
        this.data = this.data['res']["test"]

        let chart = new CanvasJS.Chart("chartContainer", {
            zoomEnabled: true,
            title: {
                text: "EGC"

            },
            data: dps


        })

        addDataPointsAndStripLines(this.data)

        console.log(dps[0].dataPoints)
        chart.render()

        function addDataPointsAndStripLines(data) {
            for (let i in data){
                let points = []

                for(let j = 0; j < data[i].length; j++){
                    points.push({y: data[i][j], x: time[j]})
                }

                dps.push({ type: "spline", color:"black", dataPoints: points})
            }


        }
    }

    async sendFile(){

        let form = new FormData(document.getElementById("form"))


        let api = await fetch("http://localhost:3333/uploads", {
            method: "POST",

            body: form
        })

        if(api.ok){
            api.json().then(data => {
                console.log(data)
            })
        }


    }
}