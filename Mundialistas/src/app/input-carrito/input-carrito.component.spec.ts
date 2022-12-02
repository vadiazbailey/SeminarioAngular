import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCarritoComponent } from './input-carrito.component';

describe('InputCarritoComponent', () => {
  let component: InputCarritoComponent;
  let fixture: ComponentFixture<InputCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
