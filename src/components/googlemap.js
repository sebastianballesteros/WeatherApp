import React, {Component} from "react";

export default class GoogleMap extends Component {
  componentDidMount(){
    //embedded google map that takes an html element where
    //it will be render to and an options object
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat:this.props.lat,
        lng: this.props.lon
      }
    })
  }

  //where componentDidMount() will render the map
  render(){
    return <div ref="map" />
  }
}
