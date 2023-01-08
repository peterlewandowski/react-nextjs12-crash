import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    // https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className={articleStyles.card}
    >
      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
