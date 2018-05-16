import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  str = "Dr." + this.log.aUser.name ;

  constructor(private log: LoginService, private rout: Router) {

  }

  ngOnInit() {
  }
  gohome() {
    //console.log("home");
    this.rout.navigate(['/main/home']);
  }
  goaddmis() {
    this.rout.navigate(['/main/admission']);
  }
  logout() {
    //console.log("logout");
    this.log.logout();
    this.rout.navigate(['/login']);
  }
}
