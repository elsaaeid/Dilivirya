function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        ul.style.display= "block";
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul.style.display= "none";
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
            ul.style.display= "block";
        }
    }
}


