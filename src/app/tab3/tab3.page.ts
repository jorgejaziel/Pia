import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: 25.785966942881316,
        lng: -100.26949295243566,
      },
      title: 'Barberia'
    },
    {
    position: {
        lat: 25.77809618211187,
        lng: -100.26736946472391,
    },
    title: 'Barber'
  },
  ];

  constructor() {}

  ngOnInit(){
    this.loadMap();
  }
  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = { lat: 25.782687295407083, lng: -100.26561937272308};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 16
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers(){
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}
