import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  public user :any;
  constructor(private ser:LoginService,private rout:Router) { }

  ngOnInit() {
    this.user = this.ser.aUser;
    //console.log(this.user);
  }

  logout(){
    this.ser.logout();
    this.rout.navigate(["/login"]);

  }

}
