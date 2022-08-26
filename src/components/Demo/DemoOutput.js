import React from "react";

const DemoOutput = (props) => {
	return <p>{props.show ? "THis is New!" : ""}</p>;
};

// avoids unnecessary re renders
export default React.memo(DemoOutput);
