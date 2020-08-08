import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/shared/history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentfailed',
  templateUrl: './paymentfailed.component.html',
  styleUrls: ['./paymentfailed.component.css']
})
export class PaymentfailedComponent implements OnInit {

  constructor(public service:HistoryService,private router:Router) { }

  ngOnInit(): void {
    if(this.service.readSession.UserId==0)
    {
      alert("Kindly download any document first.");
      this.router.navigate(['/discList']);
    }
  }

}
