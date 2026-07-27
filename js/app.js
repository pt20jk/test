// Core Interactive Logic for Visit Iksan Global Portal

let currentLang = 'en';
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'rating';
let myTripPlan = JSON.parse(localStorage.getItem('iksan_my_trip') || '[]');
let currentAudioId = 'mireuksa';
let isAudioPlaying = false;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  setupEventListeners();
  updateLanguageUI();
  renderAttractions();
  renderItineraries();
  renderMyTripBoard();
  renderAudioPlayer();
  renderPhrases();
  renderHotlines();
  convertCurrency();
}

function setupEventListeners() {
  // Language Switcher
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      updateLanguageUI();
      renderAttractions();
      renderItineraries();
      renderMyTripBoard();
      renderAudioPlayer();
      renderPhrases();
    });
  }

  // Hero Search Input & Button
  const heroSearchInput = document.getElementById('heroSearchInput');
  const btnHeroSearch = document.getElementById('btnHeroSearch');
  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderAttractions();
    });
  }
  if (btnHeroSearch) {
    btnHeroSearch.addEventListener('click', () => {
      document.getElementById('attractions').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Category Pills
  const categoryPills = document.querySelectorAll('.pill-btn');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      renderAttractions();
    });
  });

  // Sort Selector
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderAttractions();
    });
  }

  // Toolkit Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // Currency Converter Form
  const btnConvert = document.getElementById('btnConvertCurrency');
  if (btnConvert) {
    btnConvert.addEventListener('click', convertCurrency);
  }

  // Floating Chatbot Toggle
  const fab = document.getElementById('chatbotFab');
  const chatWin = document.getElementById('chatbotWindow');
  const btnCloseChat = document.getElementById('btnCloseChat');
  const btnSendMsg = document.getElementById('btnSendMsg');
  const chatInput = document.getElementById('chatInput');

  if (fab) {
    fab.addEventListener('click', () => {
      chatWin.classList.toggle('open');
    });
  }
  if (btnCloseChat) {
    btnCloseChat.addEventListener('click', () => {
      chatWin.classList.remove('open');
    });
  }
  if (btnSendMsg && chatInput) {
    btnSendMsg.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendChatMessage();
    });
  }
}

