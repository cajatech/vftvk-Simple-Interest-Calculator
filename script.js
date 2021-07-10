function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" + 
    "at an interest rate of <mark>" + rate + "</mark>.<br/>" +
    "You will receive an amount of  <mark>" + interest + "</mark>,<br/> " + 
    "in the year <mark>" + yearInTheFuture + "</mark>";
    
}
function getSliderValue(){
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

function validateAmount() {
    var biggerThanZero = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
        