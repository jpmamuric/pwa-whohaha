import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, ResponsiveEmbed } from 'react-bootstrap';

import * as actions from '../../redux/actions/action-case-studies';
import Carousel from '../components/carousel/Carousel';

import whohahaLogo from '../../assets/img/whh-logo-white.png';


class About extends Component {
  async componentDidMount(){
    this.props.getCaseStudies();
  }

  render(){
    return (
      <div>
        <section>
          <Grid>
            <Row className="show-grid">
              <Col>
                <h1 className='about__h1'>WHOHAHA SPOTLIGHTS AND SUPPORTS WOMEN IN COMEDY</h1>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <ResponsiveEmbed a16by9>
                  <iframe id="vid1_Youtube_api" allowFullScreen="1" allow="autoplay; encrypted-media" title="YouTube video player"  src="https://www.youtube.com/embed/LwuY1hKP9ug?controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;loop=0&amp;fs=0&amp;hl=en&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fwhohaha.test&amp;widgetid=1"></iframe>
                </ResponsiveEmbed>
              </Col>
            </Row>
            <Row className="show-grid">
              <p className="lead"><span className="main-header">WhoHaha's misson </span> is to delight our audience of millions with a daily dose of laughter; empower and elevate funny female creators through content development, distribution and production resources; and partner with brands that want to make an impact through comedy and levity... and a bit of badass!</p>
            </Row>
          </Grid>
        </section>

        <Grid>
          <Row className="show-grid">
            <header className='top-header'>
                <h2 >Case Studies</h2>
            </header>
          </Row>
        </Grid>

        <Carousel list={this.props.caseStudies}/>

        <section className="about__section">
          <Grid >
            <Row className="show-grid">
              <Col md={10} sm={10} xs={10} mdOffset={1} smOffset={1} xsOffset={1}>
                <h2 className="about__h2">
                  Co-founded by actress, director, producer and badass Elizabeth Banks,
                    <img className="about__img" src={whohahaLogo} alt="Whohaha"/>
                   is on a mission to spotlight and support women in comedy. WhoHaha amplifies female voices by centering women in front of the camera, behind the scenes, and in the audience. Basically, we celebrate the “Who” behind the “Haha.”
                </h2>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col lg={5} md={5} sm={5} xs={10} lgOffset={1} mdOffset={1} smOffset={1} xsOffset={1} >
                <p className="about__p ">
                  WhoHaha’s wheelhouse is female-driven, female-created content. We bring smart, funny ideas to life by delivering the right content to the right audience, and by connecting creators, platforms, and partners. WhoHaha is your comedy matchmaker.
                </p>
              </Col>
              <Col lg={5} md={5} sm={5} xs={10} xsOffset={1} smOffset={0} >
                <p className="about__p ">
                  WhoHaha partners with brands, creators, and digital platforms to create funny, relevant content that reaches millions. We combine digital-first marketing expertise with production and development resources to create powerful campaigns that engage audiences through levity and humor.
                </p>
              </Col>
            </Row>
          </Grid>
        </section>

        <section>
          <Grid>
            <Row>
              <header className='top-header'>
                  <h2> Brands We Work With</h2>
              </header>
            </Row>
          </Grid>
        </section>

      </div>
    );
  }
}

const mapStateToProps = ({ caseStudies }) => ({ caseStudies: caseStudies.list })

export default connect(mapStateToProps, actions)(About);
