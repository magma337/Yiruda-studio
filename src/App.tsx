import {
  ArrowRight,
  BookOpen,
  ImagePlus,
  Leaf,
  Megaphone,
  Search,
  Sparkles,
  Tags
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { GeneratedCopy, Mood, generateDemoCopy } from "./contentGenerator";

const moods: Mood[] = ["따뜻한", "감성적인", "담백한", "고급스러운"];

const problems = [
  "블로그 글을 어떻게 써야 할지 막막한 분",
  "엣시, 스마트스토어, 인스타 판매 문구가 어려운 분",
  "내 상품이 어떻게 쓰이는지 설명하기 어려운 분",
  "검색 키워드와 태그를 매번 고민하는 분"
];

const solutionCards = [
  { title: "블로그 소개글", icon: BookOpen, text: "작품의 이야기와 쓰임을 자연스러운 글로 정리합니다." },
  { title: "판매 문구", icon: Megaphone, text: "구매자가 바로 이해할 수 있는 짧은 소개 문장을 만듭니다." },
  { title: "활용 예시", icon: Sparkles, text: "상품이 쓰이는 장면을 구체적으로 제안합니다." },
  { title: "SEO 검색 키워드", icon: Search, text: "블로그와 판매 채널에 넣기 좋은 키워드를 정리합니다." }
];

const examples = [
  { title: "한글 캘리그라피 스티커", text: "다이어리, 선물 포장, 엽서 꾸미기에 어울리는 손글씨 감성 스티커입니다." },
  { title: "감성 촬영 소품", text: "상품 사진과 브랜딩 촬영에 따뜻한 분위기를 더하는 작은 소품입니다." },
  { title: "핸드메이드 오브제", text: "공간에 조용한 포인트가 되어주는 작가의 손길이 담긴 오브제입니다." },
  { title: "디지털 PNG 디자인", text: "굿노트, 카드뉴스, 온라인 콘텐츠에 바로 활용할 수 있는 디지털 디자인입니다." }
];

const blogPosts = [
  "1인 셀러가 상품 소개글을 잘 쓰는 방법",
  "핸드메이드 상품을 블로그에서 자연스럽게 소개하는 법",
  "검색되는 상품 글에 꼭 들어가야 할 키워드"
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="이루다 홈">
        <span className="brand-mark">이</span>
        <span>이루다</span>
      </a>
      <nav aria-label="주요 메뉴">
        <a href="#intro">소개</a>
        <a href="#writer">글쓰기</a>
        <a href="#examples">예시</a>
        <a href="#blog">블로그</a>
      </nav>
      <a className="header-button" href="#writer">글 만들어보기</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="eyebrow"><Leaf size={16} /> 작가를 위한 글쓰기 도우미</span>
        <h1>직접 만든 작품이 더 잘 발견되도록</h1>
        <p>
          이루다는 1인 셀러와 핸드메이드 작가를 위한 AI 글쓰기 도우미입니다.
          상품 사진과 짧은 설명만 넣으면 블로그 글, 판매 문구, 활용 예시, 검색
          키워드를 정리해드립니다.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#writer">상품 글 만들어보기 <ArrowRight size={18} /></a>
          <a className="secondary-button" href="#examples">예시 보기</a>
        </div>
      </div>
      <div className="hero-panel" aria-label="이루다 글쓰기 미리보기">
        <div className="note-card main-note">
          <span>상품명</span>
          <strong>한글 캘리그라피 스티커</strong>
          <p>직접 쓴 글씨로 만든 다이어리용 스티커</p>
        </div>
        <div className="note-card small-note">
          <Tags size={22} />
          <strong>키워드 정리</strong>
          <span>#핸드메이드 #다이어리꾸미기</span>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section" id="intro">
      <div className="section-heading">
        <span>문제</span>
        <h2>직접 만든 상품은 있는데, 소개글 쓰기가 어렵다면</h2>
      </div>
      <div className="problem-grid">
        {problems.map((item) => <div className="problem-item" key={item}>{item}</div>)}
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="section soft-band">
      <div className="section-heading">
        <span>해결</span>
        <h2>이루다가 정리해드려요</h2>
      </div>
      <div className="card-grid">
        {solutionCards.map(({ title, icon: Icon, text }) => (
          <article className="feature-card" key={title}>
            <Icon size={26} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WriterSection() {
  const [productName, setProductName] = useState("한글 캘리그라피 스티커");
  const [description, setDescription] = useState("직접 쓴 한글 문장을 스티커로 만든 다이어리 꾸미기 상품");
  const [mood, setMood] = useState<Mood>("따뜻한");
  const [imageName, setImageName] = useState("");
  const [result, setResult] = useState<GeneratedCopy>(() =>
    generateDemoCopy({ productName, description, mood })
  );

  const resultItems = useMemo(
    () => [
      ["네이버 블로그 글 초안", result.blogDraft],
      ["상품 판매 문구", result.salesCopy],
      ["활용 예시", result.usageExamples],
      ["SEO 키워드", result.seoKeywords],
      ["인스타 문구", result.instagramCopy]
    ],
    [result]
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(generateDemoCopy({ productName, description, mood }));
  }

  return (
    <section className="section writer-section" id="writer">
      <div className="section-heading">
        <span>글쓰기 도구</span>
        <h2>상품 사진과 설명을 넣어보세요</h2>
      </div>
      <div className="writer-layout">
        <form className="writer-form" onSubmit={handleSubmit}>
          <label className="upload-box">
            <ImagePlus size={30} />
            <strong>이미지 업로드</strong>
            <span>{imageName || "상품 사진을 선택해 주세요"}</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setImageName(event.target.files?.[0]?.name ?? "")}
            />
          </label>
          <label>
            상품명
            <input value={productName} onChange={(event) => setProductName(event.target.value)} />
          </label>
          <label>
            짧은 상품 설명
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} />
          </label>
          <fieldset>
            <legend>원하는 분위기</legend>
            <div className="mood-group">
              {moods.map((item) => (
                <label className={mood === item ? "mood active" : "mood"} key={item}>
                  <input type="radio" name="mood" value={item} checked={mood === item} onChange={() => setMood(item)} />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
          <button className="primary-button full" type="submit">생성하기</button>
        </form>
        <div className="result-panel" aria-live="polite">
          {resultItems.map(([title, text]) => (
            <article className="result-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExamplesSection() {
  return (
    <section className="section" id="examples">
      <div className="section-heading">
        <span>예시</span>
        <h2>작은 브랜드의 상품을 더 선명하게 소개하세요</h2>
      </div>
      <div className="card-grid">
        {examples.map((item) => (
          <article className="example-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="section soft-band" id="blog">
      <div className="section-heading">
        <span>블로그</span>
        <h2>이루다 블로그</h2>
      </div>
      <div className="blog-grid">
        {blogPosts.map((title) => (
          <article className="blog-card" key={title}>
            <span>가이드</span>
            <h3>{title}</h3>
            <a href="#writer">글쓰기 도구로 시작하기</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <strong>이루다</strong>
      <p>직접 만든 작품을 더 잘 소개하기 위한 AI 글쓰기 도우미</p>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WriterSection />
        <ExamplesSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
