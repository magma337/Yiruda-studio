import { Page } from "../../types";

type HeaderBlockProps = {
  setPage: (page: Page) => void;
};

export function HeaderBlock({ setPage }: HeaderBlockProps) {
  return (
    <header className="site-header">
      <button className="brand ghost-button" onClick={() => setPage("home")} aria-label="이루다 홈">
        <span className="brand-mark">이</span>
        <span>이루다</span>
      </button>
      <nav aria-label="주요 메뉴">
        <button onClick={() => setPage("home")}>소개</button>
        <button onClick={() => setPage("create")}>글쓰기</button>
        <button onClick={() => setPage("library")}>라이브러리</button>
        <button onClick={() => setPage("blog")}>블로그</button>
      </nav>
      <button className="header-button" onClick={() => setPage("create")}>글 만들어보기</button>
    </header>
  );
}
