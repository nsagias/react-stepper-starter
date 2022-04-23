import React from "react";
import { StepWizardChildProps } from "react-step-wizard";



const UserDetailsStepOne: React.FC <StepWizardChildProps> = (props) => {
  // const goToCheck = (num: number) => {
  //   props.goToStep(num);
  // };
  
  return(
    <>
      <h1>Step 1</h1>
      {/* <button onClick={props.previousStep}>Previous Step</button> */}
      <button onClick={props.nextStep}>Next Step</button>
    </>
  );
}
export default UserDetailsStepOne;