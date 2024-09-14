'use client';
import React from "react";
import styled from "styled-components";

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
              <p className="desc font-bold text-lg ">
                - React & Next.js
                <br/>
                - Tailwind CSS
                <br/>
                - UI/UX Design
                <br/>
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
                <br/>
                - Database Design (SQL & NoSQL)
                <br/>
                - RESTful API Development
                <br/>
                - Authentication & Authorization
                <br/>
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
                <br/>
                - Cloud Deployment
                <br/>
                - Infrastructure as Code
                <br/>
                - Monitoring & Scaling
                <br/>
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
                <br/>
                - Debugging & Optimization
                <br/>
                - Analytical Thinking

              </p>
            </div>
          </div>
          <div className="face front">
            <b>Problem Solve</b>
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

.face.back b {
  margin: 0;
  padding: 0;
}

.face.back .desc {
  background-color: #eee;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.face.front {
  transition: 0.5s;
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

.card:hover .face.front {
  height: 60px;
}

.card:hover .face.front b {
  font-size: 2em;
}

.face.front {
  background-color: #0cbaba;
  border-radius: 15px;
}
`;

export default Card;
