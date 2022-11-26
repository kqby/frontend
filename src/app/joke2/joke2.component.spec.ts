import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joke2Component } from './joke2.component';

describe('Joke2Component', () => {
  let component: Joke2Component;
  let fixture: ComponentFixture<Joke2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Joke2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Joke2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
