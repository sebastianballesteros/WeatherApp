import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: ""};
    //take onInputChange function and replace the local method setState
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //all javaScript has event with an event (onChange, onScroll, onClick)
  onInputChange(event){
    this.setState( {term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    //we need to fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ""});
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit}className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite mexican cities."
          className="form-control"
          value={this.state.term}
          //we need to bind the context everytime we pass a callback
          //which has a reference to this
          onChange= {this.onInputChange}
        />
        <span  className="input-group-btn">
          <button type="sumbit" className="btn btn-secondary"> Submit </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather}, dispatch);
}

//null mean theres no mapStateToProps because we don't care about state
export default connect(null, mapDispatchToProps)(SearchBar);
