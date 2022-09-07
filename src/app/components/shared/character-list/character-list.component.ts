import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';
import { Personagem } from 'src/app/services/Model/Characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  personagens: Array<Personagem> = []
  constructor(private http: CharactersService) { }

  async ngOnInit() {
    await this.getCharacters()
  }

  async getCharacters() {
    await lastValueFrom(this.http.getCharacters()).then((res: any) => {
      this.personagens = res;
    })
  }

}
