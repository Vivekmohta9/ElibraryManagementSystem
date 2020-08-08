import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HistoryService } from '../shared/history.service';

@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css']
})
export class DocDetailsComponent implements OnInit {

  public documentData; //used to store details of document as array for specific discipline
  searchBkTitle:string; //variable to store the search string to be entered in the  search box
  constructor(public service: HistoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.documentData = this.service.getDocument(params.get('discId')); //takes discId from the route and pass it to getDocument method of service file
    });
  }
  payPage(id, price) // methods used to redirect to payDetails component
  {
    if(this.service.readSession.UserId==0)
    {
      alert("Kindly Login to purchase the document.");
      this.router.navigate(['/login']);
    }
    else
    {
    this.router.navigate(['/payDetails', id, price]);
    }
  }

  downPage() // methods used to redirect to downPage component
  {
    this.router.navigate(['/downPage']);
  }
}
