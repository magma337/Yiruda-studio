import { Page } from "../../types";

type EmptyStateBlockProps = {
  setPage: (page: Page) => void;
};

export function EmptyStateBlock({ setPage }: EmptyStateBlockProps) {
  return (
    <section className="empty-state">
      <h2>아직 저장된 콘텐츠가 없습니다</h2>
      <p>상품 정보를 입력하면 생성 결과가 자동으로 라이브러리에 저장됩니다.</p>
      <button className="primary-button" onClick={() => setPage("create")}>첫 콘텐츠 만들기</button>
    </section>
  );
}
