import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {GuessNameComponent} from './guess-name/guess-name.component';

const routes: Routes = [
  {path: '', redirectTo: '/people', pathMatch: 'full'},
  {path: 'people', component: PeopleComponent},
  {path: 'play', component: GuessNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
