/*----------------------------LineChart------------------------------------*/

var xValues = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

new Chart("myChart9", {
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
    text: "Products Statistics :"
  }
  }
});

/*----------------------------CircleChart------------------------------------*/
var xValues = [
"Active Products    30%", 
"Inactive Products   30%", 
"Available Products    30%", 
"Unavailable Products    30%", 
];
var yValues = [30, 30, 30, 30, 30, 30];
var barColors = [
"#c4960e",
"#80620a",
"#FFC107",
"#c4960e",
];

new Chart("myChart10", {
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
text: "Products Statistics"
}
}
});
