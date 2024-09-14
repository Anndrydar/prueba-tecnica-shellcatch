import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioUserRandomService {
API_RANDOM: string = 'https://randomuser.me'
  constructor(private http: HttpClient) { }



verusers(){
  return this.http.get(this.API_RANDOM + '/api');
}

}
