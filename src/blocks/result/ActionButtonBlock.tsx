import { Page } from "../../types";

type ActionButtonBlockProps = {
  setPage: (page: Page) => void;
};

export function ActionButtonBlock({ setPage }: ActionButtonBlockProps) {
  return (
    <div className="action-row">
      <button className="primary-button" onClick={() => setPage("create")}>새 글 만들기</button>
      <button className="secondary-button" onClick={() => setPage("library")}>라이브러리 보기</button>
    </div>
  );
}
