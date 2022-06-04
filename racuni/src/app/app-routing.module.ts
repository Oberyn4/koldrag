import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaljiComponent } from './detalji/detalji.component';
import { RacuniComponent } from './racuni/racuni.component';

const routes: Routes = [
  {path:'',redirectTo:'/racuni',pathMatch:'full'},
  {path:'racuni',component:RacuniComponent},
  {path:'detalji/:id',component:DetaljiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
