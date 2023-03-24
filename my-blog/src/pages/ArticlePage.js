// It's use (useParams) for getting article id
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";

const ArticlePage = () => {
  //   const params = useParams();
  //   const articleId = params.articleId;

  // < --------------- OR ----------->
  // use Destructing
  //   const param = useParams();
  //   const { articleId } = param;

  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      {/* Here i is the index of the paragraph for uniquely identifying*/}
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
