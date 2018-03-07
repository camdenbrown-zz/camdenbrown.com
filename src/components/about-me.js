import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className={'subject'}>
        <p className={'description'}>
          A self taught jack-of-all-trades. I love to program and learn all types of things from JavaScript to how to
          implement DevOps tools. Check out some of the
          things I dabble in below and what I aspire to learn.
        </p>

        <div className={'learning-container'}>
          <h4>Some of the things I have worked with:</h4>
          <div className={"icon-container"}>
            <i data-tooltip="Ruby" className={"icon-ruby"}></i>
            <i data-tooltip="Ruby on Rails" className={"icon-ruby-on-rails"}></i>
            <i data-tooltip="ReactJS" className={"icon-reactjs"}></i>
            <i data-tooltip="jQuery" className={"icon-jquery"}></i>
            <i data-tooltip="AngularJs & Angular" className={"icon-angular"}></i>
            <i data-tooltip="MySQL" className={"icon-mysql"}></i>
            <i data-tooltip="PostGres" className={"icon-postgres"}></i>
            <i data-tooltip="Redis" className={"icon-redis"}></i>
            <i data-tooltip="AWS" className={"icon-aws"}></i>
            <i data-tooltip="Grunt" className={"icon-grunt"}></i>
            <i data-tooltip="SASS" className={"icon-sass"}></i>
            <i data-tooltip="HTML5" className={"icon-html5"}></i>
            <i data-tooltip="CSS3" className={"icon-css3"}></i>
            <i data-tooltip="JavaScript" className={"icon-javascript"}></i>
            <i data-tooltip="Perl" className={"icon-perl"}></i>
          </div>
        </div>

        <div className={'learning-container'}>
          <h4>Some of the things I want to learn:</h4>
          <div className={'icon-container'}>
            <i data-tooltip="Docker" className={"icon-docker"}></i>
            <i data-tooltip="Elixir" className={"icon-elixir"}></i>
            <i data-tooltip="Go" className={"icon-go"}></i>
            <i data-tooltip="Python" className={"icon-python"}></i>
            <i data-tooltip="Erlang" className={"icon-erlang"}></i>
            <i data-tooltip="MongoDB" className={"icon-mongodb"}></i>
            <i data-tooltip="Cassandra" className={"icon-cassandra"}></i>
            <i data-tooltip="Nginx" className={"icon-nginx-alt"}></i>
          </div>
        </div>
      </div>
    );
  };
}

export default AboutMe;