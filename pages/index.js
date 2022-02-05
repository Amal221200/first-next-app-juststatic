import Head from 'next/head';
import ArticleList from '../components/ArticleList';



export default function Home({ articles }) {


  
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        </Head>
        <h1 style={{'textAlign': 'center'}}>Hello There</h1>
        <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
