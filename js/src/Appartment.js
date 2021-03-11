import React from "react";

const Appartment = ({
  appartment: { title, image, price, rating, isAvailable }
}) => (
  <div>
    <img src={image}  alt="..." />
    <div >
      <h5>
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="5" fill={isAvailable ? "green" : "red"} />
        </svg>
        {title}
      </h5>
      <p >
        <small>
            {new Array(parseInt(rating)).fill("⭐️️️️️")}
        </small>
        <br/>
        <small className="text-muted">${price} per night</small>
        <br/>
        <br/>
      </p>
    </div>
  </div>
);

export default Appartment;