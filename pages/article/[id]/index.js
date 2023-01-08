//single article page


import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter()
  // const {id} = router.query

  return <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br/>
    <Link href='/'>Go Back</Link>
  </>
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
    
      const articles = await res.json();

      const ids = articles.map(article => article.id)
      
      const paths = ids.map(id => ({params: {id: id.toString()}}))

      return {
        paths: { // we need a params object with ids for each article like so
            params: {id: '1', id: '2'}
        }
      }
}

export default article;
