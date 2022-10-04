import { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import styles from './signup.module.css';
import { LoadingButton } from '@material-ui/lab';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';    
import axios from 'axios';  

const SignUp = () => {

    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ emailAddress, setEmailAddress ] = useState(null);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        await axios.post('/api/entry', { emailAddress });
        setIsSubmitting(false);
        setIsSubmitted(true);
    }

    const handleClose = () => {
        setIsSubmitted(false);
    }

    return (
        <section>
            <Typography variant="body1" align="center" gutterBottom={true} marginBottom={2}>Register below to keep up to date with our progress.</Typography>
            <div className={styles.signUpRow}>
                <TextField className={styles.signUpForm} variant="outlined" size="small" fullWidth={true} onChange={(e) => setEmailAddress(e.target.value)}/>
                <LoadingButton
                variant="contained" 
                className={styles.signUpBtn} 
                loading={isSubmitting} 
                size="small"
                onClick={handleSubmit}
                endIcon={<MailOutlineIcon fontSize='large' />}
                loadingPosition="end"
                >Register</LoadingButton>
            </div>
            <Snackbar open={isSubmitted} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Thanks for joining us on our journey!</Alert>
            </Snackbar>
        </section>
    )
}

export default SignUp;