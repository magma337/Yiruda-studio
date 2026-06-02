export type Page = "home" | "create" | "result" | "library" | "blog";

export type Mood = "따뜻한" | "감성적인" | "담백한" | "고급스러운";

export type ProductInput = {
  productName: string;
  description: string;
  mood: Mood;
  imageName?: string;
  imageUrl?: string;
};

export type GeneratedCopy = {
  blogDraft: string;
  salesCopy: string;
  usageExamples: string;
  seoKeywords: string;
  instagramCopy: string;
};

export type GeneratedContent = ProductInput &
  GeneratedCopy & {
    id: string;
    createdAt: string;
  };
