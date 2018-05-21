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
  public answer:any;
  public answerbyid:any;

  constructor(private http: Http) { }

  addquestion(data: any) {
    console.log(data);
    let url = Connect.getHostUrl() + '/addquestion.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  updatenextquestion(data: any) {
    console.log(data);
    let url = Connect.getHostUrl() + '/updatenextquestion.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  updatequestion(data: any) {
    console.log(data);
    let url = Connect.getHostUrl() + '/updatequestion.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  deletequestion(data: any) {
    console.log(data);
    let url = Connect.getHostUrl() + '/deletequestion.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  deleteans(data: any) {
    console.log(data);
    let url = Connect.getHostUrl() + '/deleteanswer2.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  addanswer(data: any) {
    //console.log(data);
    let url = Connect.getHostUrl() + '/addanswer.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }

  deleteanswer(data: any) {
    console.log(data);
    let url = Connect.getHostUrl() + '/deleteanswer.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }
  getanswer(): Observable<boolean> {

    let url = Connect.getHostUrl() + '/getanswer.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, null, header).map((res: Response) => { return this.congetans(res) }).catch((error: any) => {
      console.log("get ans ");
      return Observable.of(false);
    });

  }

  congetans(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {

      return false;
    } else {
      this.answer=data.data;
      //console.log(this.answer);
      return true;
    }
  }

  getanswerid(id:string): Observable<boolean> {

    let url = Connect.getHostUrl() + '/getanswerbyid.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, id, header).map((res: Response) => { return this.congetansid(res) }).catch((error: any) => {
      console.log("get ans ");
      return Observable.of(false);
    });

  }

  congetansid(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {

      return false;
    } else {
      this.answerbyid=data.dataans;
      //console.log(this.answerbyid);
      return true;
    }
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
