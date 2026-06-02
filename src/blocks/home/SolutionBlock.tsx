import { solutionCards } from "../../data/siteData";

export function SolutionBlock() {
  return (
    <section className="section soft-band">
      <div className="section-heading">
        <span>해결</span>
        <h2>이루다가 정리해드려요</h2>
      </div>
      <div className="card-grid">
        {solutionCards.map(({ title, icon: Icon, text }) => (
          <article className="feature-card" key={title}>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
