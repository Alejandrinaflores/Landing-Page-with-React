import React from "react";

export const Jumbotron = () => {
  return (
    <div className="jumbotron bg-danger bg-gradient text-start text-white mt-2 mb-2 p-5">
      <h1 className="display-8 text-dark">A Warm Welcome!</h1>
      <p className="lead">
        Women are already strong, it's about changing the way the world
        perceives that strength. Let's gonna read a little bit of this amazing
        empowerment women have had in this incredible programming world.
      </p>
      <p>The Women Who Changed The Tech World.</p>
      <p className="lead">
        <a
          className="btn btn-info btn-lg"
          href="https://www.globalapptesting.com/blog/the-women-who-changed-the-tech-world"
          role="button"
        >
          Read more!
        </a>
      </p>
    </div>
  );
};
