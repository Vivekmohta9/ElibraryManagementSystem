import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../shared/history.service';
import { Observable } from 'rxjs';
import { Discipline } from '../shared/history.model';

@Component({
  selector: 'app-disc-list',
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.css']
})
export class DiscListComponent implements OnInit {

  disciplineList: Observable<Discipline[]>;
  constructor(private service: HistoryService) { }

  ngOnInit(): void {
    console.log(this.service.readSession);
    this.disciplineList = this.service.getAllDisciplines();// calling get discipline method of service
  }

}
