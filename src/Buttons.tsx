import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

export function Buttons({
  buttonList, 
  handleClick,
  variantDefault
}: any) {
  return (

      <ButtonGroup variant="contained">
        {buttonList.map((buttonTxt: string) => (
          <Button 
            color={
              (buttonTxt === 'all') 
              ? 'error' : 
              variantDefault
            }
            key={buttonTxt}
            onClick={handleClick}>
            {buttonTxt}
          </Button>
        ))}
      </ButtonGroup>
  );
}

