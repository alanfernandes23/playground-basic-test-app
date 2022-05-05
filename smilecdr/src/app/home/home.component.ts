import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from '../interfaces/questionnaire-form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formData: JsonFormData;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get('/assets/questionnaire.json')
      .subscribe(formData => this.formData = formData as JsonFormData);
  }

}
