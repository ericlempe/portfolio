import React from "react";

const experienceContent = [
  {
    year: "2021 - Present",
    position: "Software Engineer",
    compnayName: "Mindtec",
    details: `I am responsible for technical and customer documentation, development, testing and maintenance of
    systems, and assist in the review of code of junior developers.`,
  },
  {
    year: "2019 - 2021",
    position: "Software Developer",
    compnayName: "Pharmanexo",
    details: `I was responsible for the development, tests and maintenance of the web system and integrations with
    product portals and suppliers.`,
  },
  {
    year: "2017 - 2019",
    position: "Consultant",
    compnayName: "ESC - ENGINEERING IN CENTRALIZED SOLUTIONS",
    details: `As an intern, I participated in several web systems projects from different areas, working in the
    development, testing and maintenance.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
