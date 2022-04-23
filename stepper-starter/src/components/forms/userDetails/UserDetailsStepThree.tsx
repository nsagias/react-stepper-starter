import React from "react";


const UserDetailsStepThree: React.FC <any> = (props) => {
  return(
    <>
      <h1>Step 3</h1>
      <button onClick={props?.previousStep}>Previous Step</button>
      <button onClick={props?.nextStep}>Next Step</button>
    </>
  );
}

export default UserDetailsStepThree