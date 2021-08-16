import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'



export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Tweet</title>
      </Head>
      <h1>Share This Article To Twitter</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <a class="twitter-share-button"
           href="http://twitter.com/share?text=I'm Sharing on Twitter&url=localhost:3000/
           ">
           Tweet
        </a>
      </h2>
    </Layout>
    
  )
}