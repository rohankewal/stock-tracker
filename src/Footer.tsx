import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="py-4 text-center text-white fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p>&copy; {date} My Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
