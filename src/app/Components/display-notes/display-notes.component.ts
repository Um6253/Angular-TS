import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteService } from '../../Services/Noteservices/note.service';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
import { MatDialog } from '@angular/material/dialog';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent {
  constructor(public dialog:MatDialog){}//public dialog:MatDailog,private data:DataService
   message:any
   @Input()NotesList:any;
   @Output() RefreshEdit=new EventEmitter<string>();
  

  EditNoteDialogBox(Notes:any){
   const dialogbox= this.dialog.open(EditNotesComponent,{ 
    width: "40%",
    height:'auto',
    data:Notes
    })
    
    dialogbox.afterClosed().subscribe ((result: any) =>{
    console.log(result);
    this.RefreshEdit.emit(result);
    
    })
    
  }
  ReceiverEvent($event:any){
    console.log("Refresh Event Successfull"+$event);
    this.message=$event
    this.RefreshEdit.emit(this.message)

  }
 
}
