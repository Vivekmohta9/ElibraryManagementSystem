import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { HistoryService } from 'src/app/shared/history.service';
import { Elib, History } from 'src/app/shared/history.model';


@Component({
  selector: 'app-doc-pay',
  templateUrl: './doc-pay.component.html',
  styleUrls: ['./doc-pay.component.css']
})
export class DocPayComponent implements OnInit {

  docId;//to store docId coming from query parameter
  docPrice;//to store docPrice coming from query parameter
  userId: number;//to store userId coming from query parameter
  userDetails: Elib;
  orderDetails: History;//object used to store order Details
  userCreditCardCVV: number;//to store user CVV coming from html
  constructor(public service: HistoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){

    //inallpages
    if(this.service.readSession.UserId==0)
    {
      alert("Kindly Login first.");
      this.router.navigate(['/login']);
    }
    else
    {
      //this.userId = 'U001';//static user id
      this.userDetails = this.service.getUserDetails(this.service.readSession.UserId);//calling the user Details function from service
      this.docId = this.route.snapshot.paramMap.get('docId');//storing the docId coming from the activated route or query parameter
      if(this.service.readSession.UserTypeId==1)
      {
        this.docPrice = parseInt(this.route.snapshot.paramMap.get('docPrice'))*80/100;//storing the docId coming from the activated route or query parameter
      }
      else
      {
        this.docPrice = parseInt(this.route.snapshot.paramMap.get('docPrice'));
      }
      this.orderDetails =  //storing the order Details
      {
        OrderId: 0,
        UserId: this.service.readSession.UserId,
        DocId: this.docId,
        TimeStamp: new Date()
      };
    }
  }

  compareCVV() //function used to compare the Cvv of the user coming from the databse with the one entered by the user in runtime
  {
    if (this.userCreditCardCVV === this.service.userDetails.UserCreditCardCVV) //matched
    {       
        this.router.navigate(['/thanks']); //navigating to thanks component
        this.service.postOrderData(this.orderDetails);// and calling the post order data funcn of service        
    }
    else {
    this.router.navigate(['/paymentfailed']);//else navigating to paymentFailed Component
    }
  }
}
