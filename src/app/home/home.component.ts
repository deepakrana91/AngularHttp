import { AuthService } from './../auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  logIn(){
   this.authService.login();
   alert("you can search the Data")

  }

  logOut(){

    this.authService.logout();
    alert("you can not search the Data")
  }

}
