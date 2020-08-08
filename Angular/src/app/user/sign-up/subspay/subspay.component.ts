import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/shared/history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subspay',
  templateUrl: './subspay.component.html',
  styleUrls: ['./subspay.component.css']
})
export class SubspayComponent implements OnInit {

  userCreditCardCVV: number;
  constructor(public service:HistoryService,private router:Router) { }

  ngOnInit(): void {
    if(this.service.readSession.UserTypeId==0 && this.service.userDetails.UserTypeId==null)
    {
      alert("Kindly enter registration details first.");
      this.router.navigate(['/signup']);
    }
  }

  compareCVV() //function used to compare the Cvv of the user coming from the databse with the one entered by the user in runtime
  {
    if (this.userCreditCardCVV === this.service.userDetails.UserCreditCardCVV) //matched
    {    
        this.service.PostUserDetails(this.service.userDetails).subscribe(()=>
        {
          alert("Registered Successfully.");        
          this.router.navigate(['/login']);
        });                
    }
    else
    {
        alert("Incorrect CVV"); 
    }
  }
}
