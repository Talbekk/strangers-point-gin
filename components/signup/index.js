import { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import styles from './signup.module.css';
import { LoadingButton } from '@material-ui/lab';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';    
import axios from 'axios';  
import isEmail from 'validator/lib/isEmail';
import Competition from '../competition';
import { event as gaEvent } from '../../lib/ga'; 


const SignUp = () => {

    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ emailAddress, setEmailAddress ] = useState('');
    const [ showErrorMessage, setShowErrorMessage ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);

    const handleSubmit = async () => {
        setShowErrorMessage(false);
        setIsSubmitting(true);
        if(emailAddress?.length > 1){
            if(isEmail(emailAddress)) {
                await axios.post('/api/entry', { email_address: emailAddress });
                setIsSubmitting(false);
                setShowErrorMessage(false);
                setShowModal(true);
                gaEvent({action: "sign up successfull"});     
             } else {
                setShowErrorMessage(true);
                setIsSubmitting(false);
                gaEvent({action: "sign up failed - email address not acceptable"});
             }
        } else {
            setShowErrorMessage(true);
            setIsSubmitting(false); 
        }
    }

    const handleClose = () => {
        setIsSubmitted(false);
    }

    return (
        <section>
            <Typography variant="body1" align="center" gutterBottom={true} marginBottom={2}>Register below to keep up to date with our progress.</Typography>
            <div className={styles.signUpRow}>
                <TextField className={styles.signUpForm} variant="outlined" value={emailAddress} size="small" fullWidth={true} onChange={(e) => setEmailAddress(e.target.value)}/>
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
            {(showErrorMessage) ? <Typography className={styles.errorMessage} variant="body1" align="left" gutterBottom={true} marginBottom={2}>Please use a valid email address.</Typography> : null}
            <Snackbar open={isSubmitted} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Thank you for registering!</Alert>
            </Snackbar>
            <Competition showModal={showModal} setShowModal={setShowModal} emailAddress={emailAddress} setEmailAddress={setEmailAddress} setIsSubmitted={setIsSubmitted}/>
        </section>
    )
}

export default SignUp;