import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/domain/booking';
import { BookingService } from 'src/app/services/booking.service';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  appointment:Booking;
  id:string;
  submitted = false;

  constructor(private appointmentService:BookingService, private patientService:PatientService, private router:Router) { }

  ngOnInit() {
    this.getVisitToView();
  }

  getVisitToView(){
    
    this.id = this.appointmentService.getId();

    this.appointmentService.findAppointmentById(this.id).subscribe(data => {

      this.appointment = data;
      
      this.patientService.findPatientById(this.appointment.patientId).subscribe(data => {
        this.appointment.patient = data;
      })

    });
    
  }

  update(){

    this.appointmentService.updateAppointment(this.appointment).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/appointments']);

  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){

    this.router.navigate(['/appointments']);

  }


}
