
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '31vw',
  height: '42vh',
  borderRadius:'3px',
  border:'1px solid black'
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      viewOnly: props.viewOnly,
      markers: props.markers,
      position: props.markers[0].position
    }
    this.addMarker = this.addMarker.bind(this)
    console.log(this.state.markers)
  }


  onMarkerClick = (props, marker, e) => {
    console.log(marker)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(this.state.selectedPlace)
    // console.log(this.state.markers[0])

  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  addMarker(mapProps, map, clickEvent) {
    console.log(this.state.viewOnly)
    if (!this.state.viewOnly) {
      var marker = {
        position: { lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() },
        title: 'NewMarker',
        name: 'I am a new marker',
        description: 'Just created a new marker'
      }
      console.log(this.state.markers)

      this.setState({
        markers: [marker],
        selectedPlace: marker
      })
    }
    console.log(this.state.markers[0].name)
  }

  render() {
    return (
      <div className="mpctnr">
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{
            lat: 39.744055,
            lng: -105.004363,
          }}
          onClick={this.addMarker}
        >

          {this.state.markers.map(marker => (
            <Marker
              onClick={this.onMarkerClick}
              key={marker.name}
              position={marker.position}
              title={marker.title}
              description={marker.description}
              name={marker.name}
            />
          ))}


          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          ><div className="infowindowctr"><h4>{this.state.selectedPlace.name}</h4></div></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDJaD0rO5oOSKauLw3u8JIOyTtedKUhUWY'
})(MapContainer);
