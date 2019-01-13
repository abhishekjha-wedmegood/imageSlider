import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import getSearchResultsFromAPI from '../actions/searchImage';

class LandingPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        refreshing: false,
        data: [],
        query: '',
        page: 1
    }
    // this.props.getSearchResultsFromAPI(this.state.query, this.state.page);
    this.props.getSearchResultsFromAPI('coffee', 1);
  };
  
  render() {
    return (
      <div>
          test
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    urlList: state.searchImage.urlList
  };
 }
 
 const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSearchResultsFromAPI: getSearchResultsFromAPI
  }, dispatch);
 }

export default connect(mapStateToProps,matchDispatchToProps)(LandingPage);
