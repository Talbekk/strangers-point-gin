import Head from 'next/head';
import styles from './layout.module.css';

export const siteTitle = "Stranger's Point Gin";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Welcome to the home of Stranger's Point Gin."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
            <main>{children}</main>
    </div>
  );
}