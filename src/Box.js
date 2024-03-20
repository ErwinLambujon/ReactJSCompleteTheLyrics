import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSystemProps() {
  return (
    <Box
      height={300}
      width={600}
      my={4}
      padding="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ border: '5px solid grey', borderRadius: '20px' }}
    >
    </Box>
  );
}
