import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/shared/history.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public service:HistoryService, private route:Router) { }

  ngOnInit(): void {

    
  }

  addUser(form: NgForm)
  {
    console.log(form.value);
    this.service.PostUserDetails(form.value).subscribe(
      (retriveduserdata) => {
        if(retriveduserdata!=null)
        {
          alert("Registered Successfully");        
          form.resetForm();
        }
        else{
          alert("Registeration Failed");
        }
      }
    );
  }


}
