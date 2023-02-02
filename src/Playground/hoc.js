import React from "react";
import  ReactDOM  from "react-dom";

const info = (props)=> (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const requireAuthentication = (Authentication) =>{
  return (props)=>(
    <div>
      {props.isAuthenticated ? <Authentication {...props} /> : <p>Please login to view info</p>}
    </div>
  )

};

const AuthInfo = requireAuthentication(info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'))