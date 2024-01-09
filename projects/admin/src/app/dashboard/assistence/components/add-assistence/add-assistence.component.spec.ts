import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssistenceComponent } from './add-assistence.component';

describe('AddAssistenceComponent', () => {
  let component: AddAssistenceComponent;
  let fixture: ComponentFixture<AddAssistenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssistenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
