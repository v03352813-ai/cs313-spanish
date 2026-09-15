const fs = require('fs');
const path = require('path');

const batch1 = require('./data_batch1.cjs');
const batch2 = require('./data_batch2.cjs');
const batch3 = require('./data_batch3.cjs');

const ALL_30_FILMS = [...batch1, ...batch2, ...batch3];

console.log(`Loaded ${ALL_30_FILMS.length} master Spanish cinema scenes.`);

const OUTPUT_PATH = path.resolve(__dirname, '..', 'src', 'data', 'cinemaData.ts');

const helperCode = `
/**
 * 根据自然周自动轮换置顶本周精选特辑（周五为更新节点）
 * 确保即使没有重新编译，系统在每周五也会自动将本周当期主打影片呈现在置顶播放器舞台
 */
export function getWeeklyFeaturedMovie(movies: CinemaScene[]): CinemaScene {
  if (!movies || movies.length === 0) return {} as CinemaScene;
  const now = new Date();
  // 按照每周五对齐（以 2026-01-02 周五为基准周期锚点）
  const anchorTime = new Date('2026-01-02T00:00:00Z').getTime();
  const weekDiff = Math.max(0, Math.floor((now.getTime() - anchorTime) / (7 * 24 * 60 * 60 * 1000)));
  const index = weekDiff % movies.length;
  return movies[index] || movies[0];
}

export function getWeeklyFeaturedMovieId(movies: CinemaScene[]): string {
  const featured = getWeeklyFeaturedMovie(movies);
  return featured?.id || movies[0]?.id || 'film_papel';
}
`;

const tsContent = `/**
 * 西班牙与拉美经典影视原声名场面精听切片库 (Cinéma y Series en Español)
 * 涵盖 30 部西语影史与拉美传世经典、Netflix全球冠军神剧名场面原声对白与名师考点精析
 * 每周五持续扩充自动同步更新
 */

export interface CinemaScene {
  id: string;
  movieTitle: string;
  spanishTitle: string;
  year: number;
  director: string;
  genre: string; // 治愈温情 | 传奇罪案 | 悬疑烧脑 | 青春生活 | 拉美魔幻 | 人生哲理
  levelTag: string; // A1-A2入门 | B1进阶 | B2高阶 | 考研高频
  coverImage: string;
  tag: string;
  audioDuration: string;
  sceneSummary: string;
  isFreePreview?: boolean;
  dialogues: {
    character: string;
    es: string;
    zh: string;
    keyPoints?: string;
  }[];
  vocabulary: {
    word: string;
    meaning: string;
  }[];
}

export const SPANISH_CINEMA_LIST: CinemaScene[] = ${JSON.stringify(ALL_30_FILMS, null, 2)};

${helperCode}

// 向下兼容别名
export type CinemaItem = CinemaScene;
export const CINEMA_PLAYLIST = SPANISH_CINEMA_LIST;
`;

fs.writeFileSync(OUTPUT_PATH, tsContent, 'utf-8');
console.log(`SUCCESS_30_SPANISH_FILMS_GENERATED: Total ${ALL_30_FILMS.length} films written to ${OUTPUT_PATH}`);
