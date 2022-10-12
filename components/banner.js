import { Typography } from '@mui/material';
import styles from './banner.module.css';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <Typography variant="body1">
                We are currently launching at Edinburgh Cocktail Week!
            </Typography>
        </section>
    )
}

export default Banner;
