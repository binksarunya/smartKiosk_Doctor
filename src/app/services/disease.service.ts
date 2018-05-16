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

  constructor(private http: Http) { }

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

}
