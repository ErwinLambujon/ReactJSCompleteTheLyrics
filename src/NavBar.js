import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>First Singer</Button>
        <Button>Second Singer</Button>
        <Button>Third Singer</Button>
        <Button>Fourth Singer</Button>
      </ButtonGroup>
    </Box>
  );
}
