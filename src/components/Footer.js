import React from "react";

const Footer = () => (
    <footer className="footer">
        <div className="content has-text-centered">
            <p className="strong">Made by Jennifer Renken</p>
            <p>
                <a href="https://github.com/jenn-renken" target="_blank" className="mr-5">
                    <img src={require("../assets/GitHub-Mark-32px.png")} />
                </a>
                <a href="https://www.linkedin.com/in/jennifer-renken-1079a24/" target="_blank" className="mr-5">
                    <span className="icon">
                     <img src={require("../assets/LI-In-Bug.png")} />
                    </span>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <span className="icon">
                     <img src={require("../assets/Instagram_Glyph_Gradient_RGB.png")} />
                    </span>
                </a>
            </p>
        </div>
    </footer>

);

export default Footer;