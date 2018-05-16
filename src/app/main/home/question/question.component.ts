import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from '../../../models/answer';
import { AddsymptomService } from '../../../services/addsymptom.service';
import { Question } from '../../../models/question';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public id: string;
  public question: string;
  public lv: string;
  public body: string;
  public bshow: Array<string>;
  //public answerlist: Array<Answer>;
  public answer: Array<Answer>;
  public ans: Answer;

  public symptomlist: any;

  public strans: string;
  public stradd:string;
  public color:string;



  public quest: Question;

  constructor(private rout: Router, private symptom: AddsymptomService,private questservice:QuestionService) {
    this.getbody();
    this.setnull();
    this.ans = new Answer();
    this.setnullans();
    this.quest = new Question();
    // this.bshow = new Array();
    // this.bshow.push("forehead");
    // this.bshow.push("hair");
    // this.bshow.push("eyebrow");
    // this.bshow.push("eye");
    // this.bshow.push("nose");
    // this.bshow.push("cheek");
    // this.bshow.push("mouse");
    // this.bshow.push("neck");
    // this.bshow.push("ear");
    // this.bshow.push("chin");
    // this.bshow.push("abdomen");

    this.answer = new Array();
    //this.answer.push(new Answer());

    this.symptom.get().subscribe(
      response => {

        if (response == true) {
          this.symptomlist = this.symptom.symp;
          //this.settable();
          //console.log(this.symptomlist);

        } else {

        }
      });

  }

  ngOnInit() {
  }
  back() {
    this.rout.navigate(['/main/home']);
  }

  addanswer() {
    //console.log(this.ans);
    if (this.ans.ans != null && this.ans.ansid != null && this.ans.symptom != null) {
      this.answer.push(this.ans);
      this.ans = new Answer();
      this.setnullans();
      this.strans = null;
    } else {
      this.strans = "fill all input answer"
    }
  }
  cancle() {
    //this.rout.navigate(['/main/question']);
    this.answer = new Array();
    this.setnull();
    this.setnullans();
    //this.answer.push(new Answer());

  }
  addquestion() {
    if (this.id != null && this.question != null && this.lv != null && this.body != null) {
      this.quest.question = this.question;
      this.quest.id = this.id;
      this.quest.lv = this.lv;
      this.quest.body = this.body;
      this.quest.answer = this.answer;
      this.questservice.addquestion(this.quest).then(
        (response) => {
          let data = response.json();
          //console.log(data);
          if(data.Error=="true"){
            this.stradd="fail add";
            this.color="red";
          }else{
            this.setnull();
            this.setnullans();
            this.answer = new Array();
            this.stradd="add success!";
            this.color="green";
          }
          //this.get();
         // console.log(data);
          //this.stredit =false;
          
        });

    }else{
      this.stradd="fill all input question";
      this.color="red";
    }


  }
  setnull() {
    this.id = null;
    this.question = null;
    this.lv = null;
    this.body = null;
  }
  setnullans() {
    this.ans.ans = null;
    this.ans.ansid = null;
    this.ans.symptom = null;
  }
  getbody(){
    this.questservice.getbody().subscribe(
      response => {

        if (response == true) {
          this.bshow = this.questservice.bodypart;
        } else {
        }
      }
    );
  }

}
