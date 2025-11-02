/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(1, "Renault", "Kangoo", 2017, 93272, "Blanco", "https://cdncla.lavoz.com.ar/files/avisos/aviso_auto/aviso-auto-renault-kangoo-13695258.webp"),
      new Vehiculo(2, "Chevrolet", "Spark", 2018, 55926, "Plateado", "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Small/chevrolet/spark/co/RT_PU_6126756bb73c4accb6ef0441ec0b88fd.webp"),
      new Vehiculo(3, "Nissan", "March", 2019, 28361, "Rojo", "https://www.carroya.com/noticias/sites/default/files/entradillas/395712864nissan-carroya.jpg")
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with 3 rows plus header', () => {
    const tableRows = debug.queryAll(By.css('table tr'));
    
    // Verificar que hay 4 filas
    expect(tableRows.length).toBe(4);
  });

  it('should have a thead with correct headers', () => {
    const thead = debug.query(By.css('thead'));
    expect(thead).toBeTruthy();
    
    const headers = thead.queryAll(By.css('th'));
    expect(headers.length).toBe(4);
    expect(headers[0].nativeElement.textContent).toContain('#');
    expect(headers[1].nativeElement.textContent).toContain('Marca');
    expect(headers[2].nativeElement.textContent).toContain('Linea');
    expect(headers[3].nativeElement.textContent).toContain('Modelo');
  });

  it('should have 3 data rows in tbody', () => {
    const tbody = debug.query(By.css('tbody'));
    const dataRows = tbody.queryAll(By.css('tr'));
    
    expect(dataRows.length).toBe(3);
  });
});
