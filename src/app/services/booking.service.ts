import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../domain/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL: string = '//localhost:8080/booking';
  private id:string;

  constructor(private http:HttpClient) {}

  createAppointment(appointment:Booking) : Observable<Booking>{
    
    let username='admin';
    let password='admin';
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Booking>(this.baseURL + '/create', appointment, {headers});

  }

  findAppointmentById(id:string) : Observable<Booking>{

    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Booking>(this.baseURL + '/read/' + id, {headers});
  }

  updateAppointment(appointment:Booking) : Observable<Booking>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Booking>(this.baseURL + '/update', appointment, {headers});

  }

  deleteAppointment(id: string) : Observable<any>{


    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });


    return this.http.delete(this.baseURL + '/delete/' + id, {headers});

  }

  getAll() : Observable<Booking[]>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Booking[]>(this.baseURL + '/getall', {headers});

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
