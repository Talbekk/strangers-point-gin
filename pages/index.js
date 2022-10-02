import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Stranger's Point Gin</title>
      </Head>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" className='main-container'>
          <Image
            priority
            src="/images/profile.png"
            height={175}
            width={325}
            alt="Strangers Point Gin Logo"
          />
        <Typography variant="body2" align="center" gutterBottom={true} marginTop={5}>Coming to you very soon!</Typography>
          <Typography variant="body2" align="center" gutterBottom={true}>Sign up below to keep up to date with our progress.</Typography>
          <div className="sign-up-row">
            <TextField id="filled-basic" className="sign-up-form" variant="outlined" size="small"/>
            <Button variant="contained" className="sign-up-btn">Sign Up</Button>
          </div>
          <div className="section-instagram">
            <Typography variant="body2" aligh="center">Follow us</Typography>
            <ArrowRightAltIcon/>
            <InstagramIcon/>
          </div>
        </Card>
      </Box>
    </Layout>
  );
}