import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}
  var apiKey = 'w1Dlh2wRon7mE6sL196TgvLS45fw02uon74pJ0rc' // "Nhập khóa API eKMap Platform của bạn"
var map = new mapboxgl.Map({
container: 'divMapId',center: [105, 17],
zoom: 4
});
var mapOSMBrigth = new ekmapplf.VectorBaseMap('OSM:Bright', apiKey).addTo(map);
}
