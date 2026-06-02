import { HeaderBlock } from "../blocks/shared/HeaderBlock";
import { BlogPreviewBlock } from "../blocks/home/BlogPreviewBlock";
import { ExampleBlock } from "../blocks/home/ExampleBlock";
import { FooterBlock } from "../blocks/home/FooterBlock";
import { HeroBlock } from "../blocks/home/HeroBlock";
import { ProblemBlock } from "../blocks/home/ProblemBlock";
import { SolutionBlock } from "../blocks/home/SolutionBlock";
import { Page } from "../types";

type HomePageProps = {
  setPage: (page: Page) => void;
};

export function HomePage({ setPage }: HomePageProps) {
  return (
    <>
      <HeaderBlock setPage={setPage} />
      <main>
        <HeroBlock setPage={setPage} />
        <ProblemBlock />
        <SolutionBlock />
        <ExampleBlock />
        <BlogPreviewBlock setPage={setPage} />
      </main>
      <FooterBlock />
    </>
  );
}