// 1. Language Update Function
function updateLanguageUI() {
  const dict = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.en;

  // Query all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Query placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

// 2. Render Attractions Cards
function renderAttractions() {
  const container = document.getElementById('attractionsGrid');
  if (!container) return;

  const dict = UI_TRANSLATIONS[currentLang];

  // Filter items
  let items = IKSAN_DATA.attractions.filter(item => {
    const matchCategory = (currentCategory === 'all') || (item.category === currentCategory);
    const titleText = (item.title[currentLang] || item.title.en).toLowerCase();
    const descText = (item.shortDesc[currentLang] || item.shortDesc.en).toLowerCase();
    const tagText = item.tags.join(' ').toLowerCase();
    const matchSearch = !searchQuery || titleText.includes(searchQuery) || descText.includes(searchQuery) || tagText.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  // Sort items
  if (currentSort === 'rating') {
    items.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === 'reviews') {
    items.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  if (items.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 4rem; color: var(--text-muted);">
      <p style="font-size: 1.2rem;">No matching attractions found.</p>
    </div>`;
    return;
  }

  container.innerHTML = items.map(item => {
    const isAdded = myTripPlan.includes(item.id);
    const title = item.title[currentLang] || item.title.en;
    const desc = item.shortDesc[currentLang] || item.shortDesc.en;

    return `
      <div class="card">
        <div class="card-img-wrapper">
          <img src="${item.image}" alt="${title}" loading="lazy">
          <span class="card-badge">${item.badge}</span>
          <span class="card-rating">★ ${item.rating} (${item.reviewsCount})</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${desc}</p>
          <div class="card-tags">
            ${item.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
          </div>
          <div class="card-actions">
            <button class="btn-card-primary" onclick="openAttractionModal('${item.id}')">${dict.cardBtnDetails}</button>
            <button class="btn-card-secondary ${isAdded ? 'added' : ''}" onclick="toggleTripPlan('${item.id}')">
              ${isAdded ? dict.cardBtnRemovePlan : dict.cardBtnAddPlan}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 3. Modal Details
function openAttractionModal(id) {
  const item = IKSAN_DATA.attractions.find(a => a.id === id);
  if (!item) return;

  const dict = UI_TRANSLATIONS[currentLang];
  const modal = document.getElementById('attractionModal');
  const title = item.title[currentLang] || item.title.en;
  const fullDesc = item.fullDesc[currentLang] || item.fullDesc.en;
  const address = item.address[currentLang] || item.address.en;

  document.getElementById('modalImg').src = item.image;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalFullDesc').textContent = fullDesc;
  document.getElementById('modalHours').textContent = item.openingHours;
  document.getElementById('modalAdmission').textContent = item.admission;
  document.getElementById('modalPhone').textContent = item.tel;
  document.getElementById('modalAddress').textContent = address;

  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('attractionModal').classList.remove('open');
}

// 4. Trip Itinerary Logic
function toggleTripPlan(id) {
  const idx = myTripPlan.indexOf(id);
  if (idx > -1) {
    myTripPlan.splice(idx, 1);
  } else {
    myTripPlan.push(id);
  }
  localStorage.setItem('iksan_my_trip', JSON.stringify(myTripPlan));
  renderAttractions();
  renderMyTripBoard();
}

function loadCourseToTrip(courseId) {
  const course = IKSAN_DATA.itineraries.find(c => c.id === courseId);
  if (course) {
    myTripPlan = [...new Set([...myTripPlan, ...course.stops])];
    localStorage.setItem('iksan_my_trip', JSON.stringify(myTripPlan));
    renderAttractions();
    renderMyTripBoard();
    document.getElementById('myTripBoard').scrollIntoView({ behavior: 'smooth' });
  }
}

function clearTripPlan() {
  myTripPlan = [];
  localStorage.setItem('iksan_my_trip', JSON.stringify(myTripPlan));
  renderAttractions();
  renderMyTripBoard();
}

function exportTripPlan() {
  window.print();
}

function renderItineraries() {
  const container = document.getElementById('itinerariesGrid');
  if (!container) return;

  const dict = UI_TRANSLATIONS[currentLang];

  container.innerHTML = IKSAN_DATA.itineraries.map(c => {
    const courseTitle = c.title[currentLang] || c.title.en;
    const stopsHtml = c.stops.map((stopId, idx) => {
      const item = IKSAN_DATA.attractions.find(a => a.id === stopId);
      const name = item ? (item.title[currentLang] || item.title.en) : stopId;
      return `
        <div class="stop-item">
          <span class="stop-num">${idx + 1}</span>
          <span>${name}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="course-card">
        <div class="course-header">
          <h3>${courseTitle}</h3>
          <span class="course-duration">${c.duration}</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${c.target}</p>
        <div class="course-stops">
          ${stopsHtml}
        </div>
        <button class="btn-gold" style="width: 100%; justify-content: center;" onclick="loadCourseToTrip('${c.id}')">
          ${dict.btnApplyCourse}
        </button>
      </div>
    `;
  }).join('');
}

function renderMyTripBoard() {
  const container = document.getElementById('tripItemsList');
  if (!container) return;

  const dict = UI_TRANSLATIONS[currentLang];

  if (myTripPlan.length === 0) {
    container.innerHTML = `<div class="empty-trip-msg">${dict.myPlanEmpty}</div>`;
    return;
  }

  container.innerHTML = myTripPlan.map((id, idx) => {
    const item = IKSAN_DATA.attractions.find(a => a.id === id);
    if (!item) return '';
    const title = item.title[currentLang] || item.title.en;
    const address = item.address[currentLang] || item.address.en;

    return `
      <div class="trip-item-card">
        <span class="stop-num">${idx + 1}</span>
        <img src="${item.image}" alt="${title}">
        <div class="trip-item-info">
          <h4>${title}</h4>
          <p>📍 ${address} | ⏰ ${item.openingHours}</p>
        </div>
        <button class="btn-remove-trip" onclick="toggleTripPlan('${item.id}')">${dict.cardBtnRemovePlan}</button>
      </div>
    `;
  }).join('');
}

// 5. Multilingual Audio Guide Player
function renderAudioPlayer() {
  const audioListContainer = document.getElementById('audioListContainer');
  if (!audioListContainer) return;

  audioListContainer.innerHTML = IKSAN_DATA.attractions.map(item => {
    const title = item.title[currentLang] || item.title.en;
    const isActive = item.id === currentAudioId;
    return `
      <div class="audio-item ${isActive ? 'active' : ''}" onclick="selectAudioTrack('${item.id}')">
        <h4>🎧 ${title}</h4>
        <span>${item.audioGuide.title} (${item.audioGuide.duration})</span>
      </div>
    `;
  }).join('');

  updateActiveAudioTrack();
}

function selectAudioTrack(id) {
  currentAudioId = id;
  isAudioPlaying = false;
  window.speechSynthesis.cancel();
  renderAudioPlayer();
}

function updateActiveAudioTrack() {
  const item = IKSAN_DATA.attractions.find(a => a.id === currentAudioId);
  if (!item) return;

  const title = item.title[currentLang] || item.title.en;
  const transcript = item.audioGuide.transcript[currentLang] || item.audioGuide.transcript.en;

  document.getElementById('currentAudioTitle').textContent = `${title} - ${item.audioGuide.title}`;
  document.getElementById('audioTranscriptText').textContent = transcript;
  
  const playBtn = document.getElementById('btnToggleAudioPlay');
  if (playBtn) playBtn.innerHTML = isAudioPlaying ? '⏸' : '▶';
}

function toggleAudioPlayback() {
  const item = IKSAN_DATA.attractions.find(a => a.id === currentAudioId);
  if (!item) return;

  if (isAudioPlaying) {
    window.speechSynthesis.cancel();
    isAudioPlaying = false;
  } else {
    const text = item.audioGuide.transcript[currentLang] || item.audioGuide.transcript.en;
    speakText(text, currentLang);
    isAudioPlaying = true;
  }
  updateActiveAudioTrack();
}

function speakText(text, lang) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  
  const langCodeMap = { en: 'en-US', ko: 'ko-KR', ja: 'ja-JP', zh: 'zh-CN' };
  utterance.lang = langCodeMap[lang] || 'en-US';
  utterance.rate = 0.95;

  utterance.onend = () => {
    isAudioPlaying = false;
    updateActiveAudioTrack();
  };

  window.speechSynthesis.speak(utterance);
}

// 6. Phrases & Voice Prompter
function renderPhrases() {
  const container = document.getElementById('phrasesContainer');
  if (!container) return;

  container.innerHTML = IKSAN_DATA.phrases.map(p => {
    const targetTranslation = p[currentLang] || p.en;
    return `
      <div class="phrase-card">
        <span class="phrase-cat">${p.cat}</span>
        <div class="phrase-en">${targetTranslation}</div>
        <div class="phrase-ko">${p.ko}</div>
        <div class="phrase-pron">Pronunciation: "${p.pron}"</div>
        <button class="btn-speak" onclick="speakText('${p.ko.replace(/'/g, "\\'")}', 'ko')">🔊 Pronounce (Korean)</button>
      </div>
    `;
  }).join('');
}

// 7. Hotlines
function renderHotlines() {
  const container = document.getElementById('hotlinesContainer');
  if (!container) return;

  container.innerHTML = IKSAN_DATA.emergencyContacts.map(h => `
    <div class="hotline-card">
      <h3>${h.name}</h3>
      <div class="hotline-tel">${h.tel}</div>
      <p style="font-size:0.85rem; color:var(--text-muted);">${h.note}</p>
    </div>
  `).join('');
}

// 8. Currency Converter
function convertCurrency() {
  const amountInput = document.getElementById('krwAmount');
  if (!amountInput) return;

  const krw = parseFloat(amountInput.value) || 10000;
  
  // Exchange rates (approximate benchmark)
  const usd = (krw / 1380).toFixed(2);
  const eur = (krw / 1500).toFixed(2);
  const jpy = (krw / 8.9).toFixed(0);
  const cny = (krw / 190).toFixed(1);

  document.getElementById('resUSD').textContent = `$${usd}`;
  document.getElementById('resEUR').textContent = `€${eur}`;
  document.getElementById('resJPY').textContent = `¥${jpy}`;
  document.getElementById('resCNY').textContent = `¥${cny}`;
}

// 9. Simulated AI Travel Concierge ("Iksan Bot")
function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const messagesBox = document.getElementById('chatMessages');
  if (!input || !messagesBox) return;

  const query = input.value.trim();
  if (!query) return;

  // Add User message
  const userMsgDiv = document.createElement('div');
  userMsgDiv.className = 'msg user';
  userMsgDiv.textContent = query;
  messagesBox.appendChild(userMsgDiv);
  input.value = '';

  // Scroll to bottom
  messagesBox.scrollTop = messagesBox.scrollHeight;

  // Generate bot response after short delay
  setTimeout(() => {
    const botMsgDiv = document.createElement('div');
    botMsgDiv.className = 'msg bot';
    botMsgDiv.textContent = generateBotResponse(query.toLowerCase());
    messagesBox.appendChild(botMsgDiv);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }, 500);
}

function generateBotResponse(q) {
  if (q.includes('station') || q.includes('ktx') || q.includes('seoul') || q.includes('역') || q.includes('교통')) {
    return currentLang === 'ko'
      ? "서울 용산역 또는 수서역에서 KTX/SRT를 타시면 약 1시간 10분 만에 익산역에 직통 도착합니다. 익산역 광장 관광안내소에서 외국인 전용 렌터카나 시티투어 버스(2,000원)를 이용하시면 편리합니다!"
      : "From Seoul (Yongsan or Suseo Station), KTX/SRT high-speed trains reach Iksan Station in just 70 minutes. You can take the Iksan City Tour Bus (KRW 2,000) directly from Iksan Station plaza!";
  }
  if (q.includes('food') || q.includes('bibimbap') || q.includes('eat') || q.includes('맛') || q.includes('식당')) {
    return currentLang === 'ko'
      ? "익산의 으뜸 미식은 '황등 육회비빔밥'입니다. 따뜻한 선짓국 육수에 밥을 토렴하여 신선한 한우 육회를 얹어 드립니다. 황등면 맛집 거리(진미식당, 한일식당)를 추천합니다!"
      : "The #1 food in Iksan is 'Hwangdeung Yukhoe Bibimbap'! Steamed rice pre-mixed in savory broth topped with fresh beef tartare. Visit Hwangdeung Gourmet Alley near Iksan!";
  }
  if (q.includes('unesco') || q.includes('mireuksa') || q.includes('temple') || q.includes('미륵사') || q.includes('유적')) {
    return currentLang === 'ko'
      ? "익산의 유네스코 세계유산은 '미륵사지'와 '왕궁리 유적' 두 곳입니다. 미륵사지 석탑(국보 제11호)과 국립익산박물관은 무료 입장이며 매주 월요일은 휴관입니다."
      : "Iksan holds two famous UNESCO sites: Mireuksa Temple Site & Wanggung-ri Historic Site. Admission is completely free! Don't miss the National Iksan Museum on site.";
  }
  if (q.includes('drama') || q.includes('prison') || q.includes('photo') || q.includes('교도소')) {
    return currentLang === 'ko'
      ? "익산 교도소 세트장은 영화 '7번방의 선물' 등 300여 편이 촬영된 인기 장소입니다. 죄수복 및 경찰복 대여 체험(2,000원)을 즐겨보세요!"
      : "The Iksan Prison Set was used to film over 300 K-dramas & movies like 'Miracle in Cell No.7'! You can rent prisoner/police costumes for fun photos!";
  }
  return currentLang === 'ko'
    ? "익산 방문에 대해 문의해주셔서 감사합니다! 미륵사지, 왕궁리 유적, 황등비빔밥, 아가페 정원 등 다양한 명소를 상단 메뉴에서 탐색해보세요."
    : "Thank you for asking! Iksan features 1,400 years of Baekje Kingdom history, gem museums, and lush green forests. Feel free to explore our attractions tab!";
}
