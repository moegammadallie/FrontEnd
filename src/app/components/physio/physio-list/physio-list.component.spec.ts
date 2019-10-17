import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioListComponent } from './physio-list.component';

describe('PhysioListComponent', () => {
  let component: PhysioListComponent;
  let fixture: ComponentFixture<PhysioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
