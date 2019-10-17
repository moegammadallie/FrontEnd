import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/domain/patient';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patient:Patient;
  id:string;

  _patient: Patient = new Patient();
  submitted = false;

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit() {
    this.getPatientToEdit();
  }

  getPatientToEdit(){
    this.id = this.patientService.getId();
    this.patientService.findPatientById(this.id).subscribe(data =>{

      this.patient = data;

    });
  }

  update(){
    this.patientService.updatePatient(this.patient).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/patients']);
  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/patients']);

  }


}
