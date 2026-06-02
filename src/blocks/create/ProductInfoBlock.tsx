type ProductInfoBlockProps = {
  productName: string;
  description: string;
  setProductName: (value: string) => void;
  setDescription: (value: string) => void;
};

export function ProductInfoBlock({
  productName,
  description,
  setProductName,
  setDescription
}: ProductInfoBlockProps) {
  return (
    <>
      <label>
        상품명
        <input value={productName} onChange={(event) => setProductName(event.target.value)} />
      </label>
      <label>
        짧은 상품 설명
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={5} />
      </label>
    </>
  );
}
