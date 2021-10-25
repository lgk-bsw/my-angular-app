import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {
    path: "",
    component: CalcComponent
  },
  {
    path: "second",
    component: SecondPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
