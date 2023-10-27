import React from 'react';
import { Alert } from '@material-ui/lab';

export default function Teste() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <Alert onClose={handleClose} severity="warning">
          This is a warning alert — check it out!
          <br />
          <button onClick={handleClose}>Close</button>
          <button onClick={handleClose}>Another action</button>
        </Alert>
      )}
    </div>
  );
}
