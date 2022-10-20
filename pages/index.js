import Layout from '../components/layout';
import Head from 'next/head';
import CookieBar from '../components/cookieBar';
import { Box } from '@mui/material';
import CardContainer from '../components/card';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

export default function Home() {
  return (
    <CacheProvider value={cache}>
      <Layout>
        <Head>
          <title>Stranger's Point Gin</title>
        </Head>
        <Box sx={{ minWidth: 275 }}>
        <CardContainer/>
        </Box>
        <CookieBar/>
      </Layout>
    </CacheProvider>
  );
}