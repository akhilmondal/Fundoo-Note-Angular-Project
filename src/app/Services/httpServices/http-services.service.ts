import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpServicesService {
  baseurl = 'http://localhost:3000/api/v1/';

  constructor(private httpClient: HttpClient) {}
  postService(
    url: string,
    reqdata: any,
    token: boolean = false,
    httpOptions: any
  ) {
    return this.httpClient.post(
      this.baseurl + url,
      reqdata,
      token && httpOptions
    );
  }
}
