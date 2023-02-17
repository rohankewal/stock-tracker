import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="text-center">
      <p className="text-white">
        &copy; {date} Rohan Kewalramani. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
