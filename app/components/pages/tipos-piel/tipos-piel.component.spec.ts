import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposPielComponent } from './tipos-piel.component';

describe('TiposPielComponent', () => {
  let component: TiposPielComponent;
  let fixture: ComponentFixture<TiposPielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposPielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposPielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
