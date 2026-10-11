const beers = [
  {
    id: 'zest-in-peace', name: 'ØL 1', style: '[ØLTYPE]', abv: '[ABV]', temperature: '4–6°C', brewed: 'DD.MM.20YY', batch: '', brewer: '[BRYGGER]',
    soundtrack: '[Her skal man skrive hvilken musikk som passer til ølen.]',
    image: 'images/beer.png', palette: ['#bd653d', '#f3d28b'], symbol: '☼',
    description: '[Her skal beskrivelse av ølen inn.]',
    untappd: 'https://untappd.com/TNMB'
  },
  {
    id: 'messe-noir', name: 'ØL 2', style: '[ØLTYPE]', abv: '[ABV]', temperature: '4–6°C', brewed: 'DD.MM.20YY', batch: '', brewer: '[BRYGGER]',
    image: 'images/beer.png', palette: ['#29242a', '#bc4f48'], symbol: '✦',
    soundtrack: '[Her skal man skrive hvilken musikk som passer til ølen.]',
    description: '[Her skal beskrivelse av ølen inn.]',
    untappd: 'https://untappd.com/TNMB'
  },
  {
    id: 'jester-haze', name: 'ØL 3', style: '[ØLTYPE]', abv: '[ABV]', temperature: '4–6°C', brewed: 'DD.MM.20YY', batch: '', brewer: '[BRYGGER]',
    soundtrack: '[Her skal man skrive hvilken musikk som passer til ølen.]',
    image: 'images/beer.png', palette: ['#4b6650', '#e0b857'], symbol: '☀',
    description: '[Her skal beskrivelse av ølen inn.]',
    untappd: 'https://untappd.com/TNMB'
  },
  {
    id: 'mango-massacre', name: 'Mango Massacre', style: 'Sour Slush / Fruited Sour', abv: '5.4%', temperature: '-4 til -2°C', brewed: '', batch: '', brewer: 'Are Volden',
    image: 'images/mango-massacre.jpg', palette: ['#c59545', '#4c3c29'], symbol: '✶',
    soundtrack: 'Insanity Alert leverer det eneste rette lydsporet til dette frosne kaoset. En intens, lynrask og fullstendig gal blanding av crossover thrash og pur energi som matcher den syrlige mango-eksplosjonen i glasset.',
    description: 'Født i syre. Gjenoppstått i kaos. En tropisk vederstyggelighet som river gjennom sansene og etterlater seg ingenting annet enn frossen masse i sitt kjølvann.\nDette er første spor i TNMB Slush Series, et øl som er kompromissløst tenkt, brygget og modnet for slushmaskinen hele veien. Vørteren er syrnet hardt og kaldt for en knallhard, crisp profil, før den er stappet full med hele 4,25 kilo ren mangopuré. Resultatet er en ekstremt saftig, syrlig og iskald tropisk eksplosjon som slushes rett før servering.',
    untappd: 'https://untappd.com/b/tnmb-true-norwegian-metal-brewers-mango-massacre/6781994'
  },
  {
    id: 'the-apple-freak', name: 'ØL 5', style: '[ØLTYPE]', abv: '[ABV]', temperature: '4–6°C', brewed: 'DD.MM.20YY', batch: '', brewer: '[BRYGGER]',
    soundtrack: '[Her skal man skrive hvilken musikk som passer til ølen.]',
    image: 'images/beer.png', palette: ['#465a3a', '#d8a245'], symbol: '✦',
    description: '[Her skal beskrivelse av ølen inn.]',
    untappd: 'https://untappd.com/TNMB'
  },
  {
    id: 'black-arts-and-alchemy', name: 'ØL 6', style: '[ØLTYPE]', abv: '[ABV]', temperature: '4–6°C', brewed: 'DD.MM.20YY', batch: '', brewer: '[BRYGGER]',
    image: 'images/beer.png', palette: ['#352320', '#d1a165'], symbol: '◇',
    soundtrack: '[Her skal man skrive hvilken musikk som passer til ølen.]',
    description: '[Her skal beskrivelse av ølen inn.]',
    untappd: 'https://untappd.com/TNMB'
  },
  {
    id: 'forge-of-the-nutons', name: 'ØL 7', style: '[ØLTYPE]', abv: '[ABV]', temperature: '4–6°C', brewed: 'DD.MM.20YY', batch: '', brewer: '[BRYGGER]',
    image: 'images/beer.png', palette: ['#343332', '#d19e4b'], symbol: '⚒',
    soundtrack: '[Her skal man skrive hvilken musikk som passer til ølen.]',
    description: '[Her skal beskrivelse av ølen inn.]',
    untappd: 'https://untappd.com/TNMB'
  },
  {
    id: 'prince-of-darkness', name: 'ØL 8', style: '[ØLTYPE]', abv: '[ABV]', temperature: '4–6°C', brewed: 'DD.MM.20YY', batch: '128', brewer: '[BRYGGER]',
    soundtrack: '[Her skal man skrive hvilken musikk som passer til ølen.]',
    image: 'images/beer.png', palette: ['#211e24', '#d6b66c'], symbol: '✦',
    description: '[Her skal beskrivelse av ølen inn.]',
    untappd: 'https://untappd.com/TNMB'
  }
];

