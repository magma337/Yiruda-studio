import { GeneratedContent } from "../../types";

type MainImageBlockProps = {
  content: GeneratedContent;
};

export function MainImageBlock({ content }: MainImageBlockProps) {
  return (
    <section className="detail-image">
      {content.imageUrl ? (
        <img src={content.imageUrl} alt={content.productName} />
      ) : (
        <div className="image-placeholder">
          <strong>{content.productName}</strong>
          <span>대표 이미지가 없는 데모 결과입니다.</span>
        </div>
      )}
    </section>
  );
}
