import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  arr:any;
  imageUrl:any

  person:any
  experiences:any
  educations:any
  certificates:any
  skills:any
  languages:string[] = ["frensh","english","arabic"]
  interest:string[] = ["music","football","reading"]
  constructor(public form:CvServiceService){}
  url:string
  
ngOnInit(): void {
  this.imageUrl = this.form.ImageUrl
  this.arr=this.form.data
  this.person=this.form.data.person
  this.experiences=this.form.data.experiences
  console.log(this.experiences);
  console.log(this.experiences.experience);
  
  
  this.educations=this.form.data.educations
  this.certificates=this.form.data.certificates
  this.skills=this.form.data.skills
  console.log(this.arr);
}

afficher(){
  console.log(this.form.formulaire);
  
}


}
