import { Typography } from '@mui/material';
import styles from './banner.module.css';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <Typography variant="body1">
                We are working on something really special here!
            </Typography>
        </section>
    )
}

export default Banner;
