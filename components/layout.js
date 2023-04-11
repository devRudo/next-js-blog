import Head from 'next/head';
import styles from './layout.module.css';
import Image from 'next/image';
import utilStyles from './../styles/utils.module.css';
import Link from 'next/link';

const name = 'Vijay Kumar Mishra';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home, blogPost }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to make web pages in next js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={'/images/profile_v2.png'}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href={'/'}>
              <Image
                priority
                src={'/images/profile_v2.png'}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href={'/'} className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>

      <footer className={styles.footer}>
        {!home ? (
          blogPost ? (
            <Link href={'/posts'}>Back to posts</Link>
          ) : (
            <Link href={'/'}>Back to home</Link>
          )
        ) : null}
        {home && <Link href={'/posts'}>All Posts</Link>}
      </footer>
    </div>
  );
}
