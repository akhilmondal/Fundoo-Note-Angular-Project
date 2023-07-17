import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  baseurl = 'localhost:3000/api/v1/';


  constructor(private httpClient: HttpClient) { }
  postService(url: string) {

  }
}

