import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioCreateComponent } from './physio-create.component';

describe('PhysioCreateComponent', () => {
  let component: PhysioCreateComponent;
  let fixture: ComponentFixture<PhysioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
