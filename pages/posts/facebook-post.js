import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'



export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0" nonce="rqDEdL9S"></script>
      </Head>
      <h1>Share This Article To Facebook</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <div class="fb-share-button" data-href="http://192.168.100.10:3000/posts/first-post" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F192.168.100.10%3A3000%2Fposts%2Ffirst-post&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share To Facebook</a></div>
      </h2>
    </Layout>
    
  )
}