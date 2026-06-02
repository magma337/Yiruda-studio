import { GeneratedContent, Page } from "../../types";

type ResultPreviewBlockProps = {
  latest?: GeneratedContent;
  setPage: (page: Page) => void;
};

export function ResultPreviewBlock({ latest, setPage }: ResultPreviewBlockProps) {
  if (!latest) {
    return (
      <aside className="result-preview empty">
        <h2>생성 결과 미리보기</h2>
        <p>상품 정보를 입력하고 생성하면 블로그 글, 판매 문구, 키워드가 이곳에 표시됩니다.</p>
      </aside>
    );
  }

  return (
    <aside className="result-preview">
      <h2>생성 결과 미리보기</h2>
      <article className="result-card">
        <h3>네이버 블로그 글 초안</h3>
        <p>{latest.blogDraft}</p>
      </article>
      <article className="result-card">
        <h3>상품 판매 문구</h3>
        <p>{latest.salesCopy}</p>
      </article>
      <article className="result-card">
        <h3>활용 예시</h3>
        <p>{latest.usageExamples}</p>
      </article>
      <article className="result-card">
        <h3>SEO 키워드</h3>
        <p>{latest.seoKeywords}</p>
      </article>
      <article className="result-card">
        <h3>인스타 문구</h3>
        <p>{latest.instagramCopy}</p>
      </article>
      <button className="secondary-button" onClick={() => setPage("result")}>상세 결과 보기</button>
    </aside>
  );
}
