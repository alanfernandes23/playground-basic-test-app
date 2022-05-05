import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonFormData, JsonFormItem, Option } from 'src/app/interfaces/questionnaire-form';

@Component({
  selector: 'app-questionnaire-edit',
  templateUrl: './questionnaire-edit.component.html',
  styleUrls: ['./questionnaire-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionnaireEditComponent implements OnChanges {
  @Input() jsonFormData: JsonFormData;
  currentDate = new Date();
  display: boolean = false;

  public questionnaireForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges){
    if (!changes.jsonFormData.firstChange) {
      this.createForm(this.jsonFormData.item)
    }
  }

  createForm(controls: JsonFormItem[]) {
    for(const control of controls) {
      const addValidators = [];

      switch (control.type) {
        case 'boolean':
          addValidators.push(Validators.required);
          break;
        case 'choice':
          addValidators.push(Validators.required);
          break;
        case 'date':
          addValidators.push(Validators.required);
          break;
        case 'string':
          addValidators.push(Validators.required);
          addValidators.push(Validators.pattern('[a-zA-Z]'));
          break;
        default:
          break;
      }

      this.questionnaireForm.addControl(
        control.linkId,
        this.fb.control('', addValidators));
    }
  }

  get getUrl(){
    return this.questionnaireForm.controls;
  }

  // TODO fix bug - option has to be clicked twice in order to be selected
  getOptions(options: Option[]){
    let ddOptions= [];
    ddOptions.push({label: 'Select', value: null});
    for(const option of options) {
        ddOptions.push({label: `${option.valueCoding.display}`, value: `${option.valueCoding.code}`});
    }
    return ddOptions;
  }

  onSubmit() {
    this.display = true;
  }

}
