import React, { useState } from "react";
import "../../styles/msg-component-style/SuccessMessage.css";

const SuccessMessage = (props) => {

    const [isMsgVisible, setIsMsgVisible] = useState(true);
    const removeMsg = () => {
        setIsMsgVisible(false);
    } 

  return (
    isMsgVisible && (
    <div className="success-msg-cont">
      {props.success}
      <button className="X-button" onClick={removeMsg}>X</button>
    </div>
    )
  );
};

export default SuccessMessage;
