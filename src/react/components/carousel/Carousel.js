import React , { Component } from "react";
import Slider from "react-slick";

import { Grid, Row, Col } from 'react-bootstrap';
import CarouselItem from '../carousel/Item';

class SimpleSlider extends Component {

  renderList = () => {
    return this.props.list.map( item => <CarouselItem key={item.id} caseStudy={item} /> );
  }

  render() {
    var settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipeToSlide: true,
      className: 'slides',
      responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
    };

    if(this.props.list.length === 0) {
      return <div className='carousel__loading'> Loading ... </div>
    }

    return (
      <Grid >
        <Row className="show-grid">
           <Col md={12}>
             <Slider {...settings}>
               { this.renderList() }
             </Slider>
           </Col>
        </Row>
      </Grid>

    );
  }
}

export default SimpleSlider;
