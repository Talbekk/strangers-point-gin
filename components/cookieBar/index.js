import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { event as gaEvent } from '../../lib/ga'; 

const CookieBar = () => {

    const [ onOpen, setOnOpen ] = useState(true);

    const handleClose = () => {
        setOnOpen(false);
        gaEvent({action: "closed cookie bar"});
    }

    return (
        <Snackbar open={onOpen} autoHideDuration={10000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>We collect basic page usage data and the email address is only saved when you hit register.</Alert>
        </Snackbar>
    )
}

export default CookieBar;