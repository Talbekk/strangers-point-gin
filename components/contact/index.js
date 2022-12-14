import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AlternateEmail from '@mui/icons-material/AlternateEmail';
import { event as gaEvent } from '../../lib/ga'; 
import styles from './contact.module.css';


const Contact = () => {

    const [isDesktop, setDesktop] = useState((typeof window !== "undefined") ? window.innerWidth > 650 : 700);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 650);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

    const handleClick = (e) => {
        e.preventDefault();
        gaEvent({action: "clicked contact"});
        window.open('mailto:info@strangerspointgin.co.uk', '_blank', 'noopener,noreferrer');
    }

    return (
        <section className={styles.sectionContact}>
            <Typography variant="body1" align="center" marginRight={1}>Contact us</Typography>
            <ArrowRightAltIcon fontSize='large' />
            {(isDesktop) ? <Typography variant="body1" align="center" className={styles.emailAddress} marginRight={1} onClick={handleClick}>info@strangerspointgin.co.uk</Typography>
            :
            <AlternateEmail onClick={handleClick}/>
            }
            
        </section>
    )
}

export default Contact;