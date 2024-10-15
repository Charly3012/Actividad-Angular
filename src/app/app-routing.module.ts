import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { DivisasComponent } from './components/divisas/divisas.component';

const routes: Routes = [
  {
    path : "calculadora",
    component : CalculadoraComponent
  },
  {
    path : "divisas",
    component : DivisasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
