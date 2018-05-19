import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diseasemanage',
  templateUrl: './diseasemanage.component.html',
  styleUrls: ['./diseasemanage.component.css']
})
export class DiseasemanageComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit() {
  }


  adddisease() {
    this.rout.navigate(['/main/disease']);
  }

  editdisease() {
    this.rout.navigate(['/main/editdisease']);
  }
  back() {
    this.rout.navigate(['/main/home']);
  }


}
