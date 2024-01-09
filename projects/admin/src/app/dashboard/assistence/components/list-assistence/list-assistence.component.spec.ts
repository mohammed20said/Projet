import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssistenceComponent } from './list-assistence.component';

describe('ListAssistenceComponent', () => {
  let component: ListAssistenceComponent;
  let fixture: ComponentFixture<ListAssistenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAssistenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAssistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
