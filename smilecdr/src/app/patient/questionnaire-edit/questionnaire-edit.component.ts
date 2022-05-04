import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-questionnaire-edit',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.css']
})
export class QuestionnaireEditComponent implements OnInit {

    questionnaireForm = this.fb.group({
      allergies: [null, Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      countryOfBirth: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      smoke: [null, Validators.required],
      alcohol: [null, Validators.required],
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });

  formSubmitted: boolean = false;
  currentDate = new Date();

  genderList = [
    {label: "Male", value: "Male"},
    {label: "Female", value: "Female"},
    {label: "Other", value: "Other"},
  ];
  maritalStatusList = [
    {label: "Married", value: "Married"},
    {label: "Single", value: "Single"},
    {label: "Divorced", value: "Divorced"},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.questionnaireForm.value);
    this.formSubmitted = true;
  }

  get aliases() {
    return this.questionnaireForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
