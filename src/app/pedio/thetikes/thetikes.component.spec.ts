import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetikesComponent } from './thetikes.component';

describe('ThetikesComponent', () => {
  let component: ThetikesComponent;
  let fixture: ComponentFixture<ThetikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
