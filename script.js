let text = "Fontstyle";



function myFunction() {

    var fn = document.getElementById("Search").value;
    if (fn.length > 0) {

        document.getElementById("ans").innerHTML =
            fn;
        document.getElementById("ans1").innerHTML =
            fn;
        document.getElementById("ans2").innerHTML =
            fn;
        document.getElementById("ans3").innerHTML =
            fn;
        document.getElementById("ans4").innerHTML =
            fn;


    } else {
        document.getElementById("ans").innerHTML = text;
        document.getElementById("ans1").innerHTML = text;
        document.getElementById("ans2").innerHTML = text;
        document.getElementById("ans3").innerHTML = text;
        document.getElementById("ans4").innerHTML = text;
    }

}


// copy Function