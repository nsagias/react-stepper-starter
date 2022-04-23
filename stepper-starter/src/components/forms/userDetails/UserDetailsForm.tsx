import React from "react";
import StepWizard from "react-step-wizard";
import UserDetailsStepFive from "./UserDetailsStepFive";
import UserDetailsStepFour from "./UserDetailsStepFour";
import UserDetailsStepOne from "./UserDetailsStepOne";
import UserDetailsStepThree from "./UserDetailsStepThree";
import UserDetailsStepTwo from "./UserDetailsStepTwo";


const UserDetailsForm: React.FC<any> = (props)=> {
 
  return(
    <StepWizard>
      <UserDetailsStepOne 
        isActive={false} 
        currentStep={0} 
        totalSteps={0} 
        firstStep={function (): void { throw new Error("Function not implemented.")}} 
        lastStep={function (): void { throw new Error("Function not implemented.")}} 
        nextStep={function (): void { throw new Error("Function not implemented.")}} 
        previousStep={function (): void { throw new Error("Function not implemented.")} } 
        goToStep={function (step: number): void { throw new Error("Function not implemented.")} } 
        goToNamedStep={function (step: string): void {throw new Error("Function not implemented.")}} />
      <UserDetailsStepTwo />
      <UserDetailsStepThree />
      <UserDetailsStepFour />
      <UserDetailsStepFive previousStep={undefined} nextStep={undefined} />
    </StepWizard>
  );
}

export default UserDetailsForm;