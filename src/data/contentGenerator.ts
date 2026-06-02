import { GeneratedContent, GeneratedCopy, ProductInput } from "../types";

export function generateDemoCopy(input: ProductInput): GeneratedCopy {
  const productName = input.productName.trim() || "직접 만든 작품";
  const description =
    input.description.trim() ||
    "작가의 손길과 취향이 담긴 작은 브랜드 상품입니다.";

  return {
    blogDraft: `${productName}은 ${description} ${input.mood} 분위기로 일상에 자연스럽게 스며드는 작품입니다. 직접 만든 물건이 가진 결, 쓰임, 이야기를 함께 전하면 구매자는 상품의 장면을 더 쉽게 떠올릴 수 있습니다. 작품의 제작 의도와 사용 장면을 함께 소개하면 검색과 구매 전환에 모두 도움이 됩니다.`,
    salesCopy: `${productName}으로 당신의 취향을 더 선명하게 표현해보세요. ${description} 선물용, 촬영용, 나만의 공간을 꾸미는 용도로 잘 어울립니다.`,
    usageExamples:
      "작업 책상 위 포인트 소품으로 두기, 선물 포장에 함께 넣기, 상품 촬영 배경에 활용하기, 일상 기록이나 브랜드 콘텐츠에 곁들이기.",
    seoKeywords: `${productName}, 핸드메이드 상품, 1인 셀러, 감성 소품, 작가 브랜드, 선물 추천, 상품 소개, handmade, small brand`,
    instagramCopy: `${productName}\n${description}\n\n직접 만든 작품이 가진 분위기를 ${input.mood} 문장으로 담았습니다.\n#이루다 #핸드메이드 #1인셀러 #작가브랜드`
  };
}

export function createGeneratedContent(input: ProductInput): GeneratedContent {
  return {
    ...input,
    ...generateDemoCopy(input),
    productName: input.productName.trim() || "직접 만든 작품",
    description:
      input.description.trim() ||
      "작가의 손길과 취향이 담긴 작은 브랜드 상품입니다.",
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
}
