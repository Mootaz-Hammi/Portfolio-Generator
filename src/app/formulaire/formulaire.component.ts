import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CvServiceService } from '../service/cv-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  cvForm: FormGroup;
  formSkills:FormGroup
  formCertificates:FormGroup
  formEducations:FormGroup
  formexperience:FormGroup
  

  constructor(private fb: FormBuilder,private service:CvServiceService) {
    
this.formSkills = this.fb.group({
      skillsArray: this.fb.array([
        this.fb.group({
          skills: ['', Validators.required],
          level: ['', Validators.required]
        })
      ])
    });

    this.formCertificates = this.fb.group({
      certificatesArray: this.fb.array([
        this.fb.group({
          title: ['', Validators.required],
          dateC: ['', Validators.required]
        })
      ])
    });

    this.formEducations = this.fb.group({
      educationsArray: this.fb.array([
        this.fb.group({
          educationType: ['', Validators.required],
          educationPlace: ['', Validators.required],
          dateE: ['', Validators.required]
        })
      ])
    });

    this.formexperience = this.fb.group({
      experienceArray: this.fb.array([
        this.fb.group({
          experience: ['', Validators.required],
          experiencePlace: ['', Validators.required],
          dateexperience: ['', Validators.required]
        })
      ])
    });
    
  }

  imageUrl:any=''
  ngOnInit() {
    this.cvForm  = new FormGroup({
      Picture:new FormControl(this.imageUrl),
      Name: new FormControl(null,Validators.required),
      Title:new FormControl(null),
      Description:new FormControl(null),
      //contact
      Phone: new FormControl(null),
      LinkedIn:new FormControl(null),
      GitHub:new FormControl(null),
      Adress: new FormControl(null),
      Email: new FormControl(null),
      // Instagram: new FormControl(null),
      
      // Education: new FormArray([
      //   new FormControl(null)
      // ]),
      // Skills: this.fb.array([
      //   this.createSkillsGroup()
      // ]),
      // Skills: new FormArray([
        
      //   new FormControl(null)
      // ]),
      // Experiences: new FormArray([
      //   new FormControl(null)
      // ]),
      // // Certificates: new FormArray([
        
      // //   new FormControl(null)
      // // ]),
      // Languages: new FormArray([
        
      //   new FormArray([
          
      //   ])
      // ]),
      // Interest: new FormArray([
        
      //   new FormControl(null)
      // ]),


     
     
    });
    
  }

  // createLanguageFormGroup(){
  //   return new FormGroup({
  //     languageName:new FormControl(''),
  //     languageLevel:new FormControl('')
  //   });
  // }

  // addLanguage(){
  //   const languagesArray = this.cvForm.get('Languages') as FormArray;
  //   languagesArray.push(this.createLanguageFormGroup());
  // }


  // createEducationGroup(): FormGroup {
  //   return this.fb.group({
  //     degree: [''],
  //     institution: [''],
  //     year: ['']
  //   });
  // }

  // createSkillsGroup(): FormGroup {
  //   return this.fb.group({
  //     degree: [''],
  //     institution: [''],
  //     year: ['']
  //   });
  // }
  // get skills() {
  //   return this.cvForm.get('skills') as FormArray;
  // }

  // addSkill() {
  //   this.skills.push(new FormControl(''));
  // }
  // removeSkill(index: number) {
  //   this.skills.removeAt(index);
  // }

  // createCertificatesGroup(): FormGroup {
  //   return this.fb.group({
  //     degree: [''],
  //     institution: [''],
  //     year: ['']
  //   });
  // }

  // createLanguagesGroup(): FormGroup {
  //   return this.fb.group({
  //     degree: [''],
  //     institution: [''],
  //     year: ['']
  //   });
  // }
  

  // createExperienceGroup(): FormGroup {
  //   return this.fb.group({
  //     jobTitle: [''],
  //     company: [''],
  //     duration: ['']
  //   });
  // }

  // createInterestGroup(): FormGroup {
  //   return this.fb.group({
  //     jobTitle: [''],
  //     company: [''],
  //     duration: ['']
  //   });
  // }
  save(){
    this.service.formulaire=this.cvForm.value;
    console.log(this.imageUrl);
  }

  sendData(){
    this.service.data.skills = this.formSkills.value.skillsArray
    this.service.data.certificates=this.formCertificates.value.certificatesArray
    this.service.data.educations=this.formEducations.value.educationsArray
    this.service.data.experiences=this.formexperience.value.experienceArray
    this.service.data.person=this.cvForm.value
  
  }
