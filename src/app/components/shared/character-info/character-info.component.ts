import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/services/Model/Characters';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  @Input() personagem!: Personagem 

  constructor() { }

  async ngOnInit() {
  }



}
