import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatastropheComponent } from './list-catastrophe.component';

describe('ListCatastropheComponent', () => {
  let component: ListCatastropheComponent;
  let fixture: ComponentFixture<ListCatastropheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCatastropheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCatastropheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
