type GenerateButtonBlockProps = {
  disabled: boolean;
};

export function GenerateButtonBlock({ disabled }: GenerateButtonBlockProps) {
  return (
    <button className="primary-button full" type="submit" disabled={disabled}>
      생성하기
    </button>
  );
}
