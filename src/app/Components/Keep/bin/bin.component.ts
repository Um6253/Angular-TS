import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../Services/Noteservices/note.service';
//import { NoteService } from '../../../Services/Noteservices/note.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrl: './bin.component.scss'
})
export class BinComponent implements OnInit {
  BinList:any
  constructor(private Notes:NoteService){}
  ngOnInit(): void {
    this.OnSubmit()  
  }
  OnSubmit() {
    this.Notes.GetNotes().subscribe((res:any)=>{
      this.BinList=res.data
      this.BinList=this.BinList.filter((obj:any)=>{
        return obj.isTrash==true;
      })
      console.log(this.BinList)
    })
  }

}
