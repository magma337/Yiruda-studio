import { useState } from "react";
import { HeaderBlock } from "../blocks/shared/HeaderBlock";
import { CreateHeaderBlock } from "../blocks/create/CreateHeaderBlock";
import { GenerateButtonBlock } from "../blocks/create/GenerateButtonBlock";
import { ImageUploadBlock } from "../blocks/create/ImageUploadBlock";
import { ProductInfoBlock } from "../blocks/create/ProductInfoBlock";
import { ResultPreviewBlock } from "../blocks/create/ResultPreviewBlock";
import { ToneSelectBlock } from "../blocks/create/ToneSelectBlock";
import { FooterBlock } from "../blocks/home/FooterBlock";
import { GeneratedContent, Mood, Page, ProductInput } from "../types";

type CreatePageProps = {
  latest?: GeneratedContent;
  setPage: (page: Page) => void;
  onGenerate: (input: ProductInput) => GeneratedContent;
};

export function CreatePage({ latest, setPage, onGenerate }: CreatePageProps) {
  const [productName, setProductName] = useState("한글 캘리그라피 스티커");
  const [description, setDescription] = useState("직접 쓴 한글 문장을 스티커로 만든 다이어리 꾸미기 상품");
  const [mood, setMood] = useState<Mood>("따뜻한");
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState<string>();
  const [preview, setPreview] = useState<GeneratedContent | undefined>(latest);
  const [errorMessage, setErrorMessage] = useState("");

  function handleImageChange(file?: File) {
    setImageName(file?.name ?? "");
    if (!file) {
      setImageUrl(undefined);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImageUrl(typeof reader.result === "string" ? reader.result : undefined);
    reader.readAsDataURL(file);
  }

  function handleGenerateClick() {
    if (!productName.trim() || !description.trim()) {
      setErrorMessage("상품명과 설명을 입력해주세요.");
      return;
    }

    setErrorMessage("");
    const generated = onGenerate({ productName, description, mood, imageName, imageUrl });
    setPreview(generated);
  }

  return (
    <>
      <HeaderBlock setPage={setPage} />
      <main>
        <CreateHeaderBlock setPage={setPage} />
        <section className="section create-grid">
          <form className="writer-form">
            <ImageUploadBlock imageName={imageName} imageUrl={imageUrl} onImageChange={handleImageChange} />
            <ProductInfoBlock
              productName={productName}
              description={description}
              setProductName={setProductName}
              setDescription={setDescription}
            />
            <ToneSelectBlock mood={mood} setMood={setMood} />
            <GenerateButtonBlock onGenerate={handleGenerateClick} />
            {errorMessage && <p className="form-error">{errorMessage}</p>}
          </form>
          <ResultPreviewBlock latest={preview} setPage={setPage} />
        </section>
      </main>
      <FooterBlock />
    </>
  );
}
