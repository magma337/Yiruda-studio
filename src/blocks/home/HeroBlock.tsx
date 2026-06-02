import { ArrowRight, Leaf, Tags } from "lucide-react";
import { Page } from "../../types";

type HeroBlockProps = {
  setPage: (page: Page) => void;
};

export function HeroBlock({ setPage }: HeroBlockProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow"><Leaf size={16} /> 작가를 위한 글쓰기 도우미</span>
        <h1>직접 만든 작품이 더 잘 발견되도록</h1>
        <p>
          이루다는 1인 셀러와 핸드메이드 작가를 위한 AI 글쓰기 도우미입니다.
          상품 사진과 짧은 설명만 넣으면 블로그 글, 판매 문구, 활용 예시, 검색
          키워드를 정리해드립니다.
        </p>
        <div className="hero-actions">
          <button className="primary-button" onClick={() => setPage("create")}>상품 글 만들어보기 <ArrowRight size={18} /></button>
          <button className="secondary-button" onClick={() => setPage("library")}>예시 보기</button>
        </div>
      </div>
      <div className="hero-panel" aria-label="이루다 글쓰기 미리보기">
        <div className="note-card main-note">
          <span>상품명</span>
          <strong>한글 캘리그라피 스티커</strong>
          <p>직접 쓴 글씨로 만든 다이어리용 스티커</p>
        </div>
        <div className="note-card small-note">
          <Tags size={22} />
          <strong>키워드 정리</strong>
          <span>#핸드메이드 #다이어리꾸미기</span>
        </div>
      </div>
    </section>
  );
}
