import React from 'react';
import { Handle as RfHandle } from 'reactflow';

const defaultStyle = {
  width: 10,
  height: 10,
  backgroundColor: '#BDC4CC',
  border: 'none',
};

const Handle = ({ style, label, ...props }: any) => {
  return <RfHandle style={{ ...defaultStyle, ...style }} {...props} />;
}

export default Handle;
