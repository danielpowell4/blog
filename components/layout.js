import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from "next/head"
import Link from 'next/link'

const name = 'Dan Powell'
export const siteTitle = 'Dan Speaks Website'

// pick random emoji as favicon
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
const EMOJI_OF_BUILD = ["🐕", "👨‍🚀", "👨‍💻", "🖼", "🚀"];

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${sample(EMOJI_OF_BUILD)}</text></svg>`} />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.png"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.png"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </>
          )}
        </header>
        <main>{children}</main>
      </div>
    <footer className={`${styles.footer} ${utilStyles.lightText}`}>Made in the 🏔 of Silverton, CO</footer>
    </>
  )
}
