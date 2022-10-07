import React, {useState} from 'react';
import { LinearProgress } from '@mui/material';
import { Buttons } from './Buttons';

export function RunSource({buttonList}: any) {
  // const mutateSource = useSourceMutation();
  const [status, setStatus] = useState(false);

  const sourceRunnerButtons = [
    '1. download', 
    '2. convert', 
    '3. normalize', 
    '4. concatenate', 
    '5. tile', 
    'all'
  ];

  const progress = 10

  return (
    <div>
      <h1>Source Runner</h1>
      <Buttons 
        setStatus={setStatus} 
        buttonList={sourceRunnerButtons}
        variantDefault="primary"
      />
       <LinearProgress variant="determinate" value={progress} />
    </div>
  )
}
