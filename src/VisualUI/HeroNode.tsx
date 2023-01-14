import React from 'react';
import { memo } from "react";
import { NodeProps } from "reactflow";
import { Box } from '@chakra-ui/react';

import Fiber from './Fiber';
import Handle from './Handle';
import Wrapper from './NodeWrapper';

const HeroNode = ({ data }: NodeProps) => {
  const { label = '' } = data;

  return (
    <Wrapper label={label}>
      <Box height="100%" width="100%">
        <Fiber {...data} />
        <Handle type="target" position="left" style={{ top: 20 }} id="shape" />
        <Handle type="target" position="left" style={{ top: 40 }} id="color" />
        <Handle type="target" position="left" style={{ top: 60 }} id="zoom" />
        <Handle type="target" position="left" style={{ top: 80 }} id="number" />
      </Box>
    </Wrapper>
  );
}

export default memo(HeroNode);