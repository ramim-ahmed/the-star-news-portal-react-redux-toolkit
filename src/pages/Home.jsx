import NewsItem from "@/components/NewsItem";
import { useFetchNewsQuery } from "@/redux/features/news/newsApi";

export default function Home() {
  const { data, isLoading, isError } = useFetchNewsQuery();
  const news = data?.articles;
  console.log(data);
  //   decide what to render
  let content;
  if (isLoading) {
    content = <h1>loading.....</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>Internal sever Error!!</h1>;
  }
  if (!isLoading && !isError && news.length <= 0) {
    content = <h1>Data Not Found!!!</h1>;
  }
  if (!isLoading && !isError && news.length > 0) {
    content = (
      <div className="grid grid-cols-3 gap-4">
        {news.map((newsItem) => (
          <NewsItem key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
    );
  }
  return <div className="max-w-6xl mx-auto px-3">{content}</div>;
}
