/*----------------------------LineChart------------------------------------*/

var xValues = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

new Chart("myChartViews", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [120,97,175,95,110,97,105,105,100,125,120,250,150,151,90,110,105,250],
     backgroundColor: "orange",
      fill: true,
      z: 0
    },
    { 
        data: [90,20,25,15,30,33,90,90,20,25,15,17,15,30,15,30,30,20],
        borderColor: "#7952B3",
        tickColor: '#7952B3',
        fill: false,
        z: 1
      }]
  },
  options: {
    legend: {display: false},
    tickBorderDashOffset: {display: false},
    title: {
    display: true,
    text: "Story Views Statistics :"
  }
  }
});

/*----------------------------CircleChart-one------------------------------------*/
var xValues = ["Age from 13 to 17   30%", 
"Age from 18 to 24   30%", 
"Age from 25 to 34   30%", 
"Age from 35 to 44   30%", 
"Age from 45 to 54   30%", 
"Age from 55 to 64   30%", 
"Age Above 65   30%", 
];
var yValues = [30, 30, 30,30, 30, 30];
var barColors = [
"#FFC107",
"#0ae50a",
"#1b83eb",
"#FFC107",
"#0ae50a",
"#1b83eb",
"#1b83eb"
];

new Chart("myChart5", {
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
text: "Story views details (Age) :"
},
}
});


/*----------------------------CircleChart-two------------------------------------*/
var xValues = ["Male", 
"Female", 
"Others", 
];
var yValues = [60, 30, 30];
var barColors = [
"#1b83eb",
"#e600e6",
"#0ae50a",
];

new Chart("myChart6", {
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
text: "Story views details (Gender) :"
}
}
});