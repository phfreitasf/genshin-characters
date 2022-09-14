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
  audioTocando: boolean = false
  audio = new Audio("../../../../assets/music/genshin ost night.mp3")


  txtFiltro = ''
  personagens: Array<Personagem> = []
  personagensAtivos: Array<Personagem> = []

  constructor(private http: CharactersService) { }

  async ngOnInit() {
    await this.getCharacters()
    this.personagensAtivos = this.personagens
    this.audio.load()
    this.audio.volume = 1
    this.audio.loop = true
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
  onInputChange(value: string) {
    this.txtFiltro = value;
    if (this.txtFiltro == '') {
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
    this.audioTocando = !this.audioTocando
    if (this.audioTocando) {

      this.audio.play()
    }
    if (!this.audioTocando) {
      this.audio.pause()
    }
  }
}
