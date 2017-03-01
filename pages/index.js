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
      <meta name="description" value="First conference in the world to focus on anything and everything React Native." />
      <meta property="og:title" content="React Native EU Conference 2017" />
      <meta property="og:description" content="First conference in the world to focus on anything and everything React Native." />
      <meta property="og:image" content="https://react-native.eu/static/og.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8"/>
      <meta
        name="google-site-verification"
        content="8AedyujlPusAMVHBpSUYJcXCSuIywjlPANgcHd-AdJY"
      />
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
    </Head>
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
          style={{
            float: 'left',
            height: 450,
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
      <h1>Get your ticket today!</h1>
      <p>
        <a
          href="https://reactnativeeu.eventbrite.com/"
          title="Buy tickets"
        >
          Tickets
        </a>
      </p>
    </Section>
    <Footer />
  </div>
);