const beerList = document.querySelector('#beer-list');
const buckList = document.querySelector('#buck-list');
const homeView = document.querySelector('#home-view');
const detailView = document.querySelector('#detail-view');
const toast = document.querySelector('#toast');
const installButton = document.querySelector('#install-button');
const countdownNumber = document.querySelector('#countdown-number');
const countdownSuffix = document.querySelector('#countdown-suffix');
const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let installPrompt;
let toastTimeout;

function updateCountdown() {
  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Oslo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).formatToParts(new Date());
  const todayParts = Object.fromEntries(dateParts.map(({ type, value }) => [type, value]));
  const today = Date.UTC(Number(todayParts.year), Number(todayParts.month) - 1, Number(todayParts.day));
  const eventDate = Date.UTC(2027, 9, 16);
  const daysRemaining = Math.ceil((eventDate - today) / 86400000);

  if (daysRemaining > 0) {
    countdownNumber.textContent = String(daysRemaining);
    countdownSuffix.textContent = `${daysRemaining === 1 ? 'dag' : 'dager'} igjen til TNMB Ølsmaking 2027!`;
  } else if (daysRemaining === 0) {
    countdownNumber.textContent = 'I dag';
    countdownSuffix.textContent = 'er det ølsmaking!';
  } else {
    countdownNumber.textContent = 'Ølsmakingen er gjennomført';
    countdownSuffix.textContent = '';
  }
}

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

function renderBuckList() {
  buckList.innerHTML = Array.from({ length: 10 }, (_, index) => `
    <article class="beer-card buck-beer-card">
      <img class="label-thumb" src="images/beer.png" alt="Øletikett">
      <span class="beer-copy">
        <span class="beer-name">ØL ${index + 1}</span>
      </span>
    </article>`).join('');
}

function renderDetail(beer) {
  const untappdLink = beer.untappd ? `
    <a class="untappd-link" href="${beer.untappd}" target="_blank" rel="noreferrer noopener">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
      Untappd
    </a>
  ` : '';

  detailView.innerHTML = `
    <button class="back-button" type="button" id="back-button">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h11"/></svg>
      Alle øl
    </button>
    <div class="detail-layout">
      <div class="detail-art-wrap"><img class="detail-art" ${labelImageAttributes(beer)} alt="Etikett for ${beer.name}"></div>
      <article class="detail-copy">
        <h1>${beer.name}</h1>
        <p class="detail-description">${beer.description}</p>
        <dl class="facts">
          <div class="fact"><dt>Øltype</dt><dd>${beer.style}</dd></div>
          <div class="fact"><dt>Alkohol</dt><dd>${beer.abv}</dd></div>
          <div class="fact"><dt>Servering</dt><dd>${beer.temperature}</dd></div>
          <div class="fact"><dt>Bryggedato</dt><dd>${beer.brewed}</dd></div>
          <div class="fact"><dt>Brygger</dt><dd>${beer.brewer || ''}</dd></div>
          <div class="fact soundtrack-fact"><dt>Soundtrack</dt><dd>${beer.soundtrack}</dd></div>
        </dl>
        ${untappdLink}
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
renderBuckList();
updateCountdown();
window.setInterval(updateCountdown, 60 * 60 * 1000);

if (isIosDevice && !navigator.standalone) installButton.hidden = false;

if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js');

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }

      await registration.update();
      window.setInterval(() => {
        registration.update().catch(() => {});
      }, 60 * 60 * 1000);
    } catch (error) {
      console.error('Service worker kunne ikke registreres:', error);
    }
  });
}