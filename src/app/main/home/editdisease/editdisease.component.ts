import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiseaseService } from '../../../services/disease.service';
import { Deletesymptom } from '../../../models/deletesymptom';
// import { AddsymptomService } from '../../../services/addsymptom.service';

@Component({
  selector: 'app-editdisease',
  templateUrl: './editdisease.component.html',
  styleUrls: ['./editdisease.component.css']
})
export class EditdiseaseComponent implements OnInit {
  public search: string;
  public diseaselist: any;
  public checkedit: boolean;
  public editsymptom: any;
  public editdata: any;
  public delsymptom: Deletesymptom;

  constructor(private rout: Router, private disease: DiseaseService) {
    this.checkedit = false;
    this.delsymptom = new Deletesymptom();
  }

  ngOnInit() {
    this.getdisease();
  }
  back() {
    this.rout.navigate(['/main/diseasemanage']);
  }
  ok() {
    // console.log(this.editdata);
    this.disease.editdisease(this.editdata).then(Response => {
      this.getdisease();
      this.checkedit = false;
    });

  }
  cancle() {
    this.checkedit = false;
  }
  edit(data: any) {
    // console.log(data);
    this.editdata = data;
    this.disease.getsymptom(data.ID).subscribe(Response => {
      if (Response == true) {
        this.editsymptom = this.disease.symptom;
        //console.log(this.editsymptom);
        this.checkedit = true;
      }
    });
    // this.checkedit = true;

  }
  delete(data: any) {
    // console.log(data);
    this.disease.deletedisease(data).then(Response => {
      this.getdisease();
    });
  }
  deletesymptom(data: any) {
    this.delsymptom.diseaseID = this.editdata.ID;
    this.delsymptom.symptomID = data.ID;
    this.disease.deletesymptom(this.delsymptom).then(Response => {
      this.disease.getsymptom(this.editdata.ID).subscribe(Response => {
        if (Response == true) {
          this.editsymptom = this.disease.symptom;
          //console.log(this.editsymptom);
          // this.checkedit = true;
        }
      });
    });
    // console.log(this.delsymptom);  
  }
  getdisease() {
    this.disease.get().subscribe(
      response => {

        if (response == true) {
          this.diseaselist = this.disease.disease;
          //this.settable();
          //console.log(this.diseaselist);

        } else {

        }
      });

  }

}
