import React from 'react';
import { LinearProgress } from '@mui/material';

export default function ProgressBar({busy, progress}: any) {
  // If the progress bar is describing the loading progress 
  // of a particular region of a page, you should use aria-describedby 
  // to point to the progress bar, and set the aria-busy attribute 
  // to true on that region until it has finished loading.


  return (
    <LinearProgress variant="determinate" value={progress} />
  );
}