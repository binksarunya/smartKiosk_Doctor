import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';

@Injectable()
export class DiseaseService {
  public disease:any;
  public symptom:any;

  constructor(private http: Http) { }

  editdisease(data: any) {
    //console.log(data);
    let url = Connect.getHostUrl() + '/editdisease.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  
  deletedisease(data: any) {
    //console.log(data);
    let url = Connect.getHostUrl() + '/deletedisease.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }

  deletesymptom(data: any) {
    //console.log(data);
    let url = Connect.getHostUrl() + '/deletesymptombydisease.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  // updatedisease(data: any) {
  //   //console.log(data);
  //   let url = Connect.getHostUrl() + '/deletesymptombydisease.php'
  //   let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  //   return this.http.post(url, data, header).toPromise();
  // }

  adddisease(data: any) {
    //console.log(data);
    let url = Connect.getHostUrl() + '/adddisease.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }

  get(): Observable<boolean> {

    let url = Connect.getHostUrl() + '/getdisease.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, null, header).map((res: Response) => { return this.conget(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });

  }

  conget(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      this.disease = data.data;
      //console.log(this.symp[3].name);
      //console.log(data.Message);
      return true;
    }
  }
  getsymptom(data:string): Observable<boolean> {

    let url = Connect.getHostUrl() + '/getsymptombyid.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).map((res: Response) => { return this.congetsymptom(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });

  }

  congetsymptom(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      this.symptom = data.data;
      //console.log(this.symp[3].name);
      // console.log(this.symptom);
      return true;
    }
  }

}
