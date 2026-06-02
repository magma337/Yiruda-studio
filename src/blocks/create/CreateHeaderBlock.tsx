import { Page } from "../../types";

type CreateHeaderBlockProps = {
  setPage: (page: Page) => void;
};

export function CreateHeaderBlock({ setPage }: CreateHeaderBlockProps) {
  return (
    <section className="page-hero compact">
      <button className="text-button" onClick={() => setPage("home")}>이루다 홈</button>
      <h1>상품 사진과 설명을 넣어보세요</h1>
      <p>실제 AI 연결 전에도 상품명과 설명을 바탕으로 글 생성 흐름을 확인할 수 있습니다.</p>
    </section>
  );
}
