import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Personagem } from 'src/app/services/Model/Characters';
import { ModalCharacterComponent } from '../modal-character/modal-character.component';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  modalRef: MdbModalRef<ModalCharacterComponent> | null = null;
  @Input() personagem!: Personagem
  slugImg: string = 'char-image-'
  constructor(private modalService: MdbModalService) { }

  async ngOnInit() {
    this.slugImg += (this.personagem.fullname.split(' ').join(''))

  }

  openModal(personagem: Personagem) {
    this.modalRef = this.modalService.open(ModalCharacterComponent, {
      data: { personagem: personagem },
      modalClass: 'modal-xl bg-dark'
    },
    )

  }

}
