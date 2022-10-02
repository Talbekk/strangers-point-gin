import { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import styles from './signup.module.css';
import { LoadingButton } from '@material-ui/lab';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';    

const SignUp = () => {

    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
          }, 3000);
    }

    const handleClose = () => {
        setIsSubmitted(false);
    }

    return (
        <section>
            <Typography variant="body1" align="center" gutterBottom={true} marginBottom={2}>Register below to keep up to date with our progress.</Typography>
            <div className={styles.signUpRow}>
                <TextField className={styles.signUpForm} variant="outlined" size="small" fullWidth={true}/>
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