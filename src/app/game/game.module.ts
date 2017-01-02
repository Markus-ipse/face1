import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { FormsModule } from '@angular/forms';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GameRoutingModule
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule { }
