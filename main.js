function calc() {
    var a = parseInt(document.querySelector("#alt").value);
    var d = parseInt(document.querySelector("#desalt").value);
    var gs = parseInt(document.querySelector("#gs").value);
    var op = document.querySelector("#select").value;
    var calculate;
    var first;
    var second;
    var third;
    var fpm;
    if (op == "HeadWind"){
        first  = a - d;
        second = first / 1000;
        third = second * 3 + 10;
    } else if (op == "TailWind"){
        first = a -d;
        second = first / 1000;
        third = second * 3;}
        


        fpm = gs*5;

        calculate = "TOD in: " + third + " nautialmiles" + "<br>" + "With a decent rate of: " + fpm;
        
        
        

    


    
     
    document.querySelector("#result").innerHTML = calculate;
}
