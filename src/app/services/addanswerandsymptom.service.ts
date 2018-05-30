import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';


@Injectable()
export class AddanswerandsymptomService {

  constructor(private http: Http) { }

  addanswer(data: any) {
    // console.log(data);
    let url = Connect.getHostUrl() + '/addanswerbyid.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).toPromise();
  }

}
