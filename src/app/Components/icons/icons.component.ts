import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from '../../Services/Noteservices/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit{
  @Input() Notesobj:any
  @Output() RefreshEvent=new EventEmitter<string>()
  ngOnInit(): void {
    
  }
  constructor(private Notes:NoteService){}
  onDelete(){
   let reqData={
    
    noteId:this.Notesobj.noteId,
   }
    console.log(reqData)
    this.Notes.TrashNotes(reqData).subscribe ((response: any)=>{
       console.log("Note Trashed Successfully", response);
        this.RefreshEvent.emit(response);
    
    })
    
  }
  ArchiveOn(){
    let reqData = {
    
      noteId:this.Notesobj.noteId,
    }
    console.log(reqData)
    this.Notes.ArchievNotes (reqData).subscribe((response:any) =>{ console.log(response)
    
    
    this.RefreshEvent.emit(response);
    
    })
  }
  ColorArray: Array<any> = [
    {code:'#F28B82',name:'Red'},
    {code:'#FBBC05',name:'Orange'},
    {code:'#FFF475',name:'Yellow'},
    {code:'#A7FFEB',name:'Teal'},
    {code:'#CCFF90',name:'Green'},
    {code:'#CBF0F8',name:'Blue'},
    {code:'#AECBFA',name:'Dark Blue'},
    {code:'#D7AEFB',name:'Purple'},
    {code:'#FDCFE8',name:'Pink'},
    {code:'#E6C9A8',name:'Brown	'},
    {code:'#E8EAED',name:'Gray'},
    {code:'',name:''},

  ];
  selectColor(colors:any){
    let reqData={
     colors:colors.name,
     noteId:this.Notesobj.noteId,
    }
   
     this.Notes.NoteColor(reqData).subscribe ((response: any)=>{
        console.log("Note Colored Successfully", response);
          this.RefreshEvent.emit(response); 
     
     })
    }

}
