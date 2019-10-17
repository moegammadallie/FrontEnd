import { Component, OnInit } from '@angular/core';
import { Physiotherapist } from 'src/app/domain/physiotherapist';
import { PhysioService } from 'src/app/services/physio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physio-edit',
  templateUrl: './physio-edit.component.html',
  styleUrls: ['./physio-edit.component.css']
})
export class PhysioEditComponent implements OnInit {

  doctor:Physiotherapist;
  id:string;

  _doctor: Physiotherapist = new Physiotherapist();
  submitted = false;

  constructor(private doctorService:PhysioService, private router:Router) { }

  ngOnInit() {

    this.getDoctorToEdit();
  }

  getDoctorToEdit(){
    
    this.id = this.doctorService.getId();

    this.doctorService.findDoctorById(this.id).subscribe(data => {

      this.doctor = data;

    });
    
  }

  update(){

    this.doctorService.updateDoctor(this.doctor).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/physios']);

  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/physios']);

  }
  

}
