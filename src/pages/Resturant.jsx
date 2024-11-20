import React from 'react';
import { ResturentModel } from '../3d-Model/ResturentModel';
import CanvasLayout from '../components/CanvasLayout';

const Resturant = () => {
  return (
    <>
      <CanvasLayout>
        <ResturentModel/>
      </CanvasLayout>
    </>
  );
};

export default Resturant;