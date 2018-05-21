import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { User } from'../models/user';
import {LoginService} from'../services/login.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;


  id:string;
  pass:string;
  warn:string;

  registerID:string;
  registerPass:string;
  registerRepass:string;
  registerName:string;
  registerLastname:string;
  registerTel:string;
  status:string;
  color:string;

  constructor(private router: Router,private log:LoginService,private register:RegisterService) { 
    this.user = new User();
    this.registerID = null;
    this.registerPass=null;
    this.registerRepass=null;
    this.registerName=null;
    this.registerLastname=null;
    this.registerTel=null;
  }

  ngOnInit() {
  }
  
  login(){
    this.user = new User();
    this.user.id=this.id;
    this.user.pass=this.pass;
    if(this.user.id!=null&&this.user.pass!=null){
      this.log.login(this.user).subscribe(
        response =>{
          let redirect = '/main';
          let a:boolean = false;
          if (response==true) {
     
            let navigationExtras: NavigationExtras = {
              //preserveQueryParams: true,
              //preserveFragment: true,
              
            };
  
            //console.log("log in success");
            this.router.navigate([redirect], navigationExtras);
          } else {
            //console.log("fail login");
          }
        });
      }else{
        //console.log("input");
        this.warn="invalid ID or Password";
      }


  }

  goregister(){
    this.router.navigate(['/register']);
  }

  /*registerNurse(){
    //console.log("click");
    if(this.registerID==null&&this.registerPass==null&&this.registerName==null&&this.registerLastname==null&&this.registerTel==null){
      this.color="red";
      this.status ="invalid input";
    }else{
      if(this.registerPass!=this.registerRepass){
          this.color="red";
          this.status ="pass and repass not match";
      }else{
            this.user = new User();
            this.user.id = this.registerID;
            this.user.pass = this.registerPass;
            this.user.name =this.registerName;
            this.user.lname =this.registerLastname;
            this.user.phone= this.registerTel;

            this.register.register(this.user).subscribe(
              response =>{
                let redirect = '/home';
                let a:boolean = false;
                if (response==true) {
           
                  this.color="green";
                  this.status="register success"
                  this.user = new User();
                  this.registerID = null;
                  this.registerPass=null;
                  this.registerRepass=null;
                  this.registerName=null;
                  this.registerLastname=null;
                  this.registerTel=null;
                  
                  
        
                  
                } else {
                  this.color="red";
                  this.status="fail register"
                }
              })

      }




    }


  }*/

}
