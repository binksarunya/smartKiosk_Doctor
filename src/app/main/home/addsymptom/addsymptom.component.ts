import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddsymptomService } from '../../../services/addsymptom.service';

import { Inject } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-addsymptom',
  templateUrl: './addsymptom.component.html',
  styleUrls: ['./addsymptom.component.css']
})
export class AddsymptomComponent implements OnInit {
  public symp: any;
  public sname: string;
  public stradd: string;
  public color: string;

  public stredit: boolean;
  public editsymptom: any;

  public search: string;

  public displayedColumns: any;
  public dataSource: any;

  constructor(private rout: Router, private symptom: AddsymptomService) {
    this.sname = null;
    this.stradd = null;
    this.color = null;
    this.stredit = false;
  }

  ngOnInit() {
    this.get();
    //this.settable();
  }

  settable() {
    this.displayedColumns = ['symptom', 'edit', 'delete'];
    //console.log(this.symp);
    this.dataSource = new MatTableDataSource(this.symp);
  }
  
  edit(data: any) {
    console.log(data);
  }
  delete(data: any) {
    console.log(data);
  }

  editcancle() {
    this.stredit = false;
    this.get();
  }
  editsubmit() {
    this.symptom.saveedit(this.editsymptom).then(
      (response) => {
        let data = response.json();
        this.get();
        // console.log(data);
        this.stredit = false;
      });


    //this.stredit = false;
    //this.get();
  }

  back() {
    this.rout.navigate(['/main/home']);
  }
  adds() {
    if (this.sname != null && this.sname != "") {
      this.symptom.add(this.sname).subscribe(
        response => {

          if (response == true) {
            this.stradd = "add success!";
            this.color = "green";
            this.sname = null;
            this.get();

          } else {
            this.stradd = "add fail";
            this.color = "red";
          }
          //this.symptom.get();
        });
    } else {
      this.stradd = null;
      //console.log("input data");
    }
  }

  get() {
    this.symptom.get().subscribe(
      response => {

        if (response == true) {
          this.symp = this.symptom.symp;
          this.settable();
          //console.log(this.symp);

        } else {

        }
      });
  }
}
