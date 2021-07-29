import React from 'react';
import './_banner.scss';

function Banner({ header, description, image }) {
  return (
    <div className="banner">
      <div className="banner__divider"></div>
      <div className="banner__followupdisplay">
        <div className="banner__followupdisplay__contentwrapper">
          <div className="banner__followupdisplay__contentwrapper__textwrapper">
            <p className="bold-content">{header}</p>
            <p>{description}</p>
          </div>
          <div className="banner__followupdisplay__contentwrapper__imagewrapper">
            Here goes image
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
