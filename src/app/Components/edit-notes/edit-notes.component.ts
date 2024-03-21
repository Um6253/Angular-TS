import { Component, Inject, OnInit } from '@angular/core';
import { NoteService } from '../../Services/Noteservices/note.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrl: './edit-notes.component.scss'
})
export class EditNotesComponent implements OnInit{
title:any;
description:any;
id:any
//color:any

constructor(
  @Inject (MAT_DIALOG_DATA) public data:any,
  public dialogbox : MatDialogRef<EditNotesComponent>,
  private Notes:NoteService)
  {
  this.title = data.title,
  this.description = data.description,
  this.id =data.noteId
}
ngOnInit(): void { 
}



closeDialog(){
let reqData={
title :this.title,
description:this.description,
//color: this.color
}
this.Notes.EditNotes(reqData,this.id).subscribe((response: any) =>{
console.log(response);
this.dialogbox.close()
});
}
}




