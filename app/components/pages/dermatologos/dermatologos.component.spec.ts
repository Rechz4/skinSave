import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatologosComponent } from './dermatologos.component';

describe('DermatologosComponent', () => {
  let component: DermatologosComponent;
  let fixture: ComponentFixture<DermatologosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DermatologosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DermatologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
