import { Page } from "../../types";

type LibraryHeaderBlockProps = {
  count: number;
  setPage: (page: Page) => void;
};

export function LibraryHeaderBlock({ count, setPage }: LibraryHeaderBlockProps) {
  return (
    <section className="page-hero compact">
      <button className="text-button" onClick={() => setPage("home")}>이루다 홈</button>
      <h1>콘텐츠 라이브러리</h1>
      <p>지금까지 생성한 상품 글 {count}개를 카드 형태로 확인할 수 있습니다.</p>
    </section>
  );
}
