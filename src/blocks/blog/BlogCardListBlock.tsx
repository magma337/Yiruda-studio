import { blogPosts } from "../../data/siteData";
import { Page } from "../../types";

type BlogCardListBlockProps = {
  setPage: (page: Page) => void;
};

export function BlogCardListBlock({ setPage }: BlogCardListBlockProps) {
  return (
    <section className="section">
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article className="blog-list-card" key={post.title}>
            <span>네이버 블로그 가이드</span>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <button className="secondary-button" onClick={() => setPage("create")}>내 상품에 적용하기</button>
          </article>
        ))}
      </div>
    </section>
  );
}
