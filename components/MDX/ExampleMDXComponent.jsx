export * from "react";

import Clouds from "./Clouds";
import Hill from "./Hill";

function ExampleMDXComponent() {
  return (
    <div className="t-example-mdx">
      <div className="t-example-mdx__clouds">
        <Clouds count="3" yOffset="4rem" />
        <Clouds count="3" yOffset="10rem" />
      </div>
      <div className="t-example-mdx__hills">
        <Hill height={60} color="blue" />
        <Hill height={30} color="orange" />
      </div>
    </div>
  );
}

export default ExampleMDXComponent;
