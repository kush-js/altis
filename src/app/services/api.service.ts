import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiURL = 'https://k2niwsgtld.execute-api.us-east-1.amazonaws.com';
  apiTest = 'http://localhost:3000/';

  public getMessages() {
    return this.http.get(this.apiURL + '/messages');
  }
  public sendMessage(userID: string, message: string) {
    const query = {
      userID: userID,
      content: message
    }
    return this.http.post(this.apiURL + '/messages', query);
  }
  public deleteMessage() {

  }
  public editMessage() {

  }
}
