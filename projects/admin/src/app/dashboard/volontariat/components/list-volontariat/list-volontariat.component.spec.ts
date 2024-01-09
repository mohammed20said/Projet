import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVolontariatComponent } from './list-volontariat.component';

describe('ListVolontariatComponent', () => {
  let component: ListVolontariatComponent;
  let fixture: ComponentFixture<ListVolontariatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVolontariatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVolontariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
