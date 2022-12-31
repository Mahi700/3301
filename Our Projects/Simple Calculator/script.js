function calculate(){
    var opr1 = document.getElementById("first_input").value;
    var opr2 = document.getElementById("second_input").value;
    var operation = document.getElementById("operations").value;

    if (operation == "+"){
        var res = parseInt(opr1) + parseInt(opr2);
    }
    if (operation == "-"){
        var res = parseInt(opr1) - parseInt(opr2);
    }
    if (operation == "*"){
        var res = parseInt(opr1) * parseInt(opr2);
    }
    if (operation == "/"){
        var res = parseInt(opr1) / parseInt(opr2);
    }
    if (operation == "%"){
        var res = parseInt(opr1) % parseInt(opr2);
    }
    if (operation == "**"){
        var res = parseInt(opr1) ** parseInt(opr2);
    }

    document.getElementById("Result").value = res;
    
}