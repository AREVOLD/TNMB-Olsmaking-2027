const beers = [
  {
    id: 'zest-in-peace', name: 'ØL 1', style: 'ØLTYPE', abv: '6.6%', temperature: '4–6°C', brewed: '30.08.2026', batch: '',
    soundtrack: 'En lys og lett Kölsch som glir ned like ukomplisert som en klassisk Jokke låt. Hintet av appelsin gir akkurat den lille oppturen du trenger, og minner deg på at livet rusler videre selv når det går litt på tverke. Akkurat som Jokke & Valentinerne fanger dette brygget den perfekte balansen mellom det bittersøte og det genuint oppløftende. Ingen jålete fakter, bare ekte vare.',
    image: 'images/zest-in-peace.jpg', palette: ['#bd653d', '#f3d28b'], symbol: '☼',
    description: 'Zest in Peach er en lys og ren Kölsch brygget med et forsiktig hint av appelsinskall og ferskenpuré. Frukten ligger lavt i miksen og løfter ølet uten å ta over, mens en klassisk tysk malt‑ og humleprofil holder det hele stramt, friskt og lettdrikkelig. Gjæret kjølig med Köln‑gjær for en crisp og ren avslutning. En subtil, leken vri på en tradisjonell Kölsch.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-zest-in-peace/6699680'
  },
  {
    id: 'messe-noir', name: 'ØL 2', style: 'ØLTYPE', abv: '6.6%', temperature: '4–6°C', brewed: '22.08.2026', batch: '',
    image: 'images/messe-noir.jpg', palette: ['#29242a', '#bc4f48'], symbol: '✦',
    soundtrack: 'Et kullsvarte brygg krever musikk som graver dypt i de mørkeste ritualer. Valget faller på hypnotisk og messende black metal i gaten til Rotting Christ. Med tunge, okkulte rytmer og en messende, teatralsk atmosfære, fungerer dette lydsporet som en sonisk messe som utfyller den intense og mystiske karakteren til ølet.',
    description: 'En klassisk, mørk og elegant tysk Schwarzbier brygget for maksimal lettdrikkelighet. På tross av sitt dype, mørke utseende har ølet en overraskende lett, tørr og forfriskende karakter. Den brente malten gir delikate og rene toner av kaffe og mørk sjokolade i bakgrunnen, helt uten den tunge sødmen du finner i en stout. En crisp og velbalansert opplevelse som beviser at mørkt øl kan være lettdrikkelig.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-messe-noir/6844617'
  },
  {
    id: 'jester-haze', name: 'ØL 3', style: 'ØLTYPE', abv: '6.6%', temperature: '6–8°C', brewed: '05.09.2026', batch: '',
    soundtrack: `En juicy NEPA kler den melodiske, drivende energien fra The Jester Race perfekt. De tåkete, tropiske tonene i ølet speiler albumets blanding av melodi og råskap – et møte mellom lys og mørke. Når du løfter glasset, passer det med låter som bygger seg opp i lag, akkurat som ølets fruktige aroma og myke munnfølelse.

Musikken gir ølet en ekstra dimensjon: de atmosfæriske gitarlinjene fremhever den saftige fruktigheten, mens de rytmiske partiene gir en kontrast som gjør hver slurk mer intens. Dette er kombinasjonen som får både øl og album til å skinne – melodisk, energisk og fylt av karakter.`,
    image: 'images/jester-haze.jpg', palette: ['#4b6650', '#e0b857'], symbol: '☀',
    description: 'En lettdrikkelig og hazy New England Pale Ale. En god dose Citra og Mosaic skyller over sansene med tydelige, intense smaker av moden mango, pasjonsfrukt og sitrus. Brygget har en silkemyk munnfølelse og minimal bitterhet, noe som gjør dette til en saftig, fruktig og forfriskende opplevelse i glasset.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-jester-haze/6905577'
  },
  {
    id: 'wheat-train', name: 'ØL 4', style: 'ØLTYPE', abv: '6.6%', temperature: '6–8°C', brewed: '11.07.2026', batch: '',
    image: 'images/wheat-train.jpg', palette: ['#c59545', '#4c3c29'], symbol: '✶',
    soundtrack: 'Her hadde tradisjonell tysk ompamusikk og tyrolerstemning passet perfekt, men det får dere ikke i kveld! I stedet ruller Wheat Train videre med de tyske thrash metal-legendene i Tankard. Med sitt intense tempo og kompromissløse fokus på fest, moro og ren øl-kjærlighet, leverer de det ultimate lydsporet til dette brygget. Ingen tyrolerhatter, bare pur metal!',
    description: 'Klassisk tysk hveteøl med myk munnfølelse, tydelige bananestere og lett krydret fruktighet. En lys og leken weissbier i ren stil.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-wheat-train/6699679'
  },
  {
    id: 'the-apple-freak', name: 'ØL 5', style: 'ØLTYPE', abv: '6.6%', temperature: '4–6°C', brewed: '', batch: '',
    soundtrack: 'Avatar passer perfekt til denne sideren, spesielt den teatralske, mørke freakshow‑energien fra de tidlige albumene. Den rå, sirkus‑aktige metalstilen matcher uttrykket til sideren.',
    image: 'images/the-apple-freak.jpg', palette: ['#465a3a', '#d8a245'], symbol: '✦',
    description: 'En kompromissløs og 100 % naturlig håndverkssider hvor absolutt alt er sanket, presset og bearbeidet for hånd. Sideren er gjæret på tradisjonell norsk Kveik-gjær, noe som gir en unik og karakterfull dybde til den friske frukten. Resultatet er et vilt, ærlig og dønn ekte brygg, stappfullt av saftig eplesmak og rå lidenskap.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-the-apple-freak/6844554'
  },
  {
    id: 'black-arts-and-alchemy', name: 'ØL 6', style: 'ØLTYPE', abv: '6.6%', temperature: '8–12°C', brewed: '12.04.2026', batch: '',
    image: 'images/black-arts-and-alchemy.jpg', palette: ['#352320', '#d1a165'], symbol: '◇',
    soundtrack: "Hellripper leverer den perfekte lyden til dette brygget. En eksplosjon av lynrask og skitten black 'n' roll som gir akkurat det rette, mørke drivet til dette ølet.",
    description: 'En mørk og maltfokusert porter. Forvent toner av brent kakao, karamell og et subtilt hint av toffee, vakkert balansert av milde og jordaktige toner fra humlen. En fløyelsmyk fylde, moderat bitterhet og mørk i fargen. En klassisk, men karaktersterk engelsk porter.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-black-arts-and-alchemy/6522872'
  },
  {
    id: 'forge-of-the-nutons', name: 'ØL 7', style: 'ØLTYPE', abv: '6.6%', temperature: '8–12°C', brewed: '12.08.2026', batch: '',
    image: 'images/forge-of-the-nutons.jpg', palette: ['#343332', '#d19e4b'], symbol: '⚒',
    soundtrack: 'Batushka leverer det perfekte lydsporet til denne episke trippelen. En fengende, men dypt ritualistisk blanding av tunge black metal-riff og messende munker. Musikken drar linjene direkte tilbake til ølstilens klosteropphav, bare med et bekmørkt og monumentalt slør som kler de massive 10 prosentene i glasset.',
    description: 'En mektig og dypgyllen belgisk trippel som klokker inn på solide 10 % alkohol. Brygget er preget av en kompleks og tradisjonsrik belgisk gjærprofil som leverer herlige toner av krydder og fruktige estere. På tross av sin massive styrke har den en elegant, tørr og varmende avslutning med en velbalansert bitterhet.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-forge-of-the-nutons/6918664'
  },
  {
    id: 'prince-of-darkness', name: 'ØL 8', style: 'ØLTYPE', abv: '6.6%', temperature: '12–16°C', brewed: '15.11.2025', batch: '128',
    soundtrack: 'Prince of Darkness kler mørk og dramatisk musikk med stor atmosfære, akkurat den typen uttrykk som definerer Ozzy Osbourne. Mr. Crowley passer utmerket med sin episke, mørke stemning. Roligere og mer følelsesladde Ozzy‑låter gir en perfekt kontrast til ølets tunge og mørke karakter.',
    image: 'images/prince-of-darkness.jpg', palette: ['#211e24', '#d6b66c'], symbol: '✦',
    description: `Dette er ikke bare et øl, det er en gjenoppstandelse. Et brygg til ære for Prince of Darkness, Ozzy Osbourne. En flytende hyllest til heavy metal-gudfaren, smidd i flammene av en intens imperial stout og belgisk åndelig dybde.

Brygget med brent malt, mørk kandissirup og whiskymarinert eik, bærer det vekten av skyggene og et snev av galskap. Gjæret med både kloster- og champagnegjær, og deretter lagret i flere måneder, fremstår det som en mørk besvergelse, kraftfullt og komplekst.

Forvent bølger av sjokolade, brent karamell og espresso, gjennomboret av hjemsøkende estere og et hint av krydder. Eiken tilfører en ritualistisk dybde, mens den høye alkoholprosenten leverer et slag verdig et skrik fra scenekanten.`,
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-prince-of-darkness/6637040'
  }
];

