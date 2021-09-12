import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Tag() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Tag 1" onClick={handleClick} />
      <Chip label="Tag 2" variant="outlined" onClick={handleClick} />
    </Stack>
  );
}
