import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PliroforikisComponent } from './pliroforikis.component';

describe('PliroforikisComponent', () => {
  let component: PliroforikisComponent;
  let fixture: ComponentFixture<PliroforikisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PliroforikisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PliroforikisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
