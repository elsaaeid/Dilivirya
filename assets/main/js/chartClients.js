
/*----------------------------LineChart------------------------------------*/

var xValues = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

new Chart("myChart7", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [120,97,175,95,110,97,105,105,100,125,120,250,150,151,90,110,105,250],
     backgroundColor: "orange",
      fill: true
    }]
  },
  options: {
    legend: {display: false},
    title: {
    display: true,
    text: "Clients Statistics :"
  }
  }
});
/*----------------------------CircleChart------------------------------------*/
var xValues = ["Active Clients    30%", 
"Inactive Clients    30%", 
"Blocked Clients    30%", 
];
var yValues = [30, 30, 30, 30, 30, 30];
var barColors = [
"#FFC107",
"#7952B3",
"#484C53",
];

new Chart("myChart8", {
type: "pie",
data: {
labels: xValues,
datasets: [{
backgroundColor: barColors,
data: yValues
}]
},
options: {
title: {
display: true,
text: "Clients Statistics"
}
}
});
