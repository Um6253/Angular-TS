import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../../Services/Noteservices/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit{
  @Output() RefreshArchive=new EventEmitter<string>();
  ArchievList:any
  constructor(private Notes:NoteService){}
  ngOnInit(): void {
    this.OnSubmit()  
  }
  OnSubmit() {
    this.Notes.GetNotes().subscribe((res:any)=>{
      this.ArchievList=res.data
      this.ArchievList=this.ArchievList.filter((obj:any)=>{
        return obj.isArchive==true&& obj.isTrash==false;
      })
      console.log(this.ArchievList)
    })
  }
  ReceiverArchive($event:any){
    console.log("Archive Refresh"+$event)
    this.OnSubmit()
  }

}
