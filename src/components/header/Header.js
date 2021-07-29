import React from 'react';
import './_header.scss';

function Header() {
  const netflixLogo =
    'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg';

  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__image" src={netflixLogo} />
      </div>
      <div className="header__menu">
        <button className="header__button">Sign in</button>
      </div>
    </div>
  );
}

export default Header;