//   addSkills(){
// (<FormArray>this.cvForm.get('Skills')).push(new FormControl(null,Validators.required))
//   }
//   addEducation(){
// (<FormArray>this.cvForm.get('Education')).push(new FormControl(null,Validators.required))
//   }
//   addExperiences(){
//     (<FormArray>this.cvForm.get('Experiences')).push(new FormControl(null,Validators.required))
//   }
//   addCertificates(){
//     (<FormArray>this.cvForm.get('Certificates')).push(new FormControl(null,Validators.required))
//   }
//   addLanguages(){
//     (<FormArray>this.cvForm.get('Languages')).push(new FormControl(null,Validators.required))
//   }
//   addInterest(){
//     (<FormArray>this.cvForm.get('Interest')).push(new FormControl(null,Validators.required))
//   }
  // uploadImage(formData: FormData) {
  //   this.http.post('http://localhost:8080/upload', formData)
  //     .subscribe(response => {
  //       // Handle the response from the server
  //       console.log(response);
  //     });
  // }
  onFileSelected(event:any){
    const file =event.target.files[0]
    if (file){
      this.imageUrl = URL.createObjectURL(file)
    }
    this.service.ImageUrl = this.imageUrl
    console.log(this.imageUrl);
  }

//skills begin
  get skillsArray() {
  return this.formSkills.get('skillsArray') as FormArray;
}


addSkill() {
  this.skillsArray.push(this.fb.group({
    skills: ['', Validators.required],
    level: ['', Validators.required]
  }));
}

removeSkill(index: number) {
  this.skillsArray.removeAt(index);
}

onSubmit2() {
  console.log(this.formSkills.value);
  // any additional logic here to handle the form submission
}
//skills ended


//Certificate begin
get certificatesArray() {
  return this.formCertificates.get('certificatesArray') as FormArray;
}


addcertificates() {
  this.certificatesArray.push(this.fb.group({
    title: ['', Validators.required],
    dateC: ['', Validators.required]
  }));
}

removecertificates(index: number) {
  this.certificatesArray.removeAt(index);
}

onSubmit3() {
  console.log(this.formCertificates.value);
  // any additional logic here to handle the form submission
}
//Certificate ended


//Education begin
get educationsArray() {
  return this.formEducations.get('educationsArray') as FormArray;
}


addeducations() {
  this.educationsArray.push(this.fb.group({
    educationType: ['', Validators.required],
    educationPlace: ['', Validators.required],
    dateE: ['', Validators.required],
  }));
}

removeeducations(index: number) {
  this.educationsArray.removeAt(index);
}

onSubmit4() {
  console.log(this.formEducations.value);
  // any additional logic here to handle the form submission
}
//Education ended

//experience begin
get experienceArray() {
  return this.formexperience.get('experienceArray') as FormArray;
}


addexperience() {
  this.experienceArray.push(this.fb.group({
    experience: ['', Validators.required],
    experiencePlace: ['', Validators.required],
    dateexperience: ['', Validators.required],
  }));
}

removeexperience(index: number) {
  this.experienceArray.removeAt(index);
}

onSubmit5() {
  console.log(this.formexperience.value);
  // any additional logic here to handle the form submission
}
//Education ended


}
