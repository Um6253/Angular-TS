import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent implements OnInit {
  submitted=false;
  resetForm!:FormGroup;
  token:any;
  imageUrl = 'assets/img/images.png';
  constructor(private _formBuilder: FormBuilder,private user:UserService,private activeRoute:ActivatedRoute ){}
  ngOnInit(): void {
    this.resetForm = this._formBuilder.group(
    {
      //Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}")]],
      ConfirmPassword:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}")]],
    }
    )
    this.token=this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  ResetSubmit(){
    this.submitted = true;
    // if(this.resetForm.valid)
    //{
      let reqData ={
      Password: this.resetForm.value.Password,
      ConfirmPassword : this.resetForm.value.ConfirmPassword
      }
      console.log(reqData); 
      this.user.reset(reqData,this.token).subscribe((response:any) =>{
      console.log(response.message);
    
     });
    
    // }
    // else{console.log("Invalid Inputs")}
    
  }

}
