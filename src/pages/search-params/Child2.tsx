import React from "react";

const Child2 = ({ searchParams }) => {
  console.log("child 2 -- re-r");
  return <div>Child2 - {JSON.stringify(searchParams.toString())}</div>;
};

export default React.memo(Child2);
