import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';
import { Personagem } from 'src/app/services/Model/Characters';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnChanges {
  txtFiltro = ''
  personagens: Array<Personagem> = []
  personagensAtivos: Array<Personagem> = []
  audio = new Audio()
  constructor(private http: CharactersService) { }

  async ngOnInit() {
    await this.getCharacters()
    this.personagensAtivos = this.personagens
    this.playAudio()
  }

  async ngOnChanges() {

  }

  // Inicia a página com todos os personagens
  async getCharacters() {
    await lastValueFrom(this.http.getCharacters()).then((res: any) => {
      this.personagens = res;
    })
  }

  // Atualiza dinamicamente conforme digita no input de pesquisa
  onInputChange(value:string)
  {
    this.txtFiltro = value;
    if(this.txtFiltro == '')
    {
      this.personagensAtivos = this.personagens
    }
    else {
      this.filtrarPersonagens(this.txtFiltro)
    }
  }

  // Funcao de filtrar os personagens
  filtrarPersonagens(textoInput: string) {
    this.personagensAtivos = []
    this.personagens.map(pers => {
      if (Object.values(pers).some((v) => String(v).toLowerCase().includes(textoInput.toLowerCase()))) this.personagensAtivos.push(pers)
    })
  }

  // Funcao tocar música
  playAudio() {
    this.audio.src = '../../../../assets/music/genshin ost night.mp3'
    this.audio.load()
    this.audio.volume = 0.4
    this.audio.play()
  }
  stopAudio() {
    this.audio.pause()
  }
}
