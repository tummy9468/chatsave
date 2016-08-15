$(function () {
        $("#save-btn").click(function() {
        $("#canvas").get(0).toBlob(function(blob) {
            saveAs(blob, "chart_1.png");
  $("#save-btn1").click(function() {
        $("#canvas4").get(0).toBlob(function(blob) {
            saveAs(blob, "chart_1.png");

        });
});
        });
});

          
      
   var data = {
    title:{
           display: true,
            text: "Default Tool Tip"
      },   
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
             
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            fillColor : "transparent",
            strokeColor : "rgba(220,40,40,1)",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
};
   var data2 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [

        {


            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            fillColor : "#FF66FF",
            strokeColor : "rgba(220,40,40,1)",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [500, 501, 478, 508, 520, 515, 502],
            spanGaps: false,
        }
    ]
};
            var myBar = new Chart(document.getElementById("canvas").getContext("2d")).Line(data);
            var myBar = new Chart(document.getElementById("canvas4").getContext("2d")).Bar(data2);

        });