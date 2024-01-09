import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVolontariatComponent } from './add-volontariat.component';

describe('AddVolontariatComponent', () => {
  let component: AddVolontariatComponent;
  let fixture: ComponentFixture<AddVolontariatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVolontariatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVolontariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
