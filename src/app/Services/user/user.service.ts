import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  constructor(private httpService: HttpService) {}
  register(reqData: any)
 { 
  
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization': 'token'
     })
    
    }
    return this.httpService.postMethod('https://localhost:44359/api/User/Reg', reqData, false, header)
  }
  
    Login(reqData: any){
    let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
    
      // 'Authorization': 'token'
    
      })
    }
    
    return this.httpService.postMethod('https://localhost:44359/api/User/Log', reqData, false, header)
  
  }
  
  forgetPassword(reqData: any){
  
    let header = {
    
      headers: new HttpHeaders({
        'Content-type':'application/json',
        
        // 'Authorization': 'token'
      
      })
    
    }
    return this.httpService.postMethod('https://localhost:44359/api/User/ForgetPassword?Email='+reqData.Email,{},false, header)
  }
  reset(reqData: any,token:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        
        'Authorization': 'Bearer '+token
      
      })
    
    }
    return this.httpService.postMethodReset('https://localhost:44359/api/User/ResetPassword',reqData,true, header)
  }
  
}
