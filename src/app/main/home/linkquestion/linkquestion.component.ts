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
  public questionlink:any;
  public answerser:any;
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
      this.questionlink = quest;
      //console.log(quest);
      this.link=true;
      this.answerser= null;
      this.getanswerforlink(quest.ID);
  }

  getanswerforlink(questid:string){
    this.quest.getanswerid(questid).subscribe((Response)=>{
      if(Response==true){
        this.answerser = this.quest.answerbyid;
        console.log(this.answerser);
      }
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

  public updatenextquestion(data:any){
    //console.log(data);
    this.quest.updatenextquestion(data).then((Response)=>{

    });
  }

  hid(){
    this.link = false;
  }

}
