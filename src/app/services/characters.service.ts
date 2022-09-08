import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  // apiUrl = 'https://genshinapi.ddns.net:3000/'

  constructor(private http: HttpClient) { }

  getCharacters (){
    return this.http.get(`${environment.apiUrl}character/`)
  }
}
