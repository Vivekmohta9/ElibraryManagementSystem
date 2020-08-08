import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../shared/history.service';
import { enableProdMode } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
enableProdMode();
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  public orderData;
  constructor(public service: HistoryService,private router:Router) { }

  ngOnInit(): void {
    //this.service.refreshList();    
    if(this.service.readSession.UserId==0)
    {
      alert("Kindly Login to see your Order details.");
      this.router.navigate(['/login']);
    }
    else
    {
      this.orderData = this.service.getOrdersByUserId(this.service.readSession.UserId); //takes discId from the route and pass it to getDocument method of service file    
    }
  }
}