import { Page } from "../../types";

type ResultHeaderBlockProps = {
  title: string;
  setPage: (page: Page) => void;
};

export function ResultHeaderBlock({ title, setPage }: ResultHeaderBlockProps) {
  return (
    <section className="page-hero compact">
      <button className="text-button" onClick={() => setPage("library")}>라이브러리로 돌아가기</button>
      <h1>{title}</h1>
      <p>생성된 블로그 글, 판매 문구, 활용 예시, 검색 키워드를 한 번에 확인하세요.</p>
    </section>
  );
}
