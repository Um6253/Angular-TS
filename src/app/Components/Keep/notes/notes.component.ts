import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../Services/Noteservices/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit{
  NotesArray:any;
  constructor(private notes:NoteService){}
  ngOnInit(): void {
    this.OnSubmit()
  }
  OnSubmit() {
   this.notes.GetNotes().subscribe((res:any)=>{
   console.log(res);
   this.NotesArray=res.data;
   console.log(this.NotesArray);
   this.NotesArray=this.NotesArray.filter((obj:any)=>
   {
    return obj.isTrash==false;
   })
   this.NotesArray=this.NotesArray.filter((obj:any)=>
   {
    return obj.isArchive==false;
   })
   this.NotesArray.reverse()
   }
   )
  }
  ReceiverCreate($event:any){
    console.log("Event Successfull"+$event)
    this.OnSubmit()
  }
  ReceiverEdit($event:any){
    console.log("Update Successfull"+$event)
    this.OnSubmit()
  }
}
