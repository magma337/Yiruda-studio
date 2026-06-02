import { Page } from "../../types";

type BlogHeroBlockProps = {
  setPage: (page: Page) => void;
};

export function BlogHeroBlock({ setPage }: BlogHeroBlockProps) {
  return (
    <section className="page-hero compact">
      <button className="text-button" onClick={() => setPage("home")}>이루다 홈</button>
      <h1>네이버 검색용 블로그 글 가이드</h1>
      <p>1인 셀러와 핸드메이드 작가가 검색되는 상품 글을 쓰는 방법을 정리했습니다.</p>
    </section>
  );
}
