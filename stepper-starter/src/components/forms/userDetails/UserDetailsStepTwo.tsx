import React from "react";


const UserDetailsStepTwo: React.FC<any> = (props) => {
  return(
    <>
      <h1>Step 2</h1>
      <button onClick={props.previousStep}>Previous Step</button>
      <button onClick={props.nextStep}>Next Step</button>
    </>
  );
}

export default UserDetailsStepTwo;