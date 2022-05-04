import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientTable = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }


  patients$ = this.patientService.patients$;
  
  

}
