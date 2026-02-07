import React from "react";
import Window from "../mac-window/Window";
import "./mail.scss";

const socials = [
  {
    name: "GitHub",
    username: "ameenshariff",
    link: "https://github.com/ameenshariff2003",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png"
  },
  {
    name: "LinkedIn",
    username: "Ameen Shariff",
    link: "https://linkedin.com/in/ameenshariff",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
  },
  
  {
    name: "Email",
    username: "ameenshariff3443@gmail.com",
    link: "mailto:ameenshariff3443@gmail.com",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png"
  }
];

const Mail = ({ windowname, setWindowState, setTopZ, zIndex }) => {
  return (
    <Window
      Xasix="150"
      Yasix="120"
      windowname={windowname}
      setTopZ={setTopZ}
      zIndex={zIndex}
      setWindowState={setWindowState}
    >
      <div className="mail-container">
        <div className="sidebar">
          <h3>Social</h3>
          {socials.map((item, index) => (
            <div key={index} className="sidebar-item">
              {item.name}
            </div>
          ))}
        </div>

        <div className="content">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <img src={item.icon} alt="" />
              <div>
                <h4>{item.name}</h4>
                <p>{item.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default Mail;