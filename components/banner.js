import { Typography } from '@mui/material';
import styles from './banner.module.css';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <Typography variant="h6">
                Coming Soon...
            </Typography>
        </section>
    )
}

export default Banner;
