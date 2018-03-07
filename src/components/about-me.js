import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className={'subject'}>
        <p className={'description'}>
          A self taught jack-of-all-trades. I love to program and learn all types of things from JavaScript to how to implement DevOps tools. Check out some of the
          things I dabble in below and what I aspire to learn.
        </p>

        <div className={'learning-container'}>
          <h4>Some of the things I have worked with:</h4>
          <div className={"icon-container"}>
            <i className={"icon-ruby"}></i>
            <i className={"icon-ruby-on-rails"}></i>
            <i className={"icon-reactjs"}></i>
            <i className={"icon-jquery"}></i>
            <i className={"icon-angular"}></i>
            <i className={"icon-mysql"}></i>
            <i className={"icon-postgres"}></i>
            <i className={"icon-redis"}></i>
            <i className={"icon-aws"}></i>
            <i className={"icon-grunt"}></i>
            <i className={"icon-sass"}></i>
            <i className={"icon-html5"}></i>
            <i className={"icon-css3"}></i>
            <i className={"icon-javascript"}></i>
            <i className={"icon-perl"}></i>
          </div>
        </div>

        <div className={'learning-container'}>
          <h4>Some of the things I want to learn:</h4>
          <div className={'icon-container'}>
            <i className={"icon-docker"}></i>
            <i className={"icon-elixir"}></i>
            <i className={"icon-go"}></i>
            <i className={"icon-python"}></i>
            <i className={"icon-erlang"}></i>
            <i className={"icon-mongodb"}></i>
            <i className={"icon-cassandra"}></i>
            <i className={"icon-nginx-alt"}></i>
          </div>
        </div>
      </div>
    );
  };
}

export default AboutMe;