import React from "react";

//objectlerde props type
type instructortype = {
  obj: {
    firsName: string;
    lastName: string;
  };
};
const Instructor = ({obj}:instructortype) => {
    console.log(obj);
    
  return <div>{obj.firsName}</div>;
};

export default Instructor;
