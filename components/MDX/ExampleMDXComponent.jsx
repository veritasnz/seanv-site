export * from "react";

// import s from "./ExampleMDXComponent.module.css";

import Clouds from "../UI/Animations/Clouds";
import Hill from "../UI/Animations/Hill";

function ExampleMDXComponent() {
    return (
        <div className="example">
            <div className="example__clouds">
                <Clouds count="2" />
                <Clouds count="2" />
            </div>
            <div className="example__hills">
                <Hill height={180} color="blue" />
                <Hill height={110} color="orange" />
            </div>
            <div className="example__ground"></div>
        </div>
    );
}

export default ExampleMDXComponent;
