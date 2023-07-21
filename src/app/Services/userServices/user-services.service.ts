import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServicesService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root',
})

export class UserServicesService {
  constructor(private httpservice: HttpServicesService) {}

  login(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.httpservice.postService('users/login', reqdata, false, header);
  }

  register(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.httpservice.postService('users', reqdata, false, header);
  }

  // forgetPassword(reqdata: any) {
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //     }),
  //   };
  //   return this.httpservice.putService('users/forgetpass', reqdata, false, header);
  // }
}
