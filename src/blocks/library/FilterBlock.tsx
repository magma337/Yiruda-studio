type FilterBlockProps = {
  filter: string;
  setFilter: (value: string) => void;
};

export function FilterBlock({ filter, setFilter }: FilterBlockProps) {
  return (
    <div className="filter-block">
      <input
        value={filter}
        placeholder="상품명이나 키워드로 검색"
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
}
