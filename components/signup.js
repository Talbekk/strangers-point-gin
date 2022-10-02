import { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import styles from './signup.module.css';
import { LoadingButton } from '@material-ui/lab';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SignUp = () => {

    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);

        setTimeout(() => {
            console.log('Hello, World!');
            setIsSubmitting(false);
          }, 3000);

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
        </section>
    )
}

export default SignUp;