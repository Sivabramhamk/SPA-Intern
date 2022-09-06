import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { InternDetail } from 'src/app/models/intern-detail.model';
@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }

  readonly baseurl = 'https://localhost:44304/api/Intern';
  formData:InternDetail = new InternDetail();
  list: InternDetail[] | undefined;

  refreshlist(){
    return this.http.get(this.baseurl).toPromise().then(res=> this.list = res as InternDetail[])
  }

  postPaymetndetail(){
    return this.http.post(this.baseurl,this.formData)
  }

  putPaymetndetail(){
    return this.http.put(`${this.baseurl}/${this.formData.internId}`,this.formData)
  }

  deletePaymetndetail(id:number){
    return this.http.delete(`${this.baseurl}/${id}`)
  }

}
