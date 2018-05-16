import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Connect} from '../models/connect';

@Injectable()
export class GetpatientService {

  public user : any;
  constructor(private http: Http) { }

  getpa(user): Observable<boolean> {
    //console.log(user);
    let url =Connect.getHostUrl()+'/getpatient.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, user, header).map((res: Response) => { return this.conget(res)}).catch((error: any) => { 
      console.log("input ID");
      return  Observable.of(false) ;
     }); ;
  }


  conget(res: Response): boolean{
    let data = res.json();

    if (data.Error == "true") {
      //console.log("response is come ");
      return false;
    } else {
      //console.log(data);
      this.user = data.User[0];
      //console.log(this.user);
     
      return true;
    }
  }

  update(history:string){
    this.user.history = history;
    //console.log(this.user);
    let url =Connect.getHostUrl()+'/updatehistory.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,this.user,header).toPromise();
  }


  dequeue(id:string){
    let url =Connect.getHostUrl()+'/dequeue.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,id,header).toPromise();
  }

}
