import React from "react";

interface IUserDetailsFormProps {
  previousStep: any,
  nextStep: any
}

const UserDetailsStepFive: React.FC <IUserDetailsFormProps>= (props) => {
  console.log(props)
  return(
    <>
      <h1>Step 5</h1>
      <h1>Last Step in form</h1>
      <button onClick={props.previousStep}>Previous Step</button>
      {/* <button onClick={props.nextStep}>Next Step</button> */}
    </>
  );
}

export default UserDetailsStepFive;