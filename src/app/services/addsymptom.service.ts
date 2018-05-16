import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';

@Injectable()
export class AddsymptomService {
  public symp: any;

  constructor(private http: Http) { }

  add(name: string): Observable<boolean> {

    let url = Connect.getHostUrl() + '/addsymptom.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, name, header).map((res: Response) => { return this.conadd(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });

  }

  conadd(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      //console.log(data.Message);
      return true;
    }
  }

  get(): Observable<boolean> {

    let url = Connect.getHostUrl() + '/getsymptom.php';
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
      this.symp = data.data;
      //console.log(this.symp[3].name);
      //console.log(data.Message);
      return true;
    }
  }

  deletedata(data: any) {
    //console.log(data);
    let url = Connect.getHostUrl() + '/deletesymptom.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }

  saveedit(data: any) {
    //console.log(data);
    let url = Connect.getHostUrl() + '/saveeditsymptom.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }


}
