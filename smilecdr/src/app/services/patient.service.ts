import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Patient, RootObject } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  patientUrl = 'https://try.smilecdr.com/baseR4/Patient?_format=json';

  constructor(private http: HttpClient) { }

  patients$ = this.http.get<RootObject>(this.patientUrl)
      .pipe(
        map(patients => 
          patients.entry.map(patient => ({
            firstName: patient.resource.name ? `${patient.resource.name[0]?.given[0]}` : "N/A",
            lastName: patient.resource.name ? patient.resource.name[0]?.family : "N/A",
            birthDate: patient.resource.birthDate,
            gender: patient.resource.gender,
            address: `${patient.resource.address}`,
            phoneNumber: patient.resource.telecom ? patient.resource.telecom[0]?.value : "N/A"
          })as Patient)
          )
      );
}
