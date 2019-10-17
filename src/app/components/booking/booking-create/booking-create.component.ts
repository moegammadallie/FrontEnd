import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/domain/booking';
import { Patient } from 'src/app/domain/patient';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.css']
})
export class BookingCreateComponent implements OnInit {

  appointment: Booking = new Booking();
  submitted = false;
  durations: String[] = ['15 min', '30 min', '1 hr', '2 hr', '3 hr', '4 hr'];

  //patients
  private patients: Patient[];

  days: String[] = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25',
    '26', '27', '28', '29', '30'
  ];

  months: String[] = [
    'Oct', 'Nov', 'Dec'
  ];

  years: String[] = [
    '2019' 
  ];

  day:string;
  month:string
  year:string;

  constructor(private router:Router, private appointmentService:BookingService, private patientService:PatientService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data; 
    });
  }

  newAppointment() : void{
    this.submitted = false;
    this.appointment = new Booking();
  }

  save(){

    this.appointment.bookingDate = this.getFullDate();
    this.appointmentService.createAppointment(this.appointment).subscribe(data => console.log(data), error => console.log(error));
    this.appointment = new Booking();
  }


  getPatient(value:string){

    if(value != '-1'){
      this.appointment.patientId = value;
      console.log(value);
    }
    else{
      console.log(value);
    }

  }


  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/appointments']);
  }

  cancel(){
    this.router.navigate(['/appointments']);
  }


  getDay(value:string){

    if(value != '-1'){
      console.log(value);
      this.day = value;
    }

  }

  getMonth(value:string){

    if(value != '-1'){
      console.log(value);
      this.month = value;
    }

  }

  getYear(value:string){

    if(value != '-1'){
      console.log(value);
      this.year = value;
    }

  }

  getFullDate() : string{
    return this.day + ' ' + this.month + ' ' + this.year;
  }

}
