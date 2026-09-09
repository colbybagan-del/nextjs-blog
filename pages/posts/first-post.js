import styles from '../../styles/FirstPost.module.css'; 
import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
 
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div className={styles.post}>
    <h1 className={styles.title}>First Post</h1>
    <h2>
     <Link href="/" className={styles.backLink}>← Back to home</Link>
    </h2>
    </div>

    </Layout>
  );
}