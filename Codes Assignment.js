
function Calculate(){
    var heightdata = document.getElementById("Height").value;
    var weightdata = document.getElementById("Weight").value;

    var result = parseFloat(weightdata) /(parseFloat(heightdata)/100)**2;
    if(!isNaN(result)){
        document.getElementById("BMIResult").innerHTML = result.toFixed(1);
        if(result < 18.5){
            document.getElementById("ResultExplained").innerHTML = 'Anda kekurangan berat badan!';
        }
        else if(result >= 18.5 && result <= 24.9){
            document.getElementById("ResultExplained").innerHTML = 'Berat Badan anda ideal!';
        }
        else if(result >= 25.0 && result <= 29.9){
            document.getElementById("ResultExplained").innerHTML = 'Anda kelebihan berat badan!';
        }
        else{
            document.getElementById("ResultExplained").innerHTML = 'Anda mengalami obesitas!';
        }
    }
}
function CheckForm(){
    if (document.getElementById("Age") == '' || document.getElementById("Height") == '' || document.getElementById("Weight") == '' || document.getElementsByClassName("Gender") == ''){
        document.getElementById("Error").innerHTML = 'Mohon isi bagian yang kosong';
    }
}