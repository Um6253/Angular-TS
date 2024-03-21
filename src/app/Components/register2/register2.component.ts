import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrl: './register2.component.scss'
})
export class Register2Component implements OnInit {
  loginForm!:FormGroup;
  imageUrl = 'assets/img/images.png';
  imageUrl2='assets/img/register.png';

  constructor(private _formBuilder: FormBuilder,private userServices:UserService){}
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group(
    {
      FirstName:['',[Validators.required,Validators.pattern("^[A-Z][a-z]+ *[A-Z]*[a-z]*$")]],
      LastName:['',[Validators.required,Validators.pattern("^[A-Z][a-z]+$")]],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}")]]
      
    }
    )

  }
  RegisterSubmit(){
    if(this.loginForm.valid){
    let reqData={
      FirstName:this.loginForm.value.FirstName,
      LastName:this.loginForm.value.LastName,
      Email: this.loginForm.value.Email,
      Password: this.loginForm.value.Password
   }
   this.userServices.register(reqData).subscribe((res:any)=>{
    console.log(res.message);

   })}
   else{console.log("Invalid Inputs")}
   
  }
 

  
  

}
