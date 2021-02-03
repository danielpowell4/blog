import Head from "next/head"
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/home.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const FIXED_IMAGE_WIDTH = 480;

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.capWidth}`}>
        <h2 className={utilStyles.headingLg}>Hey cool kids!</h2>
        <p>Building stuff is fun. Going fast and steady is great.</p>
        <p>Can't let the bad days get you down!</p>
        <p>I'm currently serving as CTO <a href="https://privateprep.com">@privateprep</a></p>
        <ul className={homeStyles.socialLinks}>
          <li className={homeStyles.socialLinks__item}>
            <a href="https://github.com/danielpowell4">
              <Image src="/images/icons/github.svg" alt="GitHub Logo" width={60} height={60}/>
            </a>
          </li>
          <li className={homeStyles.socialLinks__item}>
            <a href="https://codepen.io/bloom-dan/">
              <Image src="/images/icons/codepen.svg" alt="CodePen Logo" width={60} height={60}/>
            </a>
          </li>
          <li className={homeStyles.socialLinks__item}>
            <a href="mailto:dan@gobloom.io?subject='Hi Dan!'">
              <Image src="/images/icons/mail.svg" alt="Email Icon" width={60} height={60}/>
            </a>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.centerPadding}`}>
        <div className={utilStyles.capWidth}>
          <h2 className={utilStyles.headingLg}>Playground</h2>
          <p>Here you'll find some things I've made over the years along with a quick link to steal the code.</p>
          <p>For better or worse what's become my daily work of specs, SQL queries, and private commits aren't as fun to look at.</p>
        </div>
        <ul className={homeStyles.gallery}>
          {allPostsData.map(({ id, date, title, image, imageWidth, imageHeight }) => {
            const correctionRatio = FIXED_IMAGE_WIDTH / imageWidth;

            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a className={homeStyles.cardLink}>
                    <Image
                      src={image}
                      alt={`Preview of ${title}`}
                      width={FIXED_IMAGE_WIDTH}
                      height={Math.floor(correctionRatio * imageHeight)}
                      objectFit="cover"
                    />
                    <span className={homeStyles.cardLink__title}>{title}</span>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}
