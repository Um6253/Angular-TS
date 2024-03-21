import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Register2Component } from './Components/register2/register2.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetComponent } from './Components/reset/reset.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { TaskComponent } from './Components/task/task.component';
import { SidenevComponent } from './Components/sidenev/sidenev.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from './Services/Auth/auth.service';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { BodyComponent } from './Components/body/body.component';
import { NotesComponent } from './Components/Keep/notes/notes.component';
import { RemindersComponent } from './Components/Keep/reminders/reminders.component';
import { EditLabelsComponent } from './Components/Keep/edit-labels/edit-labels.component';
import { ArchiveComponent } from './Components/Keep/archive/archive.component';
import { BinComponent } from './Components/Keep/bin/bin.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
 import { MatCardModule } from '@angular/material/card';
 import {MatDialogModule} from '@angular/material/dialog';
import { EditNotesComponent } from './Components/edit-notes/edit-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Register2Component,
    ForgotComponent,
    ResetComponent,
    TaskComponent,
    SidenevComponent,
    GetNotesComponent,
    DashBoardComponent,
    BodyComponent,
    NotesComponent,
    RemindersComponent,
    EditLabelsComponent,
    ArchiveComponent,
    BinComponent,
    DisplayNotesComponent,
    EditNotesComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
      MatCardModule,
      MatDialogModule,
      MatMenuModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
