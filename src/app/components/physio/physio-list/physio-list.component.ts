import { Component, OnInit } from '@angular/core';
import { Physiotherapist } from 'src/app/domain/physiotherapist';
import { PhysioService } from 'src/app/services/physio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-physio-list',
  templateUrl: './physio-list.component.html',
  styleUrls: ['./physio-list.component.css']
})
export class PhysioListComponent implements OnInit {

  private doctors: Physiotherapist[];

  private doctor:Physiotherapist;
  id:string;

  constructor(private doctorService:PhysioService, private router:Router) { }

  ngOnInit() {
    
    this.getDoctors();
    this.setActive();

  }

  getDoctors(){
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    });
  }

  deleteDoctor(id:string) {
    this.doctorService.deleteDoctor(id).subscribe(

      data => {
       console.log(data);
       this.getDoctors();
       alert('Physiotheraphist Deleted')
      }
    );
  }

  editDoctor(id:string) {

    this.router.navigate(['/physios/edit']);
    this.doctorService.saveId(id);

  }


  setActive(){
    document.getElementById('doctorsLink').classList.add('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('visitsLink').classList.remove('active');
  }

}
