import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  vehiculosPorMarca: Map<string, Vehiculo[]> = new Map<string, Vehiculo[]>();
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
      this.agruparPorMarca();
    });
  }

  agruparPorMarca() {
    this.vehiculos.reduce((acc, vehiculo) => {
      if (!acc.has(vehiculo.marca)) {
        acc.set(vehiculo.marca, []);
      }
      acc.get(vehiculo.marca)?.push(vehiculo);
      return acc;
    }, this.vehiculosPorMarca);
  }

}
