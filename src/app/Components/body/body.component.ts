import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../Services/Noteservices/note.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {
  @Output() RefreshCreate= new EventEmitter<string>();
  submitted=false;
  noteForm!:FormGroup;
  displaynote: boolean = true;
 // displaycreatenote: boolean = false;
  constructor(private _formBuilder: FormBuilder,private notes:NoteService){}
  ngOnInit(): void {
    this.noteForm = this._formBuilder.group(
      {
         Title:['',Validators.required],
        Description:['',Validators.required]
      }
    )
  }
  noteSubmit(){
    this.submitted=true;
    if(this.noteForm.valid){
    let reqData={
      Title: this.noteForm.value.Title,
      Description: this.noteForm.value.Description
   }
   this.notes.AddNotes(reqData).subscribe((res:any)=>{
    console.log(res.message);
    this.RefreshCreate.emit(res)


   })}
   else{console.log("Invalid Inputs")}
   this.displaynote=true;
  }
}
