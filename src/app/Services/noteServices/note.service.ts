import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServicesService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpServicesService) {
    this.token = localStorage.getItem('token');
  }

  createnote(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'bearer ' + this.token,
      }),
    };
    return this.httpService.postService('/notes', data, true, header);
  }

  getnote() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'bearer ' + this.token,
      }),
    };
    return this.httpService.getService('/notes', true, header);
  }
}
