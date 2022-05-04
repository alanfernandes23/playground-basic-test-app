import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireDisplayComponent } from './questionnaire-display.component';

describe('QuestionnaireDisplayComponent', () => {
  let component: QuestionnaireDisplayComponent;
  let fixture: ComponentFixture<QuestionnaireDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
