import { useMemo, useState } from "react";
import { HeaderBlock } from "../blocks/shared/HeaderBlock";
import { FooterBlock } from "../blocks/home/FooterBlock";
import { ContentCardGridBlock } from "../blocks/library/ContentCardGridBlock";
import { EmptyStateBlock } from "../blocks/library/EmptyStateBlock";
import { FilterBlock } from "../blocks/library/FilterBlock";
import { LibraryHeaderBlock } from "../blocks/library/LibraryHeaderBlock";
import { GeneratedContent, Page } from "../types";

type LibraryPageProps = {
  contents: GeneratedContent[];
  openResult: (id: string) => void;
  setPage: (page: Page) => void;
};

export function LibraryPage({ contents, openResult, setPage }: LibraryPageProps) {
  const [filter, setFilter] = useState("");
  const filteredContents = useMemo(() => {
    const keyword = filter.trim().toLowerCase();
    if (!keyword) return contents;
    return contents.filter((item) =>
      `${item.productName} ${item.description} ${item.seoKeywords}`.toLowerCase().includes(keyword)
    );
  }, [contents, filter]);

  return (
    <>
      <HeaderBlock setPage={setPage} />
      <main>
        <LibraryHeaderBlock count={contents.length} setPage={setPage} />
        <section className="section">
          <FilterBlock filter={filter} setFilter={setFilter} />
          {filteredContents.length > 0 ? (
            <ContentCardGridBlock contents={filteredContents} openResult={openResult} />
          ) : (
            <EmptyStateBlock setPage={setPage} />
          )}
        </section>
      </main>
      <FooterBlock />
    </>
  );
}
