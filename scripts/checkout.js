var form = document.getElementById("basicInfo")
var button = document.getElementById("submit")

button.addEventListener("click", function(){
    var pattern = {
			
        firstName:/^[a-zA-Z]+$/,
        lastName:/^[a-zA-Z]+$/
    }

    let fName = form.querySelector("#firstName")
    

    if(validationName(fName,pattern.firstName )){
        if(validationName(lName,pattern.lastName )){
        }
        

    }

})



function validationName(fName, regEx){
			
			
    if(regEx.test(fName.value)){
        document.getElementById('checkname').textContent = "Purchase made!";
        return true;
        
    }else{
        
        document.getElementById('checkname').textContent = "Please, Enter your name";
        return false;
    }
}

