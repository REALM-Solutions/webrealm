
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      // viewOnly: props.viewOnly,
      viewOnly: false,
      markers: props.marker
    }
    this.addMarker = this.addMarker.bind(this)
  }
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  addMarker(event) {
    // var latt = event.LatLng.lat()
    //  lngg = e.latLng.lng()
    console.log(event.latlng)
    if (!this.state.viwOnly) {
      var marker = {
        // latLang: e.nativeEvent.coordinate,
        title: 'NewMarker',
        description: 'Just created a new marker'
      }
      // this.props.getCoordinates(e.nativeEvent.coordinate)
      this.setState({
        markers: [marker]
      })
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: 39.744055,
          lng: -105.004363,
        }}
        onClick={(e) => this.addMarker(e)}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        ><div><h4>{this.state.selectedPlace.name}</h4></div></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDJaD0rO5oOSKauLw3u8JIOyTtedKUhUWY'
})(MapContainer);