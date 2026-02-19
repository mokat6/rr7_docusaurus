import React from "react";
import { useSearchParams } from "react-router";

const Child1 = () => {
  const [search, setSearch] = useSearchParams();
  console.log("child 1 -- renders");
  return <div>Child1</div>;
};

export default React.memo(Child1);
