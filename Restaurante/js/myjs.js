function optionCheck(){
        var option = document.getElementById("opcaopratos_id").value;
        if(option === "Pratos"){
            document.getElementById("pratos").style.display="block";
            document.getElementById("produtos").style.display="none";
        }
        if(option === "Produtos"){
            document.getElementById("produtos").style.display ="block";
            document.getElementById("pratos").style.display ="none";
            
        }
    }

