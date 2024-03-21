import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private httpClient :HttpClient) { }
  postMethod(url: string, reqData: any, token: boolean=false, httpOptions: any={})
  {

    return this.httpClient.post( url,reqData, token && httpOptions)
  }
  postMethodReset(url: string, reqData: any,token: boolean=true, httpOptions: any={})
  {
    return this.httpClient.post(url,reqData, token && httpOptions)
    
  }
  getMethod(url: string, token: boolean=true, httpOptions: any={})
  {
    
    return this.httpClient.get( url,token && httpOptions)
    
  }
  putMethod(url: string, reqData: any, token: boolean=true, httpOptions: any={})
  { return this.httpClient.put( url,reqData, token && httpOptions)
    
  }
    
}

