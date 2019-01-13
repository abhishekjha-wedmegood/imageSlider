import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';

import getSearchResultsFromAPI from "../actions/searchImage";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      data: [],
      query: "",
      page: 1
    };
    // this.props.getSearchResultsFromAPI(this.state.query, this.state.page);
    this.props.getSearchResultsFromAPI("coffee", 1);
  }

  imageSlide = (url,key) => {
    const newWidth = window.innerWidth > 767 ? (window.innerWidth-100) : (window.innerWidth-40);
    const newHeight = window.innerHeight > 767 ? (window.innerHeight-100) : (window.innerHeight-40);
    return (
      <div>
        <img src={url} id={key} style={{width:`${newWidth}px`, height:`${newHeight}px`}}/>
      </div>
    );
  };

  slideLoader = () => {
    var slides = [];
    this.props.urlList.forEach((element,key) => {
      slides.push(this.imageSlide(element,key));
    })
    return slides;
  }

  render() {
    const settings = {
      autoPlay: true,
      infiniteLoop: true,
      showIndicators: true,
      showArrows: true,
      showThumbs: false,
      width: `${window.innerWidth}px`,
      axis: 'horizontal',
      interval: 200
    };
    return (
      <Carousel {...settings}>
        {this.slideLoader()}
      </Carousel>
    );
  }
}

const mapStateToProps = state => {
  return {
    urlList: state.searchImage.urlList
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSearchResultsFromAPI: getSearchResultsFromAPI
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(LandingPage);
