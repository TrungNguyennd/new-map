import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {

  var apiKey = 'YOUR_API_KEY' // "Nhập khóa API eKMap Platform của bạn"
  var map = new mapboxgl.Map({
  container: 'divMapId',center: [105, 17],
  zoom: 4
  });
  var mapOSMBrigth = new ekmapplf.VectorBaseMap('OSM:Bright', apiKey).addTo(map);
  
  constructor() {}

  ngOnInit(): void {}
  
}
