import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../shared/history.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public service:HistoryService) { }

  ngOnInit(): void {
  }

  // ResetSession()
  // {
  //   sessionStorage.removeItem("userSession");
  // }

}