const beerList = document.querySelector('#beer-list');
const homeView = document.querySelector('#home-view');
const detailView = document.querySelector('#detail-view');
const toast = document.querySelector('#toast');
const installButton = document.querySelector('#install-button');
const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let installPrompt;
let toastTimeout;

function labelImage(beer) {
  const [background, accent] = beer.palette;
  const title = beer.name.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const style = beer.style.toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="${background}"/><rect x="13" y="13" width="374" height="474" fill="none" stroke="${accent}" stroke-width="2"/><path d="M30 30h340v440H30z" fill="none" stroke="${accent}" stroke-opacity=".36"/><circle cx="200" cy="202" r="93" fill="none" stroke="${accent}" stroke-width="2"/><circle cx="200" cy="202" r="78" fill="none" stroke="${accent}" stroke-opacity=".48"/><text x="200" y="228" fill="${accent}" font-family="Georgia,serif" font-size="76" text-anchor="middle">${beer.symbol}</text><text x="200" y="64" fill="${accent}" font-family="Arial,sans-serif" font-size="13" font-weight="bold" letter-spacing="4" text-anchor="middle">TNMB · 2026</text><text x="200" y="340" fill="#fffaf0" font-family="Georgia,serif" font-size="${title.length > 13 ? 29 : 36}" text-anchor="middle">${title}</text><path d="M94 361h212" stroke="${accent}"/><text x="200" y="392" fill="${accent}" font-family="Arial,sans-serif" font-size="13" letter-spacing="3" text-anchor="middle">${style}</text><text x="200" y="451" fill="#fffaf0" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" text-anchor="middle">HÅNDBRYGGET · 33 CL</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function labelImageAttributes(beer) {
  if (!beer.image) return `src="${labelImage(beer)}"`;
  return `src="${beer.image}" data-fallback="${labelImage(beer)}"`;
}

