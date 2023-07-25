import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Eric", hasColor: "" },
  { meta: "last name", metaInfo: "Lempe Perin", hasColor: "" },
  { meta: "Age", metaInfo: "29 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Brazilian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "phone", metaInfo: "+5527992373693", hasColor: "" },
  { meta: "Email", metaInfo: "dev.ericlp@gmail.com", hasColor: "" },
  { meta: "langages", metaInfo: "Portuguese, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
