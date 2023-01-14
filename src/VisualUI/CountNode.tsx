import { memo } from 'react';
import { Box, Stack, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';

import Handle from './Handle';
import Wrapper from './NodeWrapper';
import { NodeProps } from 'reactflow';

const CountNode = ({ data }: NodeProps) => {
  const { label = '', onChange = () => { }, value } = data;
  const parse = (val: any) => val.replace(/^\$/, '');
  return (
    <Wrapper label={label}>
      <Box pl={1} pr={2}>
        <Stack spacing={4} className='shape-count-input'>
          <NumberInput defaultValue={value} min={1} max={100} onChange={(valueString) => onChange(parse(valueString))}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Stack>
      </Box>
      <Handle type="source" position="right" />
    </Wrapper>
  );
};

export default memo(CountNode);
