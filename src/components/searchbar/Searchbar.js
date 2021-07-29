import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './_searchbar.scss';

function Searchbar() {
  return (
    <div className="searchbar">
      <input placeholder="Email Address" />
      <button className="searchbar__button">
        Get Started
        <span>
          <ArrowForwardIosIcon size={15} />
        </span>
      </button>
    </div>
  );
}

export default Searchbar;
