import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  //colors:any;
  constructor(private httpService: HttpService) {this.token =localStorage.getItem('token')}

  AddNotes(reqData: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token
      
      })
    
    }
    return this.httpService.postMethodReset('https://localhost:44359/api/Notes/Entry',reqData,true, header)
  }

  
  GetNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token
      
      })
    
    }
    return this.httpService.getMethod('https://localhost:44359/api/Notes/Read',true, header)
  }
  EditNotes(reqData:any, noteId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token
      
      })
    
    }
    return this.httpService.putMethod('https://localhost:44359/api/Notes/Update?NoteID='+noteId,reqData,true, header)
  }
  ArchievNotes(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token
      
      })
    
    }
    return this.httpService.putMethod('https://localhost:44359/api/Notes/Archive?NoteID='+reqData.noteId,{},true, header)
  }
  TrashNotes(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token
      
      })
    
    }
    return this.httpService.putMethod('https://localhost:44359/api/Notes/Trash?NoteID='+reqData.noteId,{},true, header)
  }
  NoteColor(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token
      
      })  
    
    }
    return this.httpService.putMethod('https://localhost:44359/api/Notes/Colour?NoteID='+reqData.noteId+"&colour="+reqData.colors,{},true, header)
  }
}
 




