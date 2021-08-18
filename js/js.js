
var password = document.getElementById("senha")
var iconShow = document.getElementById("show")

//https://www.geeksforgeeks.org/how-to-add-a-tooltip-to-a-div-using-javascript/

function hideShowPassword(){
    if(password.type === "password"){
        password.type = "text"
        document.getElementById('hide').style.display = "inline-block"
        document.getElementById('show').style.display = "none"
    }else{
        password.type = "password"
        document.getElementById('hide').style.display = "none"
        document.getElementById('show').style.display = "inline-block"
    }
}


