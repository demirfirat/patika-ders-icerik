import React from "react";

const Button = (props) => {
   
    return (
        <button {...props}></button>
    );
};
export default React.memo(Button);