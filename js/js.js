document.getElementById("submit-button").addEventListener("click", function (e){
    const emailinput = document.getElementById("email-input");
    emailFlide = emailinput.value;
    const passwordinput = document.getElementById("password-input");
    passwordFlide = passwordinput.value;
   if(emailFlide == 'Mosiurislam@gmail.com' && passwordFlide == 'Mosiur411'){
       window.location.href ="login.html"
   }
   else{
       alert("Note Cract password")
   }
});