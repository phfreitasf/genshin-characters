import { AfterContentInit, Component } from '@angular/core';
import { Personagem } from 'src/app/services/Model/Characters';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CharactersService } from 'src/app/services/characters.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-modal-character',
  templateUrl: './modal-character.component.html',
  styleUrls: ['./modal-character.component.scss']
})
export class ModalCharacterComponent  implements  AfterContentInit {

  personagem !: Personagem
  
  constructor(public modalRef: MdbModalRef<ModalCharacterComponent>, private api : CharactersService) {}

  async ngAfterContentInit() {
    await this.buscaImagensMateriais()
  }

  async buscaImagensMateriais()
  {
     Object.values(this.personagem.costs).forEach((val : any) => {
      val.map((material : any) => {
        if (material.image == '' || !material.image)
        {
          lastValueFrom(this.api.getMaterialImg(material.name)).then((res : any) => {
            material.image = res.images.fandom
            material.source = res.source
          })
        }
      })
    })
    
   
  }
}
