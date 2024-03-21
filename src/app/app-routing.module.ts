import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { Register2Component } from './Components/register2/register2.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetComponent } from './Components/reset/reset.component';
import { TaskComponent } from './Components/task/task.component';
import { SidenevComponent } from './Components/sidenev/sidenev.component';
 import { AuthGuard } from './AuthGaurdForHome/authgaurd.guard';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { BodyComponent } from './Components/body/body.component';
import { NotesComponent } from './Components/Keep/notes/notes.component';
import { RemindersComponent } from './Components/Keep/reminders/reminders.component';
import { EditLabelsComponent } from './Components/Keep/edit-labels/edit-labels.component';
import { ArchiveComponent } from './Components/Keep/archive/archive.component';
import { BinComponent } from './Components/Keep/bin/bin.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { EditNotesComponent } from './Components/edit-notes/edit-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';



const routes: Routes = [
  // {path:'',redirectTo:"/reg",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dash',component:DashBoardComponent,
   canActivate:[AuthGuard],
   children:[
  {
    path:'archi',component:ArchiveComponent,  
  },
  {path:'notes',component:NotesComponent},
  {path:'bin',component:BinComponent},]
 },

  {path:'reg',component:RegisterComponent},
  {path:'reg2',component:Register2Component},
  {path:'forgot',component:ForgotComponent},
  {path:'task',component:TaskComponent},
  {path:'reset/:token',component:ResetComponent},
  {path:'keep',component:SidenevComponent},
  {path:'body',component:BodyComponent},
  {path:'notes',component:NotesComponent },
  {path:'rem',component:RemindersComponent},
  {path:'edlab',component:EditLabelsComponent},
  {path:'archi',component:ArchiveComponent},
  {path:'bin',component:BinComponent},
  {path:'dis',component:DisplayNotesComponent},
   {path:'get',component:GetNotesComponent},
  {path:'ednote',component:EditNotesComponent},
  {path:'dash',component:DashBoardComponent},
  {path:'icons',component:IconsComponent},


  {path:'dis',component:DisplayNotesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
