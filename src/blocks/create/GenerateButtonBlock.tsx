type GenerateButtonBlockProps = {
  onGenerate: () => void;
};

export function GenerateButtonBlock({ onGenerate }: GenerateButtonBlockProps) {
  return (
    <button className="primary-button full" type="button" onClick={onGenerate}>
      생성하기
    </button>
  );
}
