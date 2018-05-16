import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rout:Router) { }

  ngOnInit() {
  }
  addq() {
    //console.log("goadd");
    this.rout.navigate(['/main/question']);
  }
  addd() {
    this.rout.navigate(['/main/disease']);
  }
  adds() {
    this.rout.navigate(['/main/addsymptom']);
  }
  editdisease() {
    this.rout.navigate(['/main/editdisease']);
  }
  editquestion(){
    this.rout.navigate(['/main/editquestion']);
  }
  diag(){
    this.rout.navigate(['/main/admission']);
  }


}
