import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.css']
})
export class EditquestionComponent implements OnInit {

  public question: any;
  public search: string;

  constructor(private rout: Router, private quest: QuestionService) { }

  ngOnInit() {
    this.getquest();

  }
  back() {
    this.rout.navigate(['/main/home']);
  }
  edit(data: any) {
    console.log(data);
  }
  delete(data: any) {
    console.log(data);
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
