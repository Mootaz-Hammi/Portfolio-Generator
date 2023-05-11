import { Component, OnInit } from '@angular/core';
import { CvServiceService } from '../service/cv-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  arr:any;
  
  imageUrl:any
  
  constructor(private form:CvServiceService){
   
  }
  ngOnInit(): void {
    
     this.imageUrl   = this.form.ImageUrl
    this.arr=this.form.data
    console.log(this.arr);
  }

}
