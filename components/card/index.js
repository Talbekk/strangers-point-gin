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
          src="/images/profile.webp"
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