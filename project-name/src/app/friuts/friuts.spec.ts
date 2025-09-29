import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Friuts } from './friuts';

describe('Friuts', () => {
  let component: Friuts;
  let fixture: ComponentFixture<Friuts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Friuts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Friuts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
