import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../domain/patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL: string = '//localhost:8080/patient';
  private id:string;

  constructor(private http:HttpClient) {}

  createPatient(patient:Patient) : Observable<Patient>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Patient>(this.baseURL + '/create', patient, {headers});

  }

  findPatientById(id:string) : Observable<Patient>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Patient>(this.baseURL + '/read/' + id, {headers});
  }

  updatePatient(patient:Patient) : Observable<Patient>{
    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.put<Patient>(this.baseURL + '/update', patient, {headers});

  }

  deletePatient(id: string) : Observable<any>{

    return this.http.delete(this.baseURL + '/delete/' + id);

  }

  getAll() : Observable<Patient[]>{

    let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get<Patient[]>(this.baseURL + '/getall', {headers});

  }

  saveId(id:string){

    this.id = id;

  }

  getId() : string{

    return this.id;


  }
}