function useLabelFallback(event) {
  const image = event.target;
  if (!image.dataset.fallback) return;
  image.src = image.dataset.fallback;
  delete image.dataset.fallback;
}

function renderList() {
  beerList.innerHTML = beers.map((beer) => `
    <button class="beer-card" type="button" data-beer-id="${beer.id}" aria-label="Vis detaljer for ${beer.name}">
      <img class="label-thumb" ${labelImageAttributes(beer)} alt="Etikett for ${beer.name}">
      <span class="beer-copy">
        <span class="beer-name">${beer.name}</span>
        <span class="beer-style">${beer.style}</span>
        <span class="beer-abv">${beer.abv}</span>
      </span>
      <span class="card-arrow" aria-hidden="true">→</span>
    </button>`).join('');
}

function renderDetail(beer) {
  detailView.innerHTML = `
    <button class="back-button" type="button" id="back-button">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h11"/></svg>
      Alle øl
    </button>
    <div class="detail-layout">
      <div class="detail-art-wrap"><img class="detail-art" ${labelImageAttributes(beer)} alt="Etikett for ${beer.name}"></div>
      <article class="detail-copy">
        <h1>${beer.name}</h1>
        <p class="detail-description">Her legges det inn en beskrivelse av ølet.</p>
        <dl class="facts">
          <div class="fact"><dt>Øltype</dt><dd>Øltype</dd></div>
          <div class="fact"><dt>Alkohol</dt><dd>6.6%</dd></div>
          <div class="fact"><dt>Servering</dt><dd>4-6°C</dd></div>
          <div class="fact"><dt>Bryggedato</dt><dd>DD.MM.YYYY</dd></div>
          <div class="fact"><dt>Brygger</dt><dd></dd></div>
          <div class="fact soundtrack-fact"><dt>Soundtrack</dt><dd>Her legges det inn en beskrivelse av musikkvalget og hvorfor akkurat denne musikken parres med ølet.</dd></div>
        </dl>
      </article>
    </div>`;
  homeView.hidden = true;
  detailView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('#back-button').focus({ preventScroll: true });
}

function showHome() {
  detailView.hidden = true;
  homeView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 4200);
}

beerList.addEventListener('click', (event) => {
  const card = event.target.closest('[data-beer-id]');
  if (!card) return;
  const beer = beers.find((item) => item.id === card.dataset.beerId);
  if (beer) renderDetail(beer);
});

beerList.addEventListener('error', useLabelFallback, true);
detailView.addEventListener('error', useLabelFallback, true);

detailView.addEventListener('click', (event) => {
  if (event.target.closest('#back-button')) showHome();
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener('click', async () => {
  if (!installPrompt) {
    showToast('Åpne Del-menyen i Safari og velg «Legg til på Hjem-skjerm».');
    return;
  }
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  installButton.hidden = true;
});

window.addEventListener('appinstalled', () => {
  installButton.hidden = true;
  showToast('Ølsmaking er installert. Skål!');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#home') return;
  showHome();
});

renderList();

if (isIosDevice && !navigator.standalone) installButton.hidden = false;

if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((error) => console.error('Service worker kunne ikke registreres:', error));
  });
}