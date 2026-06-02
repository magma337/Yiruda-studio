import { ImagePlus } from "lucide-react";

type ImageUploadBlockProps = {
  imageName: string;
  imageUrl?: string;
  onImageChange: (file?: File) => void;
};

export function ImageUploadBlock({ imageName, imageUrl, onImageChange }: ImageUploadBlockProps) {
  return (
    <label className="upload-box">
      {imageUrl ? <img src={imageUrl} alt="선택한 상품" /> : <ImagePlus size={30} />}
      <strong>대표 이미지 업로드</strong>
      <span>{imageName || "상품 사진을 선택해 주세요"}</span>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => onImageChange(event.target.files?.[0])}
      />
    </label>
  );
}
