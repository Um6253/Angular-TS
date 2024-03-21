import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/Noteservices/note.service';
import { response } from 'express';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrl: './get-notes.component.scss'
})
export class GetNotesComponent implements OnInit{
  
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
  

}
