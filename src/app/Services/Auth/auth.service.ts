// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
//   gettokenforAuth():boolean{
//   //   return!!localStorage.getItem("token");
//   if(typeof localStorage |=='undefined'){
//     return!!localStorage.getItem("token");
//   }
//   return false;
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  gettokenforAuth(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem("token");
    }
    return false;
  }
}
