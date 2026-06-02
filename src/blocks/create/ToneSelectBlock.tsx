import { Mood } from "../../types";

const moods: Mood[] = ["따뜻한", "감성적인", "담백한", "고급스러운"];

type ToneSelectBlockProps = {
  mood: Mood;
  setMood: (mood: Mood) => void;
};

export function ToneSelectBlock({ mood, setMood }: ToneSelectBlockProps) {
  return (
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
  );
}
