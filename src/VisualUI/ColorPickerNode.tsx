import React, { memo } from 'react';
import { Input, Box, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react';

import Handle from './Handle';
import Wrapper from './NodeWrapper';

const ColorNode = ({ data }: any) => {
  const { label = '', onChange = () => {}, color = '#000' } = data;

  return (
    <Wrapper label={label}>
      <Box pl={1} pr={2}>
        <Stack spacing={4}>
          <InputGroup size="xs" className='shape-color-btn'>
            <InputLeftAddon children="select color" />
            <Input
              className="nodrag"
              type="color"
              onChange={(evt) => onChange(evt.target.value)}
              defaultValue={color}
            />
          </InputGroup>
        </Stack>
      </Box>
      <Handle type="source" position="right" />
    </Wrapper>
  );
};

export default memo(ColorNode);
