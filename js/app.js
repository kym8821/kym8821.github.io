const MAX_COST = 10;

const drawButton = document.getElementById("draw-button");
const resultList = document.getElementById("result-list");
const resultCaption = document.getElementById("result-caption");

const byType = Object.fromEntries(TYPES.map((t) => [t, STARTERS.filter((p) => p.type === t)]));

// 풀/불꽃/물 한 마리씩, 세대 무관, 코스트 합 MAX_COST 이하인 모든 조합
const VALID_TRIOS = [];
for (const g of byType.grass)
  for (const f of byType.fire)
    for (const w of byType.water)
      if (g.cost + f.cost + w.cost <= MAX_COST) VALID_TRIOS.push([g, f, w]);

// 유효한 조합 중 균등 확률로 하나 선택
function drawTrio() {
  return VALID_TRIOS[Math.floor(Math.random() * VALID_TRIOS.length)];
}

function createCard(p, index) {
  const li = document.createElement("li");
  li.className = `card type-${p.type}`;
  li.style.animationDelay = `${index * 80}ms`;

  const img = document.createElement("img");
  img.src = imageUrl(p);
  img.alt = p.name;
  img.addEventListener("error", () => {
    if (img.src !== fallbackImageUrl(p)) img.src = fallbackImageUrl(p);
  }, { once: true });

  li.innerHTML = `
    <span class="card-no">No.${String(p.id).padStart(4, "0")}</span>
    <span class="card-cost">코스트 ${p.cost}</span>
    <div class="card-img"></div>
    <strong class="card-name">${p.name}</strong>
    <div class="card-meta">
      <span class="badge type-${p.type}">${TYPE_LABELS[p.type]}</span>
      <span class="badge gen">${p.gen}세대</span>
    </div>`;
  li.querySelector(".card-img").appendChild(img);
  return li;
}

drawButton.addEventListener("click", () => {
  const trio = drawTrio();
  const total = trio.reduce((sum, p) => sum + p.cost, 0);
  resultCaption.innerHTML = `총 코스트 <strong>${total}</strong> / ${MAX_COST}`;
  resultList.replaceChildren(...trio.map(createCard));
});
