import { Component } from '@angular/core';
interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FunDooNotesApp1';
  isSideNavCollapsed=false;
  screenWidth=0;
  onToggleSideNav():void{

  }
}
