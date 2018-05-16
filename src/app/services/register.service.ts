import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';
import { Connect} from '../models/connect';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  register(user): Observable<boolean> {
    //console.log(user);
    let url =Connect.getHostUrl()+'/regisDoctor.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, user, header).map((res: Response) => { return this.checkregis(res)}).catch((error: any) => { 
      console.log("input ID");
      return  Observable.of(false) ;
     }); ;
  }


  checkregis(res: Response): boolean{
    let data = res.json();

    if (data.Error == "true") {
      return false;
    } else {
      return true;
    }
  }

}
