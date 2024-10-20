import React from "react"
const ErrorMessage = ({message, color}) =>{
    return (

        <div
        style={{
            backgroundColor: color || "red",}}

            data-testid="error"
        >{message || "Error Occurred"}</div> 
    )
}

export default ErrorMessage