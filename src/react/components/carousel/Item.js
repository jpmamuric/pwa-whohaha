import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/action-case-studies';

const CarouselItem = props => {
  const { title, id, _embedded, slug } = props.caseStudy;
  return (
    <div className='carousel__item'>
      <Link to={`/case-studies/${id}`} rel="noopener noreferrer"  onClick={()=>props.getCaseStudy(props.caseStudy)}>
        <img src={_embedded['wp:featuredmedia'][0].media_details.sizes['case-study-thumbnail'].source_url} alt={slug} />
        <p>{title.rendered}</p>
      </Link>
    </div>

  );
}

export default connect(null, actions)(CarouselItem);
