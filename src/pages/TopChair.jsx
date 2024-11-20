import React from 'react';
import { TopChairModel } from '../3d-Model/TopChairModel';
import CanvasLayout from '../components/CanvasLayout';

const TopChair = () => {
  return (
    <>
      <CanvasLayout>
        <TopChairModel/>
      </CanvasLayout>
    </>
  );
};

export default TopChair;