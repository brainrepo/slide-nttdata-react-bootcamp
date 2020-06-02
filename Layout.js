import React from "react";

export default ({ children }) => (
  <div style={{padding: '60px'}}>
    {children}
    <img
      style={{ position: "absolute", top: 10, right:10, width:'100px' }}
      src="https://www.gitbar.it/static/151751c7a7795ca87f026014fc95f835/2a4de/me.png"
    ></img>
  </div>
);