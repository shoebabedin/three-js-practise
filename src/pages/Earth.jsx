import React from 'react';
import Earths from '../3d-Model/Earths';
import CanvasLayout from '../components/CanvasLayout';

const Earth = () => {
  return (
    <>
      <CanvasLayout>
        <Earths/>
      </CanvasLayout>
    </>
  );
};

export default Earth;