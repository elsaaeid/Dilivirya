/*----------------------------LineChart------------------------------------*/

var xValues = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [120,97,175,95,110,97,105,105,100,125,120,250,150,151,90,110,105,250],
      backgroundColor: 'orange',
      fill: true
    }]
  },
  options: {
    legend: {display: false},
    title: {
    display: true,
    text: "Orders Statistics :"
  }
  }
});

/*----------------------------CircleChart------------------------------------*/
var xValues = ["Rejected orders    30%", 
"Approved orders    30%", 
"Canceled orders    30%", 
"Delivered orders    30%", 
"On the way    30%", 
"Pending orders    30%"
];
var yValues = [30, 30, 30, 30, 30, 30];
var barColors = [
"#FFC107",
"#7952B3",
"#484C53",
"#6A6D70",
"#80620a",
"#80620a",
];

new Chart("myChart2", {
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
text: "Orders Statistics"
}
}
});
