import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Physiotherapist } from '../domain/physiotherapist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhysioService {

  private baseURL: string = '//localhost:8080/physio';
  private id:string;

  constructor(private http:HttpClient) {}

  createDoctor(doctor:Physiotherapist) : Observable<Physiotherapist>{

    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Physiotherapist>(this.baseURL + '/create', doctor, {headers});

  }

  findDoctorById(id:string) : Observable<Physiotherapist>{

    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Physiotherapist>(this.baseURL + '/read/' + id, {headers});
  }

  updateDoctor(note:Physiotherapist) : Observable<Physiotherapist>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Physiotherapist>(this.baseURL + '/update', note, {headers});

  }

  deleteDoctor(id: string) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Physiotherapist[]>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Physiotherapist[]>(this.baseURL + '/getall', {headers});

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
