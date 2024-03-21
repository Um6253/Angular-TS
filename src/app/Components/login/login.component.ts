import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  hide=true
  submitted=false;
  loginForm!:FormGroup;
  imageUrl = 'assets/img/images.png';
  constructor(private _formBuilder: FormBuilder,private userServices:UserService,private route:Router){}
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group(
    {
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}")]]


      
    }
    )
  }
  LoginSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
    let reqData={
      Email: this.loginForm.value.Email,
      Password: this.loginForm.value.Password
   }
   this.userServices.Login(reqData).subscribe((res:any)=>{
    console.log(res.message);
    localStorage.setItem("token",res.data);
    this.route.navigateByUrl("/dash/notes");


   })}
   else{console.log("Invalid Inputs")}
  }
  


  


}
