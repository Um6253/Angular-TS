import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent implements OnInit {
  imageUrl = 'assets/img/images.png';
  forgotForm!:FormGroup;
  constructor(private _formBuilder: FormBuilder,private userServices:UserService){}
  ngOnInit(): void {
    this.forgotForm = this._formBuilder.group(
    {
      Email:['',[Validators.required,Validators.email]],
     // Password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
      
    }
    )

  }
  forgetSubmit(){
    if(this.forgotForm.valid){
    let reqData={
     
      Email: this.forgotForm.value.Email
      
   }
   this.userServices.forgetPassword(reqData).subscribe((res:any)=>{
    console.log(res.message);

   })}
   else{console.log("Invalid Inputs")}
   
  }
}
