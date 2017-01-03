import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    GameRoutingModule
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule { }
