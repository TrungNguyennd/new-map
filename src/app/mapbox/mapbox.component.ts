import { Component, OnInit } from '@angular/core';
declare var mapboxgl: any;
declare var ekmapplf: any;
@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {
  constructor() {}
  map: any;

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      container: 'divMapId',
      center: [105, 17],
      zoom: 4,
    });
    var mapOSMBrigth = new ekmapplf.VectorBaseMap(
      'OSM:Bright',
      'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc'
    ).addTo(this.map);
  }
}
