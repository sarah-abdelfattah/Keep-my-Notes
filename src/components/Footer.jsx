import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ sarah23s {year}</p>
    </footer>
  );
}

export default Footer;
