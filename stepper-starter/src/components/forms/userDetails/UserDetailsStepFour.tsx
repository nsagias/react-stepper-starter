import React from "react";

const UserDetailsStepFour: React.FC<any> = (props) => {
  return(
    <>
      <h1>Step 4</h1>
      <button onClick={props.previousStep}>Previous Step</button>
      <button onClick={props.nextStep}>Next Step</button>
    </>
  );
}

export default UserDetailsStepFour;