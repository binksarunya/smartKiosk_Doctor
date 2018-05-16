import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagService } from '../../services/diag.service';
import { GetpatientService } from '../../services/getpatient.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  public queue: Array<any>;
  private checkqueue: boolean;
  private checkdiag: boolean;
  private user:any;
  private diagshow:Array<any>;

  constructor(private rout: Router, private diag: DiagService, private getpatient: GetpatientService) {
    this.getqueue();
    this.checkqueue = true;
    this.checkdiag = false;
    this.diagshow = new Array();
  }

  ngOnInit() {
  }

  diagnosis(q: string) {

    this.getdiag(q);
    this.getpatientqueue(q);


  }
  cancle(){
    this.getqueue();
    this.checkqueue = true;
    this.checkdiag = false;
    this.clear();
  }

  ok(){
    this.update();
    this.checkqueue = true;
    this.checkdiag = false;
    this.getqueue();

    this.clear();
  }

  update(){
    this.getpatient.update(this.user.history).then(
      (response) => {
        this.dequeuue(this.user.ID);
        const data = response.json();
        //console.log(data);
      });
  }

  dequeuue(id:string){
    this.getpatient.dequeue(id).then(
      (response) => {
        this.getqueue();
        const data = response.json();
        //console.log(data);
      });
  }
  setdiagshow(){
    for(let i =0;i<this.diag.diagdisease.length;i++){
        if(this.diag.diagdisease[i].percen>=20){
          this.diagshow.push(this.diag.diagdisease[i]);
        }
    }

    //console.log(this.diagshow);
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
          this.user=this.getpatient.user;
          this.checkqueue = false;
          this.checkdiag = true;
        } else {

        }

      });
  }

  clear(){
    this.diag.clear();
    this.diagshow = new Array();
  }

}
