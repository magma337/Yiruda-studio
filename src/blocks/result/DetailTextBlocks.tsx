type DetailBlockProps = {
  title: string;
  body: string;
};

function DetailBlock({ title, body }: DetailBlockProps) {
  return (
    <article className="detail-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

export function BlogPostBlock({ body }: { body: string }) {
  return <DetailBlock title="네이버 블로그 글" body={body} />;
}

export function SalesCopyBlock({ body }: { body: string }) {
  return <DetailBlock title="상품 판매 문구" body={body} />;
}

export function UseCaseBlock({ body }: { body: string }) {
  return <DetailBlock title="활용 예시" body={body} />;
}

export function KeywordBlock({ body }: { body: string }) {
  return <DetailBlock title="SEO 키워드" body={body} />;
}

export function InstagramCaptionBlock({ body }: { body: string }) {
  return <DetailBlock title="인스타 문구" body={body} />;
}
