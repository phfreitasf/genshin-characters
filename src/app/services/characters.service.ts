import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  // localApiUrl = 'http://localhost:3001/'

  constructor(private http: HttpClient) { }

  getCharacters (){
    return this.http.get(`${environment.apiUrl}character/`)
  }

  getMaterialImg (material:string) {
    return this.http.get(`${environment.apiUrl}ascend/${material}`)
  }
}
