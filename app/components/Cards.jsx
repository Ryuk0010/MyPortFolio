'use client';
import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper className="text-white dark:text-neutral-200 hover:text-black">
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
        <div className="container">
          <div className="card">
            <div className="face back">
              <div className="content">
                <span className="stars" />
                <b className="desc"></b>
                <p className="desc font-bold text-lg">
                  - React & Next.js
                  <br />
                  - Tailwind CSS
                  <br />
                  - UI/UX Design
                  <br />
                  - Performance Optimization
                </p>
              </div>
            </div>
            <div className="face front">
              <b>FrontEnd</b>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="face back">
              <div className="content">
                <span className="stars" />
                <b className="desc"></b>
                <p className="desc font-bold text-lg">
                  - Node.js & Express
                  <br />
                  - Database Design
                  <br />
                  - RESTful API Development
                  <br />
                  - Authentication & Authorization
                  <br />
                  - Microservices Architecture
                </p>
              </div>
            </div>
            <div className="face front">
              <b>Backend</b>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="face back">
              <div className="content">
                <span className="stars" />
                <b className="desc"></b>
                <p className="desc font-bold text-lg">
                  - AWS (Amazon Web Services)
                  <br />
                  - Cloud Deployment
                  <br />
                  - Infrastructure as Code
                  <br />
                  - Monitoring & Scaling
                  <br />
                  - Cloudflare
                </p>
              </div>
            </div>
            <div className="face front">
              <b>Cloud</b>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="face back">
              <div className="content">
                <span className="stars" />
                <b className="desc"></b>
                <p className="desc font-bold text-lg">
                  - Data Structures & Algorithms
                  <br />
                  - Debugging & Optimization
                  <br />
                  - Analytical Thinking
                </p>
              </div>
            </div>
            <div className="face front">
              <ba className='flex justify-center'>Problem Solve</ba>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    margin: 0 auto;
  }

  .card {
    position: relative;
    width: 600px;
    height: 300px;
    margin: 80px auto;
    background: #2d3748;
    border-radius: 15px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  .face {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .face.back {
    box-sizing: border-box;
    padding: 20px;
  }

  .face.front {
    transition: 0.5s;
    background-color: #0cbaba;
    border-radius: 15px;
  }

  .face.front b {
    margin: 0;
    padding: 0;
    font-size: 5.1em;
    color: #fff;
    transition: 0.5s;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
      .face.front ba {
    margin: 0;
    padding: 0;
    font-size: 5.1em;
    color: #fff;
    transition: 0.5s;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .card:hover .face.front {
    height: 60px;
  }

  .card:hover .face.front b {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    .card {
      width: 90%; /* Reduced width for smaller screens */
      height: 250px; /* Reduced height */
    }

    .face.front b {
      font-size: 3.5em; /* Smaller font size for mobile */
    }

    .card:hover .face.front {
      height: 50px; /* Adjust hover effect for smaller screens */
    }

    .card:hover .face.front b {
      font-size: 1.8em; /* Smaller font size on hover for mobile */
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 90%; /* Full width on very small screens */
      height: 200px; /* Further reduced height */
    }

    .face.front b {
      font-size: 3em; /* Smaller font size for very small screens */
    }

      .face.front ba {
      font-size: 2em; /* Smaller font size for very small screens */
    }
    .card:hover .face.front b {
      font-size: 1.6em; /* Even smaller font on hover */
    }
  }
`;

export default Card;
