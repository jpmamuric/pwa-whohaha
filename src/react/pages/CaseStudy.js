import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, ResponsiveEmbed } from 'react-bootstrap';

const CaseStudy = ({ caseStudy }) => {
  if (!caseStudy.title) {
    return <Redirect to='/about' />
  }

  const { title, acf } = caseStudy;

  return (
    <div>
      <Grid>
        <h1 className="entry-title center-text">{title.rendered}</h1>
        <Row>
          <Col md={8} mdOffset={2}>
            <ResponsiveEmbed a16by9>
              <iframe src={acf.video_link} title={title.rendered} allowFullScreen="allowfullscreen"></iframe>
            </ResponsiveEmbed>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <div dangerouslySetInnerHTML={ {__html: caseStudy.content.rendered} } />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ caseStudies }) => ({ caseStudy: caseStudies.item });

export default connect(mapStateToProps)(CaseStudy);
