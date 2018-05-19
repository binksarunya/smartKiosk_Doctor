import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-linkquestion',
  templateUrl: './linkquestion.component.html',
  styleUrls: ['./linkquestion.component.css']
})
export class LinkquestionComponent implements OnInit {
  public question: any;
  public search: string;
  public link:boolean;
  constructor(private rout: Router, private quest: QuestionService) {
    this.link = false;
   }

  ngOnInit() {
    this.getquest();
  }

  back() {
    this.rout.navigate(['/main/questionmanage']);
  }

  linkquestion(quest:any){
      console.log(quest);
      this.link=true;
  }

  public getquest() {
    this.quest.get().subscribe(
      response => {

        if (response == true) {
          this.question = this.quest.question;
          //this.settable();
          console.log(this.question);

        } else {

        }
      });
  }

}
