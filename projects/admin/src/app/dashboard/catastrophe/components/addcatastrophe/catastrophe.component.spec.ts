import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatastropheComponent } from './catastrophe.component';

describe('CatastropheComponent', () => {
  let component: CatastropheComponent;
  let fixture: ComponentFixture<CatastropheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatastropheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatastropheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
