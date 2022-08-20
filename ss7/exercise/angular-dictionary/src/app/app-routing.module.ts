import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './page/page.component';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [

  {path: '', component: PageComponent},
  {path: 'dictionaryDetail/:word', component: DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
