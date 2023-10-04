import React from "react";
import "../styles/Header.css";

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
      <p className="header-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate molestias sequi rerum fugit delectus pariatur officia, iste, molestiae, perferendis corporis ex sit nesciunt voluptas quas deleniti iure! Sequi, unde saepe. Ex doloremque dicta consequuntur aliquam dolore unde voluptate? Illum numquam accusamus ut obcaecati fugit quia cum provident dolorem esse magnam?</p>
    </div>
  );
};

export default Header;