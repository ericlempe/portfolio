import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p100", skillPercent: "100", skillName: "PHP" },
  { skillClass: "p100", skillPercent: "100", skillName: "JQUERY" },
  { skillClass: "p100", skillPercent: "100", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p90", skillPercent: "90", skillName: "TAILWIND CSS" },
  { skillClass: "p70", skillPercent: "70", skillName: "TYPESCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "NODE JS" },
  { skillClass: "p85", skillPercent: "85", skillName: "VUEJS" },
  { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
  { skillClass: "p40", skillPercent: "40", skillName: "PYTHON" },
  { skillClass: "p100", skillPercent: "100", skillName: "MYSQL" },
  { skillClass: "p90", skillPercent: "90", skillName: "POSTGRESQL" },
  { skillClass: "p90", skillPercent: "90", skillName: "SQL SERVER" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
