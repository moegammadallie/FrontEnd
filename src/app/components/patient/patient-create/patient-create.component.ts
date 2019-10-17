import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/domain/patient';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  patient: Patient = new Patient();
  submitted = false;

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit() {
  }

  newDoctor() : void{
    this.submitted = false;
    this.patient = new Patient();
  }


  save(){

    this.patientService.createPatient(this.patient).subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Patient();
  }

  onSubmit(){
    this.router.navigate(['/patients']);
    this.submitted = true;
    this.save();
   
  }

  cancel(){
    this.router.navigate(['/patients']);
  }

}
