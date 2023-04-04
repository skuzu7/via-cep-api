import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { CreditCardDirectivesModule } from 'angular-cc-library';





@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    CreditCardDirectivesModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
