import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelsComponent } from './models/models.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routing } from './app-routing.module';
import { PotfolioTemplateComponent } from './potfolio-template/potfolio-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    ModelsComponent,
    PortfolioComponent,
    NavbarComponent,
    PotfolioTemplateComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
