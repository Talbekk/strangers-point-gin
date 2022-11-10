import Image from 'next/image';
import { Card } from '@mui/material';
import SocialSection from '../socials';
import Banner from '../banner';
import SignUp from '../signup';
import Contact from '../contact';
import styles from './card.module.css';

const CardContainer = () => {
    return (
        <Card variant="outlined" className={styles.mainContainer}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/strangers-point-gin.appspot.com/o/profile.webp?alt=media&token=dd3d8d6d-af01-4d7d-84f0-09e193b0898d"
          height='175rem'
          width='350rem'
          alt="Strangers Point Gin Logo"
        />
      <Banner/>
      <SignUp/>
        <Contact/>
        <SocialSection/>
      </Card>
    )
}

export default CardContainer;