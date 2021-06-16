import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OneService {
  
  constructor(public hc: HttpClient) {

  }
  
  post(body:Object):Observable<any>{
    return this.hc.post('http://localhost:3560/register',body);
  }
  post1(body:Object):Observable<any>{
    return this.hc.post('http://localhost:3560/login',body);
  }
  put(body:Object):Observable<any>{
    return this.hc.put('http://localhost:3560/update',body);
  }
  get():Observable<any>{
    return this.hc.get('http://localhost:3560/getAllCarpentry');
  }
}
