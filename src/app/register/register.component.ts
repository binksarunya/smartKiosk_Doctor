import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User;
  public repassword: string;
  public str: string;
  public color: string;
  constructor(private router: Router, private registerser: RegisterService) {
    this.user = new User();
    this.repassword = null;
  }

  ngOnInit() {
  }
  register() {
    //console.log(this.user);
    if (this.user.id != undefined && this.user.pass != undefined && this.user.name != undefined && this.user.lname != undefined && this.user.phone != undefined) {
      if (this.user.pass == this.repassword) {
          this.registerser.register(this.user).subscribe(Response=>{
            this.str = "register success";
            this.color = "green";
            this.user = new User();
            this.repassword = null;
          });
      } else {
        this.str = "password and Re-password not match!";
        this.color = "red";

      }
    } else {
      this.str = "fill in the text box !";
      this.color = "red";
    }
  }

  cancle() {
    this.user = new User();
    this.repassword = null;
    this.router.navigate(['login']);
  }
}
