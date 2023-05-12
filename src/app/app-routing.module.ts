import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModelsComponent } from './models/models.component';
import { PotfolioTemplateComponent } from './potfolio-template/potfolio-template.component';


const MyRoutes : Routes=[
  {path:'',component:FormulaireComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'portfolio2',component:PotfolioTemplateComponent},
  {path:'cv',component:ModelsComponent}

];
export const Routing = RouterModule.forRoot(MyRoutes);
