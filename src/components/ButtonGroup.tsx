import React from 'react';
import CustomeButton from './CustomeButton';

const ButtonGroup: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <CustomeButton label="Skin Treatment" />
      <CustomeButton label="Pregnancy"  />
      <CustomeButton label="Period Doubts" />
      <CustomeButton label="Endometriosis" />
      <CustomeButton label="Pelvic Pain" />
      <CustomeButton label="Ovarian Cysts" />
      <CustomeButton label="+ 5 More" highlighted={true}/>
    </div>
  );
};

export default ButtonGroup;
