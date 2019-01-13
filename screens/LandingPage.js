import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from "react-slick";

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
    return (
      <div>
        <img src={url} id={key}/>
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
      dots: true,
      infinite: true,
      autoplaySpeed: 700,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      centerMode: true
    };
    return (
      <Slider {...settings}>
        {this.slideLoader()}
      </Slider>
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
