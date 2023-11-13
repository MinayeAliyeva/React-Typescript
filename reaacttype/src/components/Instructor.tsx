import React from "react";

//objectlerde props type
import { instructortype } from "./propstypes";
const Instructor = ({obj}:instructortype) => {
    console.log(obj);
    
  return <div>{obj.firsName}</div>;
};

export default Instructor;
