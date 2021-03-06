import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';

@Injectable()
export class DiagService {
  public queue: Array<string>;
  public diagdisease: Array<any>;
  public docID:string;
  constructor(private http: Http) { }

  updatestr(data: any) {
    // console.log(data);
    let url = Connect.getHostUrl() + '/updatestr.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  updatestr2(data: any) {
    // console.log(data);
    let url = Connect.getHostUrl() + '/updatestr2.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }

  getquestionfordiag(data: any) {
    // console.log(data);
    let url = Connect.getHostUrl() + '/getquestionfordiag.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  getanswerfordiag(data: any) {
    // console.log(data);
    let url = Connect.getHostUrl() + '/getansfordiag.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }

  getqueue(): Observable<boolean> {
  
    let url = Connect.getHostUrl() + '/getqueue.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,this.docID,header).map((res: Response) => { return this.conget(res) }).catch((error: any) => {
      console.log("");
      return Observable.of(false);
    });

  }

  conget(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      this.queue = data.data;
      //console.log(data.Message);
      return false;
    } else {
      this.queue = data.data;
      //console.log(this.queue);
      return true;
    }
  }

  getdiag(id: string): Observable<boolean> {

    let url = Connect.getHostUrl() + '/getdiag.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, id, header).map((res: Response) => { return this.condiag(res) }).catch((error: any) => {
      console.log("");
      return Observable.of(false);
    });

  }

  condiag(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      this.diagdisease = data.data;
      //console.log(this.diagdisease);
      return true;
    }
  }

  clear() {
    this.queue = new Array();
    this.diagdisease = new Array();
  }

}
