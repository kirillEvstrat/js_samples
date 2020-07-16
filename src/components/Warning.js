import React from "react";

export const Warning = (props) => (
    <div className="alert alert-danger" role="alert">
        {props.text}
    </div>
);