import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';

@Injectable()
export class QuestionService {

  public question:any;
  public bodypart:Array<string>;

  constructor(private http: Http) { }

  addquestion(data: any) {
    //console.log(data);
    let url = Connect.getHostUrl() + '/addquestion.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }

  get(): Observable<boolean> {

    let url = Connect.getHostUrl() + '/getquestion.php';
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
      this.question = data.data;
      //console.log(this.symp[3].name);
      //console.log(data.Message);
      return true;
    }
  }

  getbody(): Observable<boolean> {

    let url = Connect.getHostUrl() + '/getallbody.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.get(url, header).map((res: Response) => { return this.congetbody(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });

  }

  congetbody(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      return false;
    } else {
      this.bodypart=data.data;
      return true;
    }
  }

}
