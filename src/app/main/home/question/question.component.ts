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
  public search:string;
//--------------------------new--------------
  public answerset:any;
  public answerid:string;
  public ansidset:Array<string>;
  public checkfirst:boolean;

  public searchquestion:string;

  public quest: Question;

  constructor(private rout: Router, private symptom: AddsymptomService,private questservice:QuestionService) {
    this.getbody();
    this.setnull();
    this.checkfirst =false;
    this.answerid = null;
    this.ansidset = new Array();
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
  addans(data:string){
    if(this.answerid!=null){
    this.ansidset.push(data);
    this.answerid = null;
    }
  }
  deleteanswerinquestion(data:string){
    for(let i=0;i<this.ansidset.length;i++){
      if(this.ansidset[i]==data){
        this.ansidset.splice(i,1);
        break;
      }
    }
  }
  ngOnInit() {
    this.getanswer();
  }
  back() {
    this.rout.navigate(['/main/questionmanage']);
  }
  delete(answer:any){
    this.questservice.deleteanswer(answer).then((Response)=>{
      this.getanswer();
    });
  }

  getanswer(){
    this.questservice.getanswer().subscribe((response)=>{
      //console.log(response);
      if(response==true){
        this.answerset=this.questservice.answer;
        //console.log(this.answerset);
      }
    });
  }

  addanswer() {
    //console.log(this.ans);
    if (this.ans.ans != null && /*this.ans.ansid != null && */this.ans.symptom != null) {
      // this.answer.push(this.ans);
      this.questservice.addanswer(this.ans).then(
        (response) => {
          let data = response.json();
          console.log(data);
          // if(data.Error=="true"){
          //   this.stradd="fail add";
          //   this.color="red";
          // }else{
          //   this.setnull();
          //   this.setnullans();
          //   this.answer = new Array();
          //   this.stradd="add success!";
          //   this.color="green";
          // }
          this.getanswer();
        });
      this.ans = new Answer();
      this.setnullans();
      this.strans = null;
      this.getanswer();
    } else {
      this.strans = "fill all input answer"
    }
  }
  cancle() {
    //this.rout.navigate(['/main/question']);
    this.answer = new Array();
    this.setnull();
    this.setnullans();
    this.ansidset = new Array();
    //this.answer.push(new Answer());

  }
  addquestion() {
    if (this.id != null && this.question != null && this.body != null) {
      this.quest.checkfirst=this.checkfirst;
      this.quest.question = this.question;
      this.quest.id = this.id;
      // this.quest.lv = this.lv;
      this.quest.body = this.body;
      this.quest.answer = this.ansidset;
      //console.log(this.quest);
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
            this.ansidset = new Array();
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
    this.checkfirst =false;
  }
  setnullans() {
    this.ans = new Answer();
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
