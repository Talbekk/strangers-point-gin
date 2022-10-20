import { useState } from 'react';
import Box from '@mui/material/Box';
import { LoadingButton } from '@material-ui/lab';
import { TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import styles from './competition.module.css';
import Image from 'next/image';
import axios from 'axios';  
import SendIcon from '@mui/icons-material/Send';
import { event as gaEvent } from '../../lib/ga'; 

const Competition = ({showModal, setShowModal, emailAddress, setEmailAddress, setIsSubmitted}) => {

    const [ nameSuggestion, setNameSuggestion ] = useState(null);
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ showErrorMessage, setShowErrorMessage ] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setIsSubmitted(true);
    }   

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setShowErrorMessage(false);
    if(nameSuggestion?.length > 1){
        await axios.post('/api/horsebox', { email_address: emailAddress, horsebox_name: nameSuggestion });
        setIsSubmitting(false);
        setNameSuggestion(null);
        setEmailAddress('');
        setShowModal(false);
        setIsSubmitted(true);
        gaEvent({action: "entered competition"});
    } else {
        setShowErrorMessage(true);
        setIsSubmitting(false); 
    }
  }

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        className={styles.modal}
      >
        <Box className={styles.competitionContainer}>
        <Image
          src="/images/horsebox.webp"
          height={200}
          width={250}
          alt="Strangers Point Gin HorseBox"
        />
          <Typography variant="h6" align='center' marginY={1}>
            We Need Your Help!
          </Typography>
          <Typography align='center' variant="body1">
            Our horsebox needs a name. Enter a suggestion below.  We will announce the chosen name soon!
          </Typography>
          <TextField className={styles.signUpForm} variant="outlined" size="small" fullWidth={true} onChange={(e) => {setNameSuggestion(e.target.value)}}/>
          {(showErrorMessage) ? <Typography className={styles.errorMessage} variant="body1" align="left" gutterBottom={true} marginBottom={2}>Please enter a suggestion.</Typography> : null}
          <LoadingButton
                variant="contained" 
                className={styles.signUpBtn} 
                loading={isSubmitting}
                size="small"
                endIcon={<SendIcon fontSize='large' />}
                loadingPosition="end"
                onClick={handleSubmit}
                >Submit</LoadingButton>
        </Box>
      </Modal>
    </div>
  );
}

export default Competition;