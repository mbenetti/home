import React, { useState, useEffect, Profiler } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
const Skills = () => {
return (
    <div id="skills" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#d6d6d6'}}>
      <div className="container container-fluid">
        
            {/* <div className="col-5 d-none d-lg-inline align-self-center">
            </div> */}
            <div className="d-inline align-self-center">
            <h1 className="display-4 pb-5 text-center">Skills</h1>
            
            <Tabs defaultActiveKey="home" justify variant="tabs" transition={false} id="skills-tabs" style={{backgroundColor:'#f7f7f7', fontSize:'1.25rem'}}>
            <Tab eventKey="home" title="Hard Skills">
                <div className="row">
                <div className="col">
                <br/>
                  <p className="lead">Analytics & Data Science
                  <ProgressBar now={90} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Business Intelligence
                  <ProgressBar now={87} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Project Management
                  <ProgressBar now={80} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Data Engineering
                  <ProgressBar now={70} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">IIoT and Edge computing
                  <ProgressBar now={60} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
              </div>
              <div className="col">
              <br/>
                <p className="lead">Python, R and C
                <ProgressBar now={90} style={{width:'490px', backgroundColor:'white'}}/>
                </p>
                <p className="lead">Docker container and Micro Service Architecture
                <ProgressBar now={85} style={{width:'490px', backgroundColor:'white'}}/>
                </p>
                <p className="lead">Cloud technologies: SAP Cloud and Micrisoft Azure
                  <ProgressBar now={80} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                <p className="lead">Linux SUSE, Ubuntu, Raspbian, RedHat 
                <ProgressBar now={75} style={{width:'490px', backgroundColor:'white'}}/>
                </p>
                <p className="lead">SQL, Cypher(Graph), NOSQL
                <ProgressBar now={50} style={{width:'490px', backgroundColor:'white'}}/>
                </p>
              </div>
              </div>
              </Tab>
              
              <Tab eventKey="soft" title="Soft Skills">
              <div className="col d-lg-inline align-self-center">
                <br/>
                <div className="row" style={divStyle}>
                <div className="col text-center">
                <p className="lead text-center">Leadership</p>
                <img src="https://img.icons8.com/ios-filled/50/000000/leadership.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Proactive Problem Solving</p>
                <img src="https://img.icons8.com/ios/75/000000/critical-thinking.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Autonomy</p>
                <img src="https://img.icons8.com/ios/75/000000/happy-cloud.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Business Focus</p>
                <img src="https://img.icons8.com/ios/75/000000/happy-cloud.png"/>
                </div>
                <br/>
                <div className="row" style={divStyle}>
                <div className="col text-center">
                <p className="lead text-center">Effective Comunication</p>
                <img src="https://img.icons8.com/ios/75/000000/goal.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Organization</p>
                <img src="https://img.icons8.com/ios/75/000000/to-do.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Critical Thinking</p>
                <img src="https://img.icons8.com/ios/75/000000/trust.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Intellectual Curiosity</p>
                <img src="https://img.icons8.com/ios/75/000000/trust.png"/>
                </div>
                </div>
                </div>
                </div>                               
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
  );
};

export default Skills;