import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/shared/history.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public service:HistoryService, private route:Router) { }

  ngOnInit(): void {

    this.service.readSession={UserId:0, UserTypeId:0};

    this.service.selectedLogin=
    {
      UserEmail:'',
      UserPassword:''
    }
  }

  onSubmit(form: NgForm) {
    //console.log(form.value);
    this.service.PostLoginUser(form.value)
    .subscribe(data => {
      console.log(data);
      if(data[0] != null)
      {
        
        alert("Login Successfully");
        //session
        let createSession = { UserId: data[0].UserId, UserTypeId: data[0].UserTypeId };
        sessionStorage.setItem("userSession", JSON.stringify(createSession));
        this.service.readSession = JSON.parse(sessionStorage.getItem("userSession"));
        console.log(this.service.readSession);

        //if admin then route to admin page
        if(this.service.readSession.UserTypeId==3)
        {
          this.route.navigate(['/admin']);
        }
        //route to discipline
        else
        {
          this.route.navigate(['/discList']);
        }
      }
      else
      {
        alert("Incorrect details. Enter correct User-Id and Password");
      }

      
    })

    
  }

}


