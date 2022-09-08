import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
<<<<<<< HEAD
  
=======
  apiUrl = 'https://genshinapi.ddns.net:3000/'

>>>>>>> e042a35bad66a2b1e5bf7b4acf2b0d54854fc0d6
  constructor(private http: HttpClient) { }

  getCharacters (){
    return this.http.get(`${environment.apiUrl}character/`)
  }
}
