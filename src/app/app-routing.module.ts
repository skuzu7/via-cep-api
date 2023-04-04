import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from 'src/app/template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
  { path: 'template-driven', component: TemplateDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
