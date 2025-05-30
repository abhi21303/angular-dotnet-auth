import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //  private apiUrl = 'https://localhost:7225';
   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  Test(): Observable<string>{
    return this.http.get(`${this.apiUrl}/Test/hello`,{ responseType: 'text' }); 
  }

  Login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, credentials);
  }
}
