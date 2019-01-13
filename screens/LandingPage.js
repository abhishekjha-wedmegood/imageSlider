import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";

import getSearchResultsFromAPI from "../actions/searchImage";

const newWidth =
  (window.innerWidth > 767
    ? `${window.innerWidth - 100}` / 2
    : `${window.innerWidth - 40}`) + "px";
const newHeight =
  (window.innerHeight > 767
    ? `${window.innerHeight - 100}`
    : `${window.innerHeight - 40}` / 2) + "px";

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

  imageSlide = (url, key) => {
    return (
      <div>
        <img
          src={url}
          id={key}
          style={{ width: `${newWidth}`, height: `${newHeight}` }}
        />
      </div>
    );
  };

  slideLoader = () => {
    var slides = [];
    this.props.urlList.forEach((element, key) => {
      slides.push(this.imageSlide(element, key));
    });
    return slides;
  };

  platformSpecificSlider = () => {
    const settings = {
      autoPlay: true,
      infiniteLoop: true,
      showIndicators: true,
      showArrows: true,
      showThumbs: false,
      width: `${newWidth}`,
      axis: "horizontal",
      interval: 700
    };
    if (window.innerWidth > 767) {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Carousel {...settings}>{this.slideLoader()}</Carousel>
          <Carousel {...settings}>{this.slideLoader()}</Carousel>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: window.innerWidth }}>
            <Carousel {...settings}>{this.slideLoader()}</Carousel>
          </div>
          <div style={{ width: window.innerWidth }}>
            <Carousel {...settings}>{this.slideLoader()}</Carousel>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.platformSpecificSlider();
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
