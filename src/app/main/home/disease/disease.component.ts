import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disease } from '../../../models/disease';
import { AddsymptomService } from '../../../services/addsymptom.service';
import { DiseaseService } from'../../../services/disease.service';


@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

  public disease: Disease;
  public symptomshow: any;
  public search: string;
  public selectsymptom: Array<any>;
  public str:string;
  public color:string;

  constructor(private rout: Router, private symptom: AddsymptomService,private diseaseservice:DiseaseService) {
    this.disease = new Disease();
    this.disease.name=null;
    this.selectsymptom = [];
  }

  ngOnInit() {
    this.getsymptomlist();
  }

  getsymptomlist() {
    this.symptom.get().subscribe(
      response => {

        if (response == true) {
          this.symptomshow = this.symptom.symp;

          //console.log(this.symptomshow);

        } else {

        }
      });
  }
  select(symptom: any) {
    let check = true;
    for (let i = 0; i < this.selectsymptom.length; i++) {
      if (this.selectsymptom[i].name == symptom.name) {
        check = false;
        break;
      }

    }
    if (check) {
      this.selectsymptom.push(symptom);
    }
    //console.log(symptom);
  }
  deletesymptom(symptom: any) {
    //console.log(symptom.name);
    for (let i = 0; i < this.selectsymptom.length; i++) {
      if (this.selectsymptom[i].name == symptom.name) {

        this.selectsymptom.splice(i, 1);
        break;
      }
    }
  }
  adddisease() {
    if(this.disease.name!=null){
    this.disease.symptomlist=this.selectsymptom;
    this.diseaseservice.adddisease(this.disease).then(
      (response) => {
        let data = response.json();
        if(data.Error=="false"){
          this.disease = new Disease();
          this.selectsymptom = [];
          this.disease.name=null;
          this.str="add success!";
          this.color="green";
        }else{
          this.str="fail add";
          this.color="red";
        }
       // console.log(data);
        //this.get();
       // console.log(data);
        //this.stredit =false;
      });

  }else{
    this.str="fill name";
    this.color="red";

  }
}

  back() {
    this.rout.navigate(['/main/home']);
  }

}
