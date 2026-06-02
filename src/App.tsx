import { useEffect, useMemo, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { ResultDetailPage } from "./pages/ResultDetailPage";
import { LibraryPage } from "./pages/LibraryPage";
import { BlogPage } from "./pages/BlogPage";
import { loadContents, saveContent } from "./data/storage";
import { GeneratedContent, Page, ProductInput } from "./types";
import { createGeneratedContent } from "./data/contentGenerator";

export function App() {
  const [page, setPage] = useState<Page>("home");
  const [contents, setContents] = useState<GeneratedContent[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const saved = loadContents();
    setContents(saved);
    setSelectedId(saved[0]?.id ?? null);
  }, []);

  const selectedContent = useMemo(
    () => contents.find((item) => item.id === selectedId) ?? contents[0],
    [contents, selectedId]
  );

  function handleGenerate(input: ProductInput) {
    const content = createGeneratedContent(input);
    const next = saveContent(content);
    setContents(next);
    setSelectedId(content.id);
    setPage("result");
  }

  function openResult(id: string) {
    setSelectedId(id);
    setPage("result");
  }

  return (
    <>
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "create" && <CreatePage onGenerate={handleGenerate} latest={selectedContent} setPage={setPage} />}
      {page === "result" && <ResultDetailPage content={selectedContent} setPage={setPage} />}
      {page === "library" && <LibraryPage contents={contents} openResult={openResult} setPage={setPage} />}
      {page === "blog" && <BlogPage setPage={setPage} />}
    </>
  );
}
