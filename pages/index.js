import Layout from '../components/layout';
import Head from 'next/head';
import { Box } from '@mui/material';
import CardContainer from '../components/card';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Stranger's Point Gin</title>
      </Head>
      <Box sx={{ minWidth: 275 }}>
      <CardContainer/>
      </Box>
    </Layout>
  );
}