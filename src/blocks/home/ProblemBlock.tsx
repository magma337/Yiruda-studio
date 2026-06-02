import { problems } from "../../data/siteData";

export function ProblemBlock() {
  return (
    <section className="section">
      <div className="section-heading">
        <span>문제</span>
        <h2>직접 만든 상품은 있는데, 소개글 쓰기가 어렵다면</h2>
      </div>
      <div className="problem-grid">
        {problems.map((item) => <div className="problem-item" key={item}>{item}</div>)}
      </div>
    </section>
  );
}
