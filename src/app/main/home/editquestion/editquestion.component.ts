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
  public link: boolean;
  public editquestion: any;
  public answerser: any;

  constructor(private rout: Router, private quest: QuestionService) {
    this.link = false;
  }

  ngOnInit() {
    this.getquest();

  }
  back() {
    this.rout.navigate(['/main/questionmanage']);
  }


  getanswerforlink(questid: string) {
    // console.log(questid);
    this.answerser = null;
    this.quest.getanswerid(questid).subscribe((Response) => {
      if (Response == true) {
        this.answerser = this.quest.answerbyid; //edit ans
        //console.log(this.answerser);
      }
    });
  }
  okedit() {
    this.quest.updatequestion(this.editquestion).then(Response => {
      this.link = false;
    });
  }
  cancle() {
    this.link = false;
  }

  edit(data: any) {
    this.link = true;
    this.editquestion = null;
    this.editquestion = data;//edit quest
    this.getanswerforlink(this.editquestion.ID);
    //console.log(data);
  }
  delete(data: any) {
    this.quest.deletequestion(data).then(Response => {
      this.getquest();
    });
    //console.log(data);
  }
  deleteans(data: any){
    data.questionID = this.editquestion.ID;
    this.quest.deleteans(data).then(Response => {
      this.getquest();
      this.getanswerforlink(this.editquestion.ID);
    });
  }
  public getquest() {
    this.quest.get().subscribe(
      response => {

        if (response == true) {
          this.question = this.quest.question;
          //this.settable();
          //console.log(this.question);

        } else {

        }
      });
  }

}
