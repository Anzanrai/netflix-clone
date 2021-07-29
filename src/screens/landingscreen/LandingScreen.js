import React from 'react';
import Header from '../../components/header/Header';
import './_landingscreen.scss';
import Searchbar from '../../components/searchbar/Searchbar';
import Banner from '../../components/banner/Banner';
import BannerAlternate from '../../components/banner/BannerAlternate';

function LandingScreen() {
  return (
    <div className="landingScreen">
      <div className="landingScreen__maindisplay">
        <Header />
        <div className="landingScreen__maindisplay__content">
          <div className="landingScreen__maindisplay__contentwrapper">
            <p className="bold-content">Unlimited movies, TV shows and more.</p>
            <p>Watch anywhere. Cancel at any time.</p>
            <span>
              Ready to watch Netflix? Enter your email to create or restart your
              membership.
            </span>
            <Searchbar />
          </div>
        </div>
      </div>
      <Banner
        header="Enjoy Netflix on your TV."
        description="Watch titles on Smart TVs, PlayStation, Xbox, Chromecast, Apple
              TV, Blu-ray players and more."
        image=""
      />
      <BannerAlternate
        header="Download your shows to watch them offline."
        description="Save your favourites easily and always have something to watch."
        image=""
      />
      <Banner
        header="Watch Netflix everywhere."
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV without paying more."
        image=""
      />
      <BannerAlternate
        header="Create profiles for kids."
        description="Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership."
        image=""
      />
      <div className="landingScreen__maindisplay__divider"></div>
      <div className="landingScreen__footer">
        <div className="landingScreen__footer__contentwrapper">
          <p>
            Ready to watch Netflix? Enter your email to create or restart your
            membership.
          </p>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
