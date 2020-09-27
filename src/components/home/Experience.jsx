import React, { useState, useEffect, Profiler } from "react";
import Boeing from "../../editable-stuff/boeing.jpg";
import Dell from "../../editable-stuff/dell-logo.png"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Some of my other homes</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Dell}
                        alt="dell technologies logo"
                        width="270"
                        height="66"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        For two years I was a Field Manager in the implementation of more than 200 site 3G and 4G along the South and West of Argentina. This also includes transmission systems and subcontractor management.
                        <br/>
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Boeing}
                        alt="boeing logo"
                        width="350"
                        height="95"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                    For over 6 years I was Group Leader and Expert in transmission systems. I personally implemented or supervised rollouts in Argentina, Mexico, Guatemala, Costa Rica, El Salvador, and Brazil. 
                        <br/>
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;