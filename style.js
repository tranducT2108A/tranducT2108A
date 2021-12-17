function check() {
    var lname = document.getElementById("lname").value;
    var fname = document.getElementById("fname").value;
    var email = document.getElementById('emailName').value;
    var password = document.getElementById('password');
    var cfpassword = document.getElementById("confirm");
    var msg1 = document.getElementById('youcan');
    var msg2 = document.getElementById('character');


    if (lname.length <=0 && fname.length<=0){
        document.getElementById('msg-name').innerHTML='Enter first name and surname';
        lname.focus();


    }
    if (fname.length <= 0) {
        document.getElementById("msg-name").innerHTML = "Enter first name";
        fname.focus();


    }if (lname.length <= 0) {
        document.getElementById("msg-name").innerHTML = "Enter last name";
        lname.focus();


    }if (email.length <= 0) {
        msg1.style.display= 'none';
        document.getElementById("msg-username").innerHTML = "Choose a Gmail address";
        email.focus();


    } if (password.value.length <= 0) {
        msg2.style.display= 'none';
        document.getElementById("msg-password").innerHTML = "Enter a password";
        password.focus();



    }if (password.value.length <= 7) {
        msg2.style.display= 'none';
        document.getElementById("msg-password").innerHTML = "Use 8 characters or more for your password";
        password.focus();



    }if (cfpassword.value.length <= 0) {
        msg2.style.display= 'none';
        document.getElementById("msg-password").innerHTML = "Confirm your password";
        cfpassword.focus();



    }else if (cfpassword.value != password.value) {
        msg2.style.display= 'none';
        document.getElementById("msg-password").innerHTML = "Those passwords didn’t match. Try again.";
        cfpassword.focus();



    } else{
        document.getElementById('login2').style.display='block';
        document.getElementById('login').style.display='none';
        document.getElementById('outName').innerHTML = "hello: " +lname;
        document.getElementById('outGmail').innerHTML = email +"@gmail.com";
    }


}
function showPass(){
    var checkbox = document.getElementById('checkbox');
    var password = document.getElementById('password');
    var cfpassword = document.getElementById("confirm");

    if(checkbox.checked){
        password.setAttribute( 'type', 'text' );
        cfpassword.setAttribute('type','text');
    }
}

function rollBack(){
    document.getElementById('login2').style.display='none';
    document.getElementById('login').style.display='block';
}

function checkValue(){
    var month = document.getElementById('month').value;


    if (month == '' ){
        document.getElementById('msg-date').innerHTML = 'Please select the month';
    }
    var day = document.getElementById('day').value;
    if (isNaN(day) && day.length <=0){
        document.getElementById('msg-date').innerHTML ='please enter day';
    }
    var year = document.getElementById('year').value;
    if(isNaN(year)&& year.length <=0){
        document.getElementById('msg-date').innerHTML='please enter year';
    }
    var gender = document.getElementById('gender').value;


    if (gender == '' ){
        document.getElementById('msg-gender').innerHTML = 'Please select the gender';
    }else{
        document.getElementById('requi').innerHTML= 'dang ki thanh cong';
    }
}