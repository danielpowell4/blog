import Head from "next/head"
import Image from "next/image"
import Link from "next/link";
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Layout from '../../components/layout'

import postStyles from '../../styles/post.module.css'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

const FIXED_WIDTH = 520;

export default function Post({ postData }) {
  const correctionRatio = FIXED_WIDTH / postData.imageWidth;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={postStyles.article}>
        <div>
          <Image
            src={postData.image}
            alt={`Preview of ${postData.title}`}
            width={FIXED_WIDTH}
            height={Math.floor(correctionRatio * postData.imageHeight)}
            layout="intrinsic"
          />
          {!!postData.codepenLink && <a href={postData.codepenLink} target="_blank" className={postStyles.codepenLink}>View on CodePen ↗</a>}
        </div>
        <div className={postData.content}>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
    </Layout>
  )
}
