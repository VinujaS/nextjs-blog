import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id) //id because the dynamic key in file name is [id];
  return {
    props: {
      postData,
    },
  };
}

//get all possible ids 
export async function getStaticPaths() {
  const paths = getAllPostIds(); // this paths has params in it
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}) {
    return (
            <Layout>
              <Head>
                <title>{postData.title}</title>
              </Head>
              <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                  <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </article>
            </Layout>
      );
}