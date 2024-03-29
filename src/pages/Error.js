import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h2>Oops! It's a dead end.</h2>
        <Link to="/" class="btn btn-primary">
          go back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
