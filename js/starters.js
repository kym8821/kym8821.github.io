// 1~9세대 스타팅 포켓몬 (id = 전국도감 번호)
// cost = 포케로그(PokeRogue) 스타터 코스트
//   출처: pagefaultgames/pokerogue (beta) src/data/balance/species/generation-0X.ts 의 starterCost
const STARTERS = [
  { gen: 1, type: "grass", id: 1,   cost: 3, name: "이상해씨", en: "bulbasaur" },
  { gen: 1, type: "fire",  id: 4,   cost: 3, name: "파이리",   en: "charmander" },
  { gen: 1, type: "water", id: 7,   cost: 3, name: "꼬부기",   en: "squirtle" },
  { gen: 2, type: "grass", id: 152, cost: 3, name: "치코리타", en: "chikorita" },
  { gen: 2, type: "fire",  id: 155, cost: 3, name: "브케인",   en: "cyndaquil" },
  { gen: 2, type: "water", id: 158, cost: 3, name: "리아코",   en: "totodile" },
  { gen: 3, type: "grass", id: 252, cost: 3, name: "나무지기", en: "treecko" },
  { gen: 3, type: "fire",  id: 255, cost: 4, name: "아차모",   en: "torchic" },
  { gen: 3, type: "water", id: 258, cost: 3, name: "물짱이",   en: "mudkip" },
  { gen: 4, type: "grass", id: 387, cost: 3, name: "모부기",   en: "turtwig" },
  { gen: 4, type: "fire",  id: 390, cost: 3, name: "불꽃숭이", en: "chimchar" },
  { gen: 4, type: "water", id: 393, cost: 3, name: "팽도리",   en: "piplup" },
  { gen: 5, type: "grass", id: 495, cost: 3, name: "주리비얀", en: "snivy" },
  { gen: 5, type: "fire",  id: 498, cost: 3, name: "뚜꾸리",   en: "tepig" },
  { gen: 5, type: "water", id: 501, cost: 3, name: "수댕이",   en: "oshawott" },
  { gen: 6, type: "grass", id: 650, cost: 3, name: "도치마론", en: "chespin" },
  { gen: 6, type: "fire",  id: 653, cost: 3, name: "푸호꼬",   en: "fennekin" },
  { gen: 6, type: "water", id: 656, cost: 4, name: "개구마르", en: "froakie" },
  { gen: 7, type: "grass", id: 722, cost: 3, name: "나몰빼미", en: "rowlet" },
  { gen: 7, type: "fire",  id: 725, cost: 3, name: "냐오불",   en: "litten" },
  { gen: 7, type: "water", id: 728, cost: 4, name: "누리공",   en: "popplio" },
  { gen: 8, type: "grass", id: 810, cost: 3, name: "흥나숭",   en: "grookey" },
  { gen: 8, type: "fire",  id: 813, cost: 4, name: "염버니",   en: "scorbunny" },
  { gen: 8, type: "water", id: 816, cost: 3, name: "울머기",   en: "sobble" },
  { gen: 9, type: "grass", id: 906, cost: 4, name: "나오하",   en: "sprigatito" },
  { gen: 9, type: "fire",  id: 909, cost: 4, name: "뜨아거",   en: "fuecoco" },
  { gen: 9, type: "water", id: 912, cost: 4, name: "꾸왁스",   en: "quaxly" },
];

const TYPES = ["grass", "fire", "water"];
const TYPE_LABELS = { grass: "풀", fire: "불꽃", water: "물" };

const imageUrl = (p) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`;

// 기본 이미지 로드 실패 시 대체 이미지
const fallbackImageUrl = (p) => `https://img.pokemondb.net/artwork/large/${p.en}.jpg`;
