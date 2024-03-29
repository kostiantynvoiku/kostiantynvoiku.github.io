import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="projects-container" style={{ height: '60vh', paddingBottom: '0px' }}>
            <iframe
              // https://www.sociablekit.com/app/users/widgets/update_embed/25381304#basic
              src='https://widgets.sociablekit.com/linkedin-recommendations/iframe/25381304'
              title='LinkedIn Recommendations'
              frameborder='0'
              width='100%'
              height='100%'
            ></iframe>
          </div>
        </div>
      </div>
    </Fade>
  );
}
