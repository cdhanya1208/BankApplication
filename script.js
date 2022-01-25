function createAccount(){
  var user_name = document.getElementById("username").value;
  var acc_no = document.getElementById("signup_acc_no").value;
  var psw = document.getElementById("psw1").value;
  var conf_psw = document.getElementById("psw2").value;
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
  var acc_no = document.getElementById('login_acc_no').value;
  var psw = document.getElementById('psw').value;
  var user = JSON.parse(localStorage.getItem(acc_no));
  if(user.psw==psw){
   var name = user.user_name;
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
  var amt = parseInt(document.getElementById("withdraw_amt").value);
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
  var amt = parseInt(document.getElementById("deposit_amt").value);
  var amt_balance = 0;
  var acc_no = sessionStorage.getItem("user_accno");
  var user =  JSON.parse(localStorage.getItem(acc_no));
  amt_balance = parseInt(user.amt) + amt;
  user.amt = amt_balance;
  localStorage.setItem(acc_no,JSON.stringify(user));
  alert("Deposited");
}