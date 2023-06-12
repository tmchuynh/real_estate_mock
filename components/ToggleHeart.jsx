import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  function handleButtonChange() {
    setSelected(!selected);
  }

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={handleButtonChange}
      style={{ border: "none" }}
    >
      {selected ? <BsHeartFill style={{color: "red"}}/> : <BsHeart />}
    </ToggleButton>
  );
}
