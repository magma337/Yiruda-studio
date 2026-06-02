import { GeneratedContent } from "../../types";

type ContentCardGridBlockProps = {
  contents: GeneratedContent[];
  openResult: (id: string) => void;
};

export function ContentCardGridBlock({ contents, openResult }: ContentCardGridBlockProps) {
  return (
    <div className="library-grid">
      {contents.map((item) => (
        <article className="library-card" key={item.id}>
          <div className="library-thumb">
            {item.imageUrl ? <img src={item.imageUrl} alt={item.productName} /> : <span>{item.productName.slice(0, 2)}</span>}
          </div>
          <div>
            <span>{new Date(item.createdAt).toLocaleDateString("ko-KR")}</span>
            <h3>{item.productName}</h3>
            <p>{item.salesCopy}</p>
          </div>
          <button className="secondary-button" onClick={() => openResult(item.id)}>상세 보기</button>
        </article>
      ))}
    </div>
  );
}
