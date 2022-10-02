import { IconButton, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AlternateEmail from '@mui/icons-material/AlternateEmail';
import styles from './contact.module.css';


const Contact = () => {

    const handleClick = (e) => {
        e.preventDefault();
        window.open('mailto:info@strangerspointgin.co.uk', '_blank', 'noopener,noreferrer');
    }

    return (
        <section className={styles.sectionContact}>
            <Typography variant="body1" align="center" marginRight={1}>Contact us</Typography>
            <ArrowRightAltIcon fontSize='large' />
            <Typography variant="body1" align="center" className={styles.emailAddress} marginRight={1} onClick={handleClick}>info@strangerspointgin.co.uk</Typography>
        </section>
    )
}

export default Contact;