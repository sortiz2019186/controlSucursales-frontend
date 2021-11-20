import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosSucursalComponent } from './productos-sucursal.component';

describe('ProductosSucursalComponent', () => {
  let component: ProductosSucursalComponent;
  let fixture: ComponentFixture<ProductosSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
