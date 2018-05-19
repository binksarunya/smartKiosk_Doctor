import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionmanage',
  templateUrl: './questionmanage.component.html',
  styleUrls: ['./questionmanage.component.css']
})
export class QuestionmanageComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit() {
  }

  addquestion() {
    //console.log("goadd");
    this.rout.navigate(['/main/question']);
  }
  linkquestion(){
    this.rout.navigate(['/main/linkquestion']);
  }
  editquestion() {
    this.rout.navigate(['/main/editquestion']);
  }
  back() {
    this.rout.navigate(['/main/home']);
  }

}
