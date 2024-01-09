import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogistiqueComponent } from './add-logistique.component';

describe('AddLogistiqueComponent', () => {
  let component: AddLogistiqueComponent;
  let fixture: ComponentFixture<AddLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLogistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
