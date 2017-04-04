import React from 'react';

export default () => (
  <footer>
    <h1>React Native EU Conference 2017</h1>
    <h2>September 6th - 7th, 2017</h2>
    <a href="mailto:conference@callstack.io" title="Contact us">conference@callstack.io</a>
    <br />
    <br />
    <a className="grey" href="callstack.io" title="Callstack.io - expert React Native development">
      made with &lt;3 by Callstack
    </a>
    <style jsx>{`
      footer {
        background: black;
        text-align: center;
        padding: 30px;
      }

      h1, h2 {
        margin: 0;
      }

      h1 {
        color: #cdcdcd;
        font-weight: 300;
        font-size: 20px;
        padding-bottom: 10px;
      }

      h2 {
        color: white;
        font-size: 18px;
        padding-bottom: 10px;
      }

      a {
        color: #fe5c5e;
        font-weight: bold;
        text-decoration: none;
      }

      a.grey {
        color: #cdcdcd;
      }

      a:hover {
        text-decoration: underline;
      }

    `}</style>
  </footer>
);