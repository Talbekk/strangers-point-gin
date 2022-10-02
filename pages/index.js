import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Card } from '@mui/material';
import SocialSection from '../components/socials';
import Banner from '../components/banner';
import SignUp from '../components/signup';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Stranger's Point Gin</title>
      </Head>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" className='main-container'>
          <Image
            src="/images/profile.png"
            height={175}
            width={325}
            alt="Strangers Point Gin Logo"
          />
        <Banner/>
        <SignUp/>
        <SocialSection/>
        </Card>
      </Box>
    </Layout>
  );
}