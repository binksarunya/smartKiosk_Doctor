import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';
import { Connect} from '../models/connect';


@Injectable()
export class LoginService {

  aUser:User
  stage :boolean;

  constructor(private http: Http) { }

  login(user): Observable<boolean> {
    //console.log(user);
    let url =Connect.getHostUrl()+'/Doctor.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, user, header).map((res: Response) => { return this.parseLogin(res)}).catch((error: any) => { 
      console.log("input ID");
      return  Observable.of(false) ;
     }); ;
  }


  parseLogin(res: Response): boolean{
    let data = res.json();

    if (data.Error == "true") {
      //console.log("response is come ");
      return false;
    } else {
      //console.log(data);
      this.aUser = data.User[0];
      this.stage=true;

      //console.log(this.aUser);
     
      return true;
    }
  }

  isLogin():boolean{
   
    return this.stage;
  }

  logout(){
    this.aUser = new User();
    this.stage=false;
  }

}
