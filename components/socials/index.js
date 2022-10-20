import { IconButton, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './socials.module.css';
import { event as gaEvent } from '../../lib/ga';


const SocialSection = () => {

    const handleClick = (e) => {
        e.preventDefault();
        gaEvent({action: "clicked on instagram"});
        window.open('https://www.instagram.com/strangerspointgin/', '_blank', 'noopener,noreferrer');
    }

    return (
        <section className={styles.sectionInstagram}>
            <Typography variant="body1" align="center" marginRight={1}>Follow us</Typography>
            <ArrowRightAltIcon fontSize='large' />
            <IconButton color='inherit' onClick={handleClick}>
                <InstagramIcon />
            </IconButton>
        </section>
    )
}

export default SocialSection;