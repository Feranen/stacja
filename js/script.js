function calculate() {
    var type = parseFloat(document.getElementById('type').value);
    var count = parseFloat(document.getElementById('count').value);
    if (type==1){
        var final = count * 4;

    } else if (type==2) {
        var final = count * 3.5;
    } else {
        var final = 0; 
    
    }
    document.getElementById('result').innerHTML = "Koszt: " + final + " zł";

}