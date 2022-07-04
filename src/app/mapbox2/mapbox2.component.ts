import { AppModule } from './../app.module';
import { Component, OnInit } from '@angular/core';
declare var mapboxgl: any;
declare var ekmapplf: any;
@Component({
  selector: 'app-mapbox2',
  templateUrl: './mapbox2.component.html',
  styleUrls: ['./mapbox2.component.scss'],
})
export class Mapbox2Component implements OnInit {
  map: any;
  constructor() {}

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      container: 'divMapId2',
      center: [105, 17],
      zoom: 4,
    });
    var mapOSMgray = new ekmapplf.RasterBaseMap(
      'OSM: Gray',
      'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc'
    ).addTo(this.map);
  }
}
