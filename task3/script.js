const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showFalse(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showTrue(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showFalse(input2,'Password doesn\'t Match ')
    }
}

function isValidEmail(email){
        var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(email.value.match(pattern))
        {
            document.form.email.focus();
            return true;
        }
        else
        {
            showFalse(email,'Invalid email address.');
            document.form.email.focus();
            return false;
        }
}

function validatePassword(password,password2) {
    alert('password1 lenght' + password.length);
    alert('password2 length' + password2.length);
    var minNumberofChars = 6;
    var maxNumberofChars = 12;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,12}$/;
    if(password.length < minNumberofChars || password.length > maxNumberofChars){
        return false;
    }
    if(!regularExpression.test(password)) {
        showFalse(document.form.password, "password should contain atleast one number and one special character");
        document.form.password.focus();
        return false;
    }
    if(password2.length < minNumberofChars || password2.length > maxNumberofChars){
        showFalse(document.form.password2, "password should contain atleast one number and one special character");
        return false;
    }
    if(!regularExpression.test(password2)) {
        showFalse(document.form.password2,"password should contain atleast one number and one special character");
        document.form.password2.focus();
        return false;
    }
    if(password !== password2){
        showFalse(password2,'Password doesn\'t Match ')
    }

}

function checkRequired(inputArr){
  inputArr.forEach(input => {
       if(input.value.trim() === ''){
           showFalse(input,`${getFieldName(input)} is required`)
       }else{
           showTrue(input);
       }
  });
}


 function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }

 
 function checkLength(input,min,max){
     if(input.value.length<min){
         showFalse(input,`${getFieldName(input)} must be atleast ${min} characters`)
     }else{
         showTrue(input);
     }
 }


form.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    checkRequired([username,email,password,password2]);
     checkLength(username,3);
     checkLength(password,6);
     checkLength(password2,6)
     isValidEmail(email);
     validatePassword(password,password2);
     checkPasswordMatch(password,password2);
    

});
