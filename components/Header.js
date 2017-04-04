import React from 'react';

export default () => (
  <header>
    <div className="wrapper">
      <nav>
        <img
          className="logo"
          src="/static/logo@2x.png"
          alt="React Native EU"
          height={322}
          width={64}
        />
      </nav>
      <div className="content">
        <a href="http://react-native.eu" title="React Native EU">
          <img
            alt="React Native EU logo"
            src="/static/mark.png"
            height={66}
            width={74}
          />
        </a>
        <h1>
          React Native Eu Conference
        </h1>
        <p>
          September 6th - 7th, 2017 | <span>Wroclaw, Poland</span>
        </p>
      </div>
    </div>
    <style jsx>{`
      header {
        background-image: url(/static/jumbotron_1024_bg.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-color: #464646;
      }

      .wrapper {
        padding-left: 20px;
        padding-right: 20px;
        max-width: 1024px;
        margin: 0 auto;
      }

      .content {
        text-align: center;
        padding-top: 20px;
        padding-bottom: 100px;
        min-height: 250px;
      }

      nav {
        height: 120px;
        padding: 30px;
      }
    
      h1 {
        color: white;
        font-weight: 400;
        font-size: 46px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
      }
      
      p {
        color: white;
        letter-spacing: 0.5px;
      }

      p span {
        color: rgb(255, 78, 80);
      }

      .logo {
        width: 161px;
        height: 32px;
        margin-top: 15px;
      }
    `}</style>
  </header>
);