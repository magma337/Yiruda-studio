import { HeaderBlock } from "../blocks/shared/HeaderBlock";
import { FooterBlock } from "../blocks/home/FooterBlock";
import { ActionButtonBlock } from "../blocks/result/ActionButtonBlock";
import {
  BlogPostBlock,
  InstagramCaptionBlock,
  KeywordBlock,
  SalesCopyBlock,
  UseCaseBlock
} from "../blocks/result/DetailTextBlocks";
import { MainImageBlock } from "../blocks/result/MainImageBlock";
import { ResultHeaderBlock } from "../blocks/result/ResultHeaderBlock";
import { GeneratedContent, Page } from "../types";

type ResultDetailPageProps = {
  content?: GeneratedContent;
  setPage: (page: Page) => void;
};

export function ResultDetailPage({ content, setPage }: ResultDetailPageProps) {
  if (!content) {
    return (
      <>
        <HeaderBlock setPage={setPage} />
        <main className="section empty-state">
          <h1>아직 생성된 글이 없습니다</h1>
          <button className="primary-button" onClick={() => setPage("create")}>첫 글 만들기</button>
        </main>
      </>
    );
  }

  return (
    <>
      <HeaderBlock setPage={setPage} />
      <main>
        <ResultHeaderBlock title={content.productName} setPage={setPage} />
        <section className="section result-detail-grid">
          <MainImageBlock content={content} />
          <div className="detail-stack">
            <BlogPostBlock body={content.blogDraft} />
            <SalesCopyBlock body={content.salesCopy} />
            <UseCaseBlock body={content.usageExamples} />
            <KeywordBlock body={content.seoKeywords} />
            <InstagramCaptionBlock body={content.instagramCopy} />
            <ActionButtonBlock setPage={setPage} />
          </div>
        </section>
      </main>
      <FooterBlock />
    </>
  );
}
