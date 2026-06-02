import { examples } from "../../data/siteData";

export function ExampleBlock() {
  return (
    <section className="section">
      <div className="section-heading">
        <span>예시</span>
        <h2>작은 브랜드의 상품을 더 선명하게 소개하세요</h2>
      </div>
      <div className="card-grid">
        {examples.map((item) => (
          <article className="example-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
