import { blogPosts } from "../../data/siteData";
import { Page } from "../../types";

type BlogPreviewBlockProps = {
  setPage: (page: Page) => void;
};

export function BlogPreviewBlock({ setPage }: BlogPreviewBlockProps) {
  return (
    <section className="section soft-band">
      <div className="section-heading">
        <span>블로그</span>
        <h2>이루다 블로그</h2>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.title}>
            <span>가이드</span>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <button className="text-button" onClick={() => setPage("blog")}>목록 보기</button>
          </article>
        ))}
      </div>
    </section>
  );
}
