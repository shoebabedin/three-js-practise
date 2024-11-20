import React from "react";
import { GeneralizedHumanBodyModel } from "../3d-Model/GeneralizedHumanBody";
import CanvasLayout from "../components/CanvasLayout";

const HumanBody = () => {
  return (
    <>
      <CanvasLayout>
        <GeneralizedHumanBodyModel />
      </CanvasLayout>
    </>
  );
};

export default HumanBody;
