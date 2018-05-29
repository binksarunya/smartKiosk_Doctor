import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagService } from '../../services/diag.service';
import { GetpatientService } from '../../services/getpatient.service';
import { DiseaseService } from '../../services/disease.service';
import { Diseaseshow } from '../../models/diseaseshow';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  public queue: Array<any>;
  private checkqueue: boolean;
  private checkdiag: boolean;
  private user: any;
  private diagshow: Array<any>;
  private id: string;
  public str:any;
  public check:boolean;
  //------------------------------------------------------------------
  public diseasename:Array<any>;
  public dshow :Array<Diseaseshow>;

  constructor(private rout: Router, private diag: DiagService, private getpatient: GetpatientService,private disease:DiseaseService) {
    this.getqueue();
    this.checkqueue = true;
    this.checkdiag = false;
    this.diagshow = new Array();
    this.check = false;
    this.diseasename = new Array();
    this.dshow = new Array();
  }

  enter(data:string){
    //console.log(data);
    this.check = true;
    this.disease.getdiseasebyid(data).then(Response=>{
      
      let data = Response.json();
      this.str = data.data[0];
      console.log(this.str);
    });
  }
  outer(){
    this.check = false;
  }

  ngOnInit() {
  }
  checkstr() {
    this.getqueue();
  }

  diagnosis(q: string) {
    this.id = q;
    this.getdiag(q);
    this.getpatientqueue(q);
    this.setstr(q);

  }
  setstr(id: string) {
    this.diag.updatestr(id).then(Response => {

    });
  }
  setstr2(id: string) {
    this.diag.updatestr2(id).then(Response => {
      this.getqueue();
    });
  }
  cancle() {
    this.setstr2(this.id);
    this.getqueue();
    this.checkqueue = true;
    this.checkdiag = false;

    this.clear();
  }

  ok() {
    this.update();
    this.checkqueue = true;
    this.checkdiag = false;
    this.getqueue();

    this.clear();
  }

  update() {
    this.getpatient.update(this.user.history).then(
      (response) => {
        this.dequeuue(this.user.ID);
        const data = response.json();
        //console.log(data);
      });
  }

  dequeuue(id: string) {
    this.getpatient.dequeue(id).then(
      (response) => {
        this.getqueue();
        let data = response.json();
        //console.log(data);
      });
  }
  setdiagshow() {
    for (let i = 0; i < this.diag.diagdisease.length; i++) {
      let result = new Diseaseshow();
      if (this.diag.diagdisease[i].percen >= 20) {
        this.diagshow.push(this.diag.diagdisease[i]);
        result.id = this.diag.diagdisease[i].disease;
        result.percen = this.diag.diagdisease[i].percen;
        this.disease.getdiseasebyid(this.diag.diagdisease[i].disease).then(Response=>{
          let name = Response.json();
          this.diseasename.push(name);
          result.name = name.data[0].name;
        });
      }
      this.dshow.push(result);
    }

    //console.log(this.dshow);
  }



  back() {
    this.rout.navigate(['/main/home']);
  }

  getqueue() {
    this.diag.getqueue().subscribe(
      response => {
        if (response == true) {
          this.queue = this.diag.queue;
        } else {
          this.queue = this.diag.queue;
        }
        console.log(this.queue);
      });
  }

  getdiag(id: string) {
    this.diag.getdiag(id).subscribe(
      response => {
        if (response == true) {
          this.setdiagshow();
        } else {

        }

      });
  }
  getpatientqueue(id: string) {
    this.getpatient.getpa(id).subscribe(
      response => {
        if (response == true) {
          this.user = this.getpatient.user;
          this.checkqueue = false;
          this.checkdiag = true;
        } else {

        }

      });
  }

  clear() {
    this.diag.clear();
    this.diagshow = new Array();
    this.diseasename = new Array();
  }

}
