import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLogistiqueComponent } from './list-logistique.component';

describe('ListLogistiqueComponent', () => {
  let component: ListLogistiqueComponent;
  let fixture: ComponentFixture<ListLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLogistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
