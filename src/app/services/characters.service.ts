import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  apiUrl = 'http://genshinapi.ddns.net:3000/'

  constructor(private http: HttpClient) { }

  getCharacters (){
    return this.http.get(`${this.apiUrl}character`)
  }
}
