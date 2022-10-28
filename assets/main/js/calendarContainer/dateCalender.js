    
    /*-------------------------show-and-hide-calendar---------------------------*/
    function calendarFunction() {
        document.getElementById("containerCalendar").classList.toggle("myStyle");
    };




    /*-----------Calendar----------------------*/

        
        const mainCalendar = document.getElementById('mainCalendar');

    

        const mainCalendarContent = `
        <div id="calendarTo">
            <div class="button-container-calendar d-flex flex-row align-items-center">
                <select id="month">
                    <option value=0>Jan</option>
                    <option value=1>Feb</option>
                    <option value=2>Mar</option>
                    <option value=3>Apr</option>
                    <option value=4>May</option>
                    <option value=5>Jun</option>
                    <option value=6>Jul</option>
                    <option value=7>Aug</option>
                    <option value=8>Sep</option>
                    <option value=9>Oct</option>
                    <option value=10>Nov</option>
                    <option value=11>Dec</option>
                </select>
                <select id="year"></select> 
            </div>    
            <table class="table-calendar" id="calendar" data-lang="en">
                <thead id="thead-month"></thead>
                <tbody id="calendar-body"></tbody>
            </table>
            <div class="FromToShow d-flex flex-col">
                <div class="showAfter d-flex flex-row">
                    <h3>From</h3> 
                    <h3>To</h3>
                </div>
                <div class="showAfter result d-flex flex-row">
                    <h3 id="fromMonthAndYear" class="MonthAndYear">MMMM D, YYYY</h3> 
                    <h3 id="toMonthAndYear" class="MonthAndYear">MMMM D, YYYY</h3>
                </div> 
            </div>
        </div>
        `;


        mainCalendar.innerHTML = mainCalendarContent;
