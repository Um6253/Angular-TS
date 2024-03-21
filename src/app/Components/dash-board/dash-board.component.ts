import { Component, EventEmitter, Output } from '@angular/core';

interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {
   @Output() onToggleSideNav: EventEmitter<SideNavToggle> =new EventEmitter();

}
