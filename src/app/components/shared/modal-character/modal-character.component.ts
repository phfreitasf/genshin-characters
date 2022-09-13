import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/services/Model/Characters';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-modal-character',
  templateUrl: './modal-character.component.html',
  styleUrls: ['./modal-character.component.scss']
})
export class ModalCharacterComponent  implements OnInit {

  personagem !: Personagem
  constructor(public modalRef: MdbModalRef<ModalCharacterComponent>) {}

  ngOnInit(): void {
  }

}
