import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/domain/patient';
import { Booking } from 'src/app/domain/booking';
import { BookingService } from 'src/app/services/booking.service';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  private patients: Patient[] = [];
  private appointments:Booking[] = [];
  id:string;

  constructor(private appointmentService:BookingService, private patientService:PatientService, private router:Router) { }

  ngOnInit() {
    this.getAppointments();
    this.getPatients();
    this.getAllPatientsLinkedWithAppointment();
    this.setActive();

  }

  getPatients(){
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    })
  }

  getAppointments(){

    this.appointmentService.getAll().subscribe(data => {
        this.appointments = data;
    })

  }

  getAllPatientsLinkedWithAppointment(){

    this.appointmentService.getAll().subscribe(appointments =>{

      this.appointments = appointments;

      this.patientService.getAll().subscribe(patients =>{

          this.patients = patients;

          for(var i = 0; i < appointments.length; i++){
             
            for(var j = 0; j < patients.length; j++){
              if(appointments[i].patientId == patients[j].patientId){
                appointments[i].patient = patients[j];
              }
            }
          }
      });

    });

  }
  deleteAppointment(id:string) {
    this.appointmentService.deleteAppointment(id).subscribe(

      data => {
       console.log(data);
       this.getAppointments();
      }
    );
  }

  viewAppoinement(id:string) {

    this.appointmentService.saveId(id);
    this.router.navigate(['appointments/view']);
    

  }

  setActive(){
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('visitsLink').classList.remove('active');
    document.getElementById('appointmentsLink').classList.add('active');
  }

}
