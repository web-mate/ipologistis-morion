import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnhtropistikesComponent } from './anhtropistikes.component';

describe('AnhtropistikesComponent', () => {
  let component: AnhtropistikesComponent;
  let fixture: ComponentFixture<AnhtropistikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnhtropistikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnhtropistikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
