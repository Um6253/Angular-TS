import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenev',
  templateUrl: './sidenev.component.html',
  styleUrl: './sidenev.component.scss'
})
export class SidenevComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> =new EventEmitter();
  imageUrl = 'assets/img/keep.png';
  collapsed=false;
  screenwidth=0;
  navData=navbarData;
  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenwidth:this.screenwidth});
  }
  closeSidenav():void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenwidth:this.screenwidth});

  }

}
