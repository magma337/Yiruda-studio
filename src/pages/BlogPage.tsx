import { BlogCardListBlock } from "../blocks/blog/BlogCardListBlock";
import { BlogHeroBlock } from "../blocks/blog/BlogHeroBlock";
import { FooterBlock } from "../blocks/home/FooterBlock";
import { HeaderBlock } from "../blocks/shared/HeaderBlock";
import { Page } from "../types";

type BlogPageProps = {
  setPage: (page: Page) => void;
};

export function BlogPage({ setPage }: BlogPageProps) {
  return (
    <>
      <HeaderBlock setPage={setPage} />
      <main>
        <BlogHeroBlock setPage={setPage} />
        <BlogCardListBlock setPage={setPage} />
      </main>
      <FooterBlock />
    </>
  );
}
