import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterInfoComponent } from './components/shared/character-info/character-info.component';
import { HttpClientModule } from '@angular/common/http'
import { CharactersService } from './services/characters.service';
import { AppRoutingModule } from './app-routing.module';
import { CharacterListComponent } from './components/shared/character-list/character-list.component';


import { TippyModule, tooltipVariation, popperVariation } from '@ngneat/helipopper';

@NgModule({
  declarations: [
    AppComponent,
    CharacterInfoComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TippyModule.forRoot({
    defaultVariation: 'tooltip',
    variations: {
      tooltip: tooltipVariation,
      popper: popperVariation,
    }
  })
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
