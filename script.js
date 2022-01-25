function createAccount(){
  var user_name = document.forms.signup_form.elements.username;
  var acc_no = document.forms.signup_form.elements.signup_acc_no;
  var psw = document.forms.signup_form.elements.psw1;
  var conf_psw = document.forms.signup_form.elements.psw2;
  if(psw==conf_psw){
   let obj = new Object();
   obj = {
   user_name : user_name,
   psw : psw,
   amt : 0
   }
   localStorage.setItem(acc_no, JSON.stringify(obj));
   alert("Account created successfully!");
  }
  else{
    alert("Password Mismatch!!");
  }
}
function login(){
  var acc_no = document.forms.login_form.elements.login_acc_no;
  var psw = document.forms.login_form.elements.psw;
  var user = JSON.parse(localStorage.getItem(acc_no));
  if(user.psw==psw){
   sessionStorage.setItem("user_accno",acc_no);
  }
  else
   alert("Login Failed!");

}
function showBalance(){
  var acc_no = sessionStorage.getItem("user_accno");
  var user =  JSON.parse(localStorage.getItem(acc_no));
  var amt_balance = parseInt(user.amt);
  document.getElementById("demo1").innerHTML = amt_balance;
}
function withDraw(){
  var amt = parseInt(document.forms.withdraw_form.elements.withdraw_amt);
  var amt_balance = 0;
  var acc_no = sessionStorage.getItem("user_accno");
  var user =  JSON.parse(localStorage.getItem(acc_no));
  amt_balance = parseInt(user.amt) - amt;
  if(amt_balance<0)
   alert("Your balance is not sufficient");
  else{
    user.amt = amt_balance;
    localStorage.setItem(acc_no,JSON.stringify(user));
    alert("Withdraw successful");
  }
}
function deposit(){
  var amt = parseInt(document.forms.deposit_form.elements.deposit_amt);
  var amt_balance = 0;
  var acc_no = sessionStorage.getItem("user_accno");
  var user =  JSON.parse(localStorage.getItem(acc_no));
  amt_balance = parseInt(user.amt) + amt;
  user.amt = amt_balance;
  localStorage.setItem(acc_no,JSON.stringify(user));
  alert("Deposited");
}