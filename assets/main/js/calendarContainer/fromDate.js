

/*-----------------------Prepare the Date-------------------------------*/
var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["M", "T", "W", "T", "F", "S", "S"];

    months = monthDefault;
    days = dayDefault;

var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;



/*----------------------Prepare-Year------------------------*/
        
function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}



/*----------------------From------------------------*/
today = new Date();
currentMonth1 = today.getMonth();
currentYear1 = today.getFullYear();
selectYear1 = document.getElementById("year");
selectMonth1 = document.getElementById("month");

createYear1 = generate_year_range( 1970, currentYear1 );
document.getElementById("year").innerHTML = createYear1;



/*-------------------------Function of Select On From------------------------*/
function choice1(){
    selectYear1.addEventListener("change", function() {
        currentYear1 = parseInt(selectYear1.value);
        showCalendar1(currentMonth1, currentYear1);
    });
    selectMonth1.addEventListener("change", function() {
        currentMonth1 = parseInt(selectMonth1.value);
        showCalendar1(currentMonth1, currentYear1);
    });
    
}

var fromMonthAndYear = document.getElementById("fromMonthAndYear");
showCalendar1(currentMonth1, currentYear1);

function showCalendar1(month, year) {
    
    var firstDay = ( new Date( year, month ) ).getDay() - 1;

    tbl = document.getElementById("calendar-body");

    
    tbl.innerHTML = "";
   
    fromMonthAndYear.innerHTML = months[month] + " " + year;
    selectYear1.value = year;
    selectMonth1.value = month;


    // creating all cells
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row);
    }

}



/*----------------------To------------------------*/
currentMonth2 = today.getMonth();
currentYear2 = today.getFullYear();
selectYear2 = document.getElementById("year");
selectMonth2 = document.getElementById("month");

createYear2 = generate_year_range( 1970, currentYear2 );
document.getElementById("year").innerHTML = createYear2;



/*-------------------------Function of Select On To------------------------*/
function choice2(){
    today = new Date();
    currentMonth2 = today.getMonth();
    currentYear2 = today.getFullYear();
    selectYear2 = document.getElementById("year");
    selectMonth2 = document.getElementById("month");

    selectYear2.addEventListener("change", function() {
        currentYear2 = parseInt(selectYear2.value);
        showCalendar2(currentMonth2, currentYear2);
    });
    selectMonth2.addEventListener("change", function() {
        currentMonth2 = parseInt(selectMonth2.value);
        showCalendar2(currentMonth2, currentYear2);
    });
    
}

var toMonthAndYear = document.getElementById("toMonthAndYear");
showCalendar2(currentMonth2, currentYear2);
function showCalendar2(month, year) {
    
    var firstDay = ( new Date( year, month ) ).getDay() - 1;

    tbl = document.getElementById("calendar-body");

    
    tbl.innerHTML = "";
   


    toMonthAndYear.innerHTML = months[month] + " " + year;
    selectYear2.value = year;
    selectMonth2.value = month;

    // creating all cells
    var date = 1;
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row);
    }

}








function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}














       
        /*--------Difference Function-------------*/
        // let set = document.getElementById('set');
        // let output = document.getElementById('output');
        
        // set.addEventListener("click", DifferenceFunction);
        // function DifferenceFunction() {
        //   let date1 = new Date(document.getElementById("date-1").value);
        //   let date2 = new Date(document.getElementById("date-2").value);
        
        //   if(date1.getTime() && date2.getTime())
        //   {
        //     let timeDifference = date2.getTime() - date1.getTime()
        //     let dayDifference = Math.abs(timeDifference/(1000*3600 * 24))
        //     console.log(dayDifference);
        //     output.innerHTML = `Difference between the two dates is <span>${dayDifference}</span>days`;
        //   }
        // }