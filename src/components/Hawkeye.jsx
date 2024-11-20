import React from 'react';
import { HawkeyeModel } from '../3d-Model/HawkeyeModel';
import CanvasLayout from './CanvasLayout';

const Hawkeye = () => {
  return (
    <>
       <CanvasLayout>
        <HawkeyeModel />
      </CanvasLayout>
    </>
  );
};

export default Hawkeye;