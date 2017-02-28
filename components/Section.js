import React from 'react';

type SectionProps = {
  color?: string,
  children?: any,
};

export default ({ color, children }: SectionProps) => (
  <section style={{ backgroundColor: color || 'white' }}>
    <div>
      {children}
    </div>
    <style jsx>{`
      section {
        padding: 50px;
      }
      
      section :global(h1) {
        font-size: 34px;
        font-weight: normal;
        text-align: center;
        margin: 0px;
      }

      section :global(p) {
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        line-height: 28px;
      }

      section :global(h2) {
        margin: 0px;
      }

      section :global(h3) {
        margin: 0;
      }

      @media (max-width: 1000px) {
        section :global(br) {
          display: none;
        }
      }

      section :global(a) {
        background-color: #fe5c5e;
        box-shadow: 0 3px 20px rgba(0,0,0,0.1);
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        color: white;
        font-weight: bold;
        border-radius: 5px;
      }

      section :global(a:hover) {
        background-color: #ff4547;
      }

      section :global(a:active) {
        box-shadow: 0 3px 20px rgba(0,0,0,0.4);        
      }

      div {
        max-width: 1000px;
        margin: auto;
      }
      
    `}</style>
  </section>
);