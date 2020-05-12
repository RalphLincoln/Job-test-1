import React from "react";

export default function Hero({ children }) {
  return (
    <div>
      <div className="hero">
        <div className="banner">
          <h1>Dress like you dream</h1>
          <p>We dress you like you're meant to dress</p>
          {children}
        </div>
      </div>
    </div>
  );
}
