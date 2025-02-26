import { Component, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() latitude: number = 36.69569507643647;
  @Input() longitude: number = -4.457026720046998;
  @Input() isEditable: boolean = false;

  @Output() locationChanged = new EventEmitter<{ latitude: number; longitude: number }>();

  private map: any;
  private marker: any;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      import('leaflet').then(L => {
        this.initMap(L);
      }).catch(err => {
        console.error('Error loading leaflet:', err);
      });
    }
  }

  private initMap(L: any): void {
    if (typeof window === 'undefined') return;

    this.map = L.map('map').setView([this.latitude, this.longitude], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    const icon = L.icon({
      iconUrl: '/marker2.png',
      shadowUrl: 'marker2shadow.png',
      iconSize: [90, 100],
      shadowSize: [141, 56],
      iconAnchor: [42, 94],
      shadowAnchor: [10, 55],
      popupAnchor: [14, -76]
    });

    this.marker = L.marker([this.latitude, this.longitude], { icon }).addTo(this.map);

    if (this.isEditable) {
      this.map.on('click', (event: any) => {
        this.marker.setLatLng(event.latlng);
        this.locationChanged.emit({ latitude: event.latlng.lat, longitude: event.latlng.lng });
      });
    }
  }
}
