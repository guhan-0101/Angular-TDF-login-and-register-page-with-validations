import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

userInfoArray:any={
  email:"",
  password:"",

}

mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$';
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

 onSubmit(userInfo:any){
  console.log(userInfo)
 }

}
