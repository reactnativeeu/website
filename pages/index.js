/**
 * @flow
 */

import Head from 'next/head';

import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

export default () => (
  <div>
    <Head>
      <title>React Native EU Conference 2017</title>
      <meta name="description" content="FSeptember 6-7 2017 / Wroclaw, Poland. First conference focused only on React Native. Community, core contributors, networking, tons of knowledge. Join us!" />
      <meta name="keywords" content="Reactjs, React Native, Javascript, development, workshops, conference" />
      <meta property="og:title" content="React Native EU Conference 2017" />
      <meta property="og:description" content="First conference in the world to focus on anything and everything React Native." />
      <meta property="og:image" content="https://react-native.eu/static/og.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8"/>
      <meta name="google-site-verification" content="WSwg9gI1tMTa0g10Q591Fy_largloPnoGpnuKpcQHo0" />
      <link rel="icon" href="/static/favicon.png" type="image/x-icon" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <style>{`
        * {
          font-family: 'Lato', sans-serif;
        }
        html, body {
          margin: 0;
        }
      `}</style>
      <script dangerouslySetInnerHTML={{ __html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-83366185-1', 'auto');
        ga('send', 'pageview');
      `}} />
      <script dangerouslySetInnerHTML={{ __html: `
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1772209889764393'); // Insert your pixel ID here.
        fbq('track', 'PageView');
      `}} />
      <script dangerouslySetInnerHTML={{ __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KRBZGD8');
      `}} />
    </Head>
    <div>
      <a href="https://reactnativeeu.eventbrite.com/"  title="Buy tickets">
        Click here to get your ticket today!
      </a>

      <style jsx>{`
        div {
          background: #fe5c5e;
          height: 50px;
          text-align: center;
          line-height: 50px;
          font-size: 20px;
        }

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
    <Header />
    <Section>
      <h1>React Native comes to Poland</h1>
      <p>
        First conference in the world to focus on anything and everything React Native. <br />
        No web, backend or general purpose talks. We've seen it already. <br />
      </p>
      <p>
        Community, core contributors, insights, networking and tons of knowledge - <br />
        that's all waiting for you in one of the most beautiful cities in Central Europe - Wroclaw.
      </p>
      <p>
        <b>
          We will be waiting for you on September 6th and 7th at the Ibis Styles Hotel.
        </b>
      </p>
    </Section>
    <Section color="#f1f1f1">
      <div style={{ maxWidth: 880, margin: 'auto' }}>
        <img
          src="/static/mike.png"
          alt="Mike (@grabbou)"
          height={450}
          width={167}
          style={{
            float: 'left',
            marginBottom: -50,
            marginRight: 40,
          }}
        />
        <p style={{ textAlign: 'left', paddingTop: 60 }}>
          There are lots of tricky things with React Native, partially because of iOS and Android ecosystems. There are lots of unanswered questions hanging around, or just people struggling to find answers for problems that may seem trivial to us. This conference is the place they can visit, get answers to questions and go home start writing their next cool startup. And that’s the real purpose of the conference. I am excited for Callstack.io, the company I've founded, to be part of this transformation.
        </p>
        <h2>Mike Grabowski</h2>
        <h3>Co-founder @ Callstack.io</h3>
        <style jsx>{`
          @media (max-width: 880px) {
            img {
              display: none;
            }
            p {
              padding-top: 0!important;
            }
          }
        `}</style>
        <div style={{ clear: 'both' }} />
      </div>
    </Section>
    <Section>
      <h1>Don't have enough React Native experience?</h1>
      <p>
        Afraid you won't take maximum out of the sessions? No worries.
      </p>
      <p>
        We are preparing a series of workshops that will take place the day before the conference. <br />
        Join Mike (@grabbou) and Callstack.io crew on September 5th for an all-day intensive session in which <br />
        we guide you through the native unknowns and all the best practices in building a React Native app.
      </p>
    </Section>
    <Section color="#f1f1f1">
      <h1>Meet Your Speakers</h1>

      <div className="container">
        <div
          className="speaker red"
          style={{
            backgroundImage: 'url(https://avatars3.githubusercontent.com/u/1525924?v=3&s=400)'
          }}
        >
          <h3>Emil Sjölander</h3>
          <h4>Facebook</h4>
          <div>
            <p>
              Emil works on building frameworks at Facebook. Lately he has spent most of his time working on Yoga, a cross platform open source layout engine.
            </p>
          </div>
        </div>
        <div
          className="speaker grey"
          style={{
            backgroundImage: 'url(https://avatars3.githubusercontent.com/u/2320?v=3&s=400)'
          }}
        >
          <h3>Eloy Durán</h3>
          <h4>CocoaPods</h4>
          <div>
            <p>
              Eloy Durán is a serial open-sourcerer and lead engineer at Artsy. He started the CocoaPods project and has worked on various other technologies, such as RubyMotion.
            </p>
          </div>
        </div>
        <div
          className="speaker red"
          style={{
            backgroundImage: 'url(https://avatars1.githubusercontent.com/u/286616?v=3&s=400)'
          }}
        >
          <h3>Ken Wheeler</h3>
          <h4>Formidable</h4>
          <div>
            <p>Director of Open Source at Formidable Labs.</p>
          </div>
        </div>
        <div
          className="speaker grey"
          style={{
            backgroundImage: 'url(https://avatars0.githubusercontent.com/u/497214?v=3&s=400)'
          }}
        >
          <h3>Ville Immonen</h3>
          <h4>Reindex</h4>
          <div>
            <p>
              Consulting developer building stuff with React and React Native. Co-creator of Reindex – the first GraphQL backend as a service. Create React App maintainer.
            </p>
          </div>
        </div>
        <div
          className="speaker red"
          style={{
            backgroundImage: 'url(https://avatars1.githubusercontent.com/u/997157?v=3&s=400)'
          }}
        >
          <h3>Gant Laborde</h3>
          <h4>Infinite Red</h4>
          <div>
            <p>
              Gant is a tech lead for the San Francisco company Infinite Red, a published author, adjunct   professor, volunteer mentor, and a speaker at conferences world-wide.
            </p>
          </div>
        </div>
        <div
          className="speaker grey"
          style={{
            backgroundImage: 'url(https://avatars1.githubusercontent.com/u/1174278?v=3&s=400)'
          }}
        >
          <h3>Satyajit Sahoo</h3>
          <h4>Callstack.io</h4>
          <div>
            <p>
              Callstack’s own, front-end developer focused on Javascript technologies and mobile apps. Core contributor of React Native, super active in open source.
            </p>
          </div>
        </div>
      
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width: 1000px;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 20px;
        }

        .speaker {
          width: 250px;
          height: 250px;
          margin: 20px;
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-direction: column;
          background-size: cover;
          background-position: center center;
        }

        .speaker.red::after, .speaker.grey::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: #fe5c5e;
          opacity: 0.5;
          z-index: 0;
        }

        .speaker.grey::after {
          background: black;
        }

        .gray {
          background-color: red;
        }

        .speaker h3, .speaker h4 {
          color: white;
          z-index: 1;
        }

        .speaker h4 {
          margin-top: 5px;
          font-size: 15px;
        }

        .speaker > div {
          display: none;
          z-index: 1;
        }

        .speaker > div p {
          text-align: center;
          font-size: 16px;
          line-height: 20px;
        }

        .speaker:hover > div {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: black;
          padding: 20px;
          color: rgba(255, 255, 255, 0.8);
        }


      `}</style>
    </Section>

    <Section>
      <h1>Get your ticket today!</h1>

      <p>
        <a href="https://reactnativeeu.eventbrite.com/"  title="Buy tickets">
          Get tickets
        </a>
      </p>
    </Section>
    <Footer />
  </div>
);