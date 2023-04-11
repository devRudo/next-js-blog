import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Next JS First App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am enthusiastic javascript developer with 3+ years of extensive
          experience developing web, mobile and desktop application using
          javascript technologies.
        </p>
        <p>
          Here is my portfolio.{' '}
          <a href="rudovijay.com" target="_blank">
            Rudo Vijay
          </a>
          <br /> Go check it out and feel free to contact for any service
          related to web and mobile development.
        </p>
      </section>
    </Layout>
  );
}
