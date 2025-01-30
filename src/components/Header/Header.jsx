import React from "react";
import "./Header.css";

const Header = ({ data }) => {
  return (
    <header className="header">
      <h1 className="header__name">{data.name}</h1>
      <p className="header__title">{data.title}</p>
      <div className="header__socials">
        {data.socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className={`fab fa-${social.icon}`} />
          </a>
          
        ))}
      </div>
    </header>
  );
};

export default Header;