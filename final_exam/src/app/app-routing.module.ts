import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditBenhnhanComponent} from './edit-benhnhan/edit-benhnhan.component';
import {BenhnhanComponent} from './benhNhan/benhnhan.component';


const routes: Routes = [
  {path: 'edit-customer/:id', component: EditBenhnhanComponent},
  {path: '', component: BenhnhanComponent},
  {path: './:toast', component: BenhnhanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
