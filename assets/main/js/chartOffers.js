/*----------------------------LineChart------------------------------------*/

var xValues = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [120,97,175,95,110,97,105,105,100,125,120,250,150,151,90,110,105,250],
     backgroundColor: "orange",
      fill: true,
      zIndex: '-1'
    },
    { 
        data: [90,20,25,15,30,33,90,90,20,25,15,17,15,30,15,30,30,20],
        borderColor: "#7952B3",
        fill: false,
        zIndex: '1'
      }]
  },
  options: {
    legend: {display: true},
    title: {
    display: true,
    text: "Offers Statistics :"
  }
  }
});

/*----------------------------CircleChart------------------------------------*/
var xValues = ["Active offers   30%", 
"Expired offers    30%", 
"Inactive offers    30%", 
];
var yValues = [30, 30, 30];
var barColors = [
"#FFC107",
"#0ae50a",
"#2fb2ec",
];

new Chart("myChart4", {
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
text: "Offers Statistics"
}
}
});
