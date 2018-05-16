import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiseaseService } from '../../../services/disease.service';

@Component({
  selector: 'app-editdisease',
  templateUrl: './editdisease.component.html',
  styleUrls: ['./editdisease.component.css']
})
export class EditdiseaseComponent implements OnInit {
  public search: string;
  public diseaselist: any;

  constructor(private rout: Router, private disease: DiseaseService) { }

  ngOnInit() {
    this.getdisease();
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
