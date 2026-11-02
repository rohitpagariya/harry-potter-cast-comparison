// app.js - The Chronicles of Casting: Harry Potter
// Pure vanilla JS with responsive state management & Web Audio API synthesizers

let state = {
  selectedBook: 0, // 0 = All Books, 1-7 = Specific book
  selectedCategory: "all",
  searchQuery: "",
  showOnlyRecasts: false,
  showOnlyExclusives: false,
  activeView: "cards", // "cards", "table", "timeline", "exclusives"
  soundEnabled: true
};

// Web Audio API Magical Chime
let audioCtx = null;
function playMagicalChime() {
  if (!state.soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const now = audioCtx.currentTime;
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.exponentialRampToValueAtTime(880.00, now + 0.15); // A5
    osc1.frequency.exponentialRampToValueAtTime(1174.66, now + 0.35); // D6

    osc2.frequency.setValueAtTime(440, now);
    osc2.frequency.exponentialRampToValueAtTime(659.25, now + 0.2);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.65);
    osc2.stop(now + 0.65);
  } catch (e) {
    console.debug('Audio chime error:', e);
  }
}

// Fallback image monogram generator for actors (safe replaceWith to protect sibling DOM nodes)
window.handleImageError = function(img) {
  img.onerror = null;
  const actorName = img.getAttribute('data-name') || img.alt || 'HP';
  const initials = actorName
    .split(' ')
    .filter(Boolean)
    .map(p => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || 'HP';
  
  const monogram = document.createElement('div');
  monogram.className = 'actor-monogram';
  monogram.title = actorName;
  monogram.textContent = initials;
  img.replaceWith(monogram);
};

// Fallback image generator for characters (safe replaceWith to protect sibling DOM nodes)
window.handleCharImageError = function(img) {
  img.onerror = null;
  const charName = img.getAttribute('data-name') || img.alt || 'Character';
  const monogram = document.createElement('div');
  monogram.className = 'char-monogram';
  monogram.title = charName;
  monogram.textContent = '🧙‍♂️';
  img.replaceWith(monogram);
};

// Filter logic
function getFilteredCharacters() {
  return HP_CHARACTERS_DATA.filter(char => {
    // Book filter
    if (state.selectedBook !== 0 && !char.booksActive.includes(state.selectedBook)) {
      return false;
    }

    // Category filter
    if (state.selectedCategory !== "all" && char.category !== state.selectedCategory) {
      return false;
    }

    // Recasts only filter
    if (state.showOnlyRecasts) {
      const hasRecast = char.tags.some(t => 
        t.toLowerCase().includes('recast') || 
        t.toLowerCase().includes('shift') || 
        t.toLowerCase().includes('crossover')
      );
      if (!hasRecast) return false;
    }

    // Exclusives only filter
    if (state.showOnlyExclusives) {
      const isExclusive = char.tags.some(t => 
        t.toLowerCase().includes('exclusive') || 
        t.toLowerCase().includes('cut')
      );
      if (!isExclusive) return false;
    }

    // Search query filter
    if (state.searchQuery.trim() !== "") {
      const query = state.searchQuery.toLowerCase().trim();
      const inName = char.name.toLowerCase().includes(query);
      const inRole = char.role.toLowerCase().includes(query);
      const inHouse = char.house.toLowerCase().includes(query);
      const inMovieActor = char.movie.actor.toLowerCase().includes(query);
      const inAudibleActor = char.audible.actor.toLowerCase().includes(query);
      const inNotes = (char.movie.notes + ' ' + char.audible.notes + ' ' + char.trivia).toLowerCase().includes(query);
      if (!inName && !inRole && !inHouse && !inMovieActor && !inAudibleActor && !inNotes) {
        return false;
      }
    }

    return true;
  });
}

// Render Book Navigation
function renderBookNav() {
  const container = document.getElementById("bookNavTabs");
  if (!container) return;

  let html = `
    <button class="book-tab-btn ${state.selectedBook === 0 ? 'active' : ''}" data-book="0">
      <span class="book-tab-badge">⚡ OVERVIEW</span>
      <span class="book-tab-title">All 7 Books & Films</span>
      <span class="book-tab-meta">Full Series Master Comparison</span>
    </button>
  `;

  HP_BOOKS_DATA.forEach(book => {
    const isActive = state.selectedBook === book.id;
    html += `
      <button class="book-tab-btn ${isActive ? 'active' : ''}" data-book="${book.id}">
        <span class="book-tab-badge">${book.icon} BOOK ${book.id}</span>
        <span class="book-tab-title">${book.shortTitle.split('. ')[1]}</span>
        <span class="book-tab-meta">Film: ${book.movieYear} | Audio: ${book.audibleYear}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  // Add click events
  container.querySelectorAll(".book-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const bookId = parseInt(btn.getAttribute("data-book"), 10);
      state.selectedBook = bookId;
      playMagicalChime();
      renderApp();
    });
  });
}

// Render Context Banner
function renderBookContextBanner() {
  const banner = document.getElementById("bookContextBanner");
  if (!banner) return;

  if (state.selectedBook === 0) {
    banner.innerHTML = `
      <div class="book-context-card animate-fade-in">
        <div class="context-left">
          <h3>⚡ The Complete Wizarding Saga (Books 1–7)</h3>
          <p class="context-synopsis">
            Explore the comprehensive side-by-side casting comparison between all eight Warner Bros. film adaptations (2001–2011) and the historic 2025–2026 Audible full-cast ensemble audio editions produced with Pottermore Publishing in immersive Dolby Atmos.
          </p>
          <div class="context-meta-row">
            <div class="context-meta-item">
              <span>Film Directors</span>
              <span>Columbus, Cuarón, Newell, Yates</span>
            </div>
            <div class="context-meta-item">
              <span>Audible Narrator</span>
              <span>Cush Jumbo OBE</span>
            </div>
            <div class="context-meta-item">
              <span>Audible Total Performers</span>
              <span>Over 500 Voice Actors</span>
            </div>
          </div>
        </div>
        <div class="context-right">
          <div class="shift-alert-title">
            <span>🎭 THE CORE CASTING TRANSITION</span>
          </div>
          <p class="shift-alert-desc">
            Audible purposely divided the student characters into <strong>Two Distinct Eras</strong>: youthful child actors for Books 1–3 (Frankie Treadaway, Max Lester, Arabella Stanton) and mature teenage actors for Books 4–7 (Jaxon Knopf, Rhys Mulligan, Nina Barker-Francis) to accurately reflect adolescent voice deepening and dramatic intensity.
          </p>
        </div>
      </div>
    `;
  } else {
    const book = HP_BOOKS_DATA.find(b => b.id === state.selectedBook);
    if (!book) return;

    banner.innerHTML = `
      <div class="book-context-card animate-fade-in">
        <div class="context-left">
          <h3>${book.icon} Book ${book.id}: ${book.title}</h3>
          <p class="context-synopsis">${book.synopsis}</p>
          <div class="context-meta-row">
            <div class="context-meta-item">
              <span>Novel Published</span>
              <span>${book.bookYear}</span>
            </div>
            <div class="context-meta-item">
              <span>Film Release</span>
              <span>${book.movieYear} (${book.movieDirector})</span>
            </div>
            <div class="context-meta-item">
              <span>Audible Release</span>
              <span>${book.audibleYear} (Narrated by ${book.audibleNarrator})</span>
            </div>
          </div>
        </div>
        <div class="context-right">
          <div class="shift-alert-title">
            <span>🚨 ${book.audibleCastEra}</span>
          </div>
          <p class="shift-alert-desc">${book.shiftSummary}</p>
        </div>
      </div>
    `;
  }
}

// Render Category Pills
function renderCategoryPills() {
  const container = document.getElementById("categoryPills");
  if (!container) return;

  const categories = [
    { id: "all", label: "All Characters" },
    { id: "Golden Trio", label: "The Golden Trio" },
    { id: "Hogwarts Faculty & Staff", label: "Hogwarts Faculty & Staff" },
    { id: "Hogwarts Students", label: "Hogwarts Students" },
    { id: "Order of the Phoenix", label: "Order of the Phoenix" },
    { id: "Death Eaters & Dark Forces", label: "Death Eaters & Dark Forces" },
    { id: "Ministry & Civilians", label: "Ministry & Civilians" },
    { id: "Ghosts & Magical Beings", label: "Ghosts & Magical Beings" }
  ];

  let html = "";
  categories.forEach(cat => {
    const count = HP_CHARACTERS_DATA.filter(c => {
      const matchBook = state.selectedBook === 0 || c.booksActive.includes(state.selectedBook);
      const matchCat = cat.id === "all" || c.category === cat.id;
      return matchBook && matchCat;
    }).length;

    const isActive = state.selectedCategory === cat.id;
    html += `
      <button class="cat-pill ${isActive ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label} (${count})
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      state.selectedCategory = pill.getAttribute("data-cat");
      playMagicalChime();
      renderApp();
    });
  });
}

// Render Cards View with Prominent Character Portraits
function renderCards(filteredChars) {
  const container = document.getElementById("castContentArea");
  if (!container) return;

  if (filteredChars.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px dashed var(--gold-border);">
        <p style="font-size: 2.5rem; margin-bottom: 1rem;">🧙‍♂️📜</p>
        <h3 style="color: var(--gold-light); margin-bottom: 0.5rem;">No Wizards or Witches Found</h3>
        <p style="color: var(--text-muted); max-width: 450px; margin: 0 auto 1.5rem;">
          No cast members match your current combination of book, category, and search terms.
        </p>
        <button id="resetFiltersBtn" class="toggle-btn active" style="margin: 0 auto;">Reset All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        state.selectedCategory = "all";
        state.searchQuery = "";
        state.showOnlyRecasts = false;
        state.showOnlyExclusives = false;
        const searchInput = document.getElementById("characterSearchInput");
        if (searchInput) searchInput.value = "";
        renderApp();
      });
    }
    return;
  }

  let html = `<div class="cards-grid">`;

  filteredChars.forEach(char => {
    const houseClass = char.house.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Build badges
    const badgesHtml = char.tags.map(tag => {
      let tagClass = "tag-shift";
      if (tag.toLowerCase().includes("exclusive") || tag.toLowerCase().includes("cut")) {
        tagClass = "tag-exclusive";
      } else if (tag.toLowerCase().includes("star") || tag.toLowerCase().includes("crossover")) {
        tagClass = "tag-star";
      }
      return `<span class="tag-badge ${tagClass}">${tag}</span>`;
    }).join("");

    // Build book dots
    const dotsHtml = [1, 2, 3, 4, 5, 6, 7].map(num => {
      const isActiveInBook = char.booksActive.includes(num);
      const isSelectedBook = state.selectedBook === num;
      let dotClass = "";
      if (isActiveInBook) dotClass = "active";
      if (isSelectedBook) dotClass = "selected";
      return `<span class="dot-book ${dotClass}" title="Book ${num}">${num}</span>`;
    }).join("");

    const charImgSrc = char.characterImg || `images/characters/${char.id}.jpg`;
    const escapedCharName = char.name.replace(/"/g, '&quot;');
    const escapedMovieActor = char.movie.actor.replace(/"/g, '&quot;');
    const escapedAudibleActor = char.audible.actor.replace(/"/g, '&quot;');

    html += `
      <div class="char-card animate-fade-in" data-id="${char.id}">
        <!-- Card Header with Prominent Character Face -->
        <div class="char-card-header">
          <div class="char-header-identity">
            <div class="char-portrait-container house-ring-${houseClass}">
              <img 
                class="char-portrait-img" 
                src="${charImgSrc}" 
                alt="${escapedCharName} Portrait"
                data-name="${escapedCharName}"
                loading="lazy"
                onerror="handleCharImageError(this)"
              />
              <span class="char-portrait-tag" title="Wizarding Character Face">🧙‍♂️</span>
            </div>
            <div class="char-identity-meta">
              <div class="char-title-row">
                <h3 class="char-name">${char.name}</h3>
                <span class="house-badge ${houseClass}">${char.house}</span>
              </div>
              <span class="char-role">${char.role}</span>
              <div class="char-tags-list">
                ${badgesHtml}
              </div>
            </div>
          </div>
        </div>

        <!-- Card Body Split: Movie Actor vs Audible Artist -->
        <div class="char-card-body">
          <!-- Left: Movie Cast -->
          <div class="char-side movie-side">
            <div class="side-header">
              <span class="side-title movie">🎬 MOVIE PORTRAYAL</span>
              <span class="side-year">Warner Bros.</span>
            </div>
            <div class="actor-profile-row">
              <div class="actor-avatar-wrap">
                <img 
                  class="actor-avatar-img" 
                  src="${char.movie.img}" 
                  alt="${escapedMovieActor}"
                  data-name="${escapedMovieActor}"
                  loading="lazy"
                  onerror="handleImageError(this)"
                />
              </div>
              <div class="actor-meta">
                <a class="actor-name-link" href="${char.movie.wiki}" target="_blank" rel="noopener noreferrer" title="View Wikipedia Biography">
                  ${char.movie.actor}
                  <span class="wiki-icon">↗</span>
                </a>
                ${char.movie.secondaryActor ? `<span class="actor-secondary">${char.movie.secondaryActor}</span>` : ''}
                <span class="actor-coverage">${char.movie.coverage}</span>
              </div>
            </div>
            <p class="actor-notes">${char.movie.notes}</p>
          </div>

          <!-- Right: Audible Ensemble Cast -->
          <div class="char-side audible-side">
            <div class="side-header">
              <span class="side-title audible">🎧 AUDIBLE VOICE ARTIST</span>
              <span class="side-year">Dolby Atmos</span>
            </div>
            <div class="actor-profile-row">
              <div class="actor-avatar-wrap audible-wrap">
                <img 
                  class="actor-avatar-img" 
                  src="${char.audible.img}" 
                  alt="${escapedAudibleActor}"
                  data-name="${escapedAudibleActor}"
                  loading="lazy"
                  onerror="handleImageError(this)"
                />
              </div>
              <div class="actor-meta">
                <a class="actor-name-link" href="${char.audible.wiki}" target="_blank" rel="noopener noreferrer" title="View Biography">
                  ${char.audible.actor}
                  <span class="wiki-icon">↗</span>
                </a>
                ${char.audible.secondaryActor ? `<span class="actor-secondary">${char.audible.secondaryActor}</span>` : ''}
                <span class="actor-coverage">${char.audible.coverage}</span>
              </div>
            </div>
            <p class="actor-notes">${char.audible.notes}</p>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="char-card-footer">
          <div class="book-presence-dots">
            <span class="presence-label">Books:</span>
            ${dotsHtml}
          </div>
          <button class="details-modal-btn" onclick="openCharModal('${char.id}')">
            <span>✨ Deep-Dive Comparison</span>
          </button>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Render Table View with Portraits
function renderTable(filteredChars) {
  const container = document.getElementById("castContentArea");
  if (!container) return;

  let rows = filteredChars.map(char => {
    const houseClass = char.house.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const charImgSrc = char.characterImg || `images/characters/${char.id}.jpg`;
    const escapedCharName = char.name.replace(/"/g, '&quot;');
    const escapedMovieActor = char.movie.actor.replace(/"/g, '&quot;');
    const escapedAudibleActor = char.audible.actor.replace(/"/g, '&quot;');
    
    return `
    <tr>
      <td>
        <div class="table-char-cell">
          <div class="table-thumb-wrap house-ring-${houseClass}">
            <img class="table-char-thumb" src="${charImgSrc}" alt="${escapedCharName}" data-name="${escapedCharName}" loading="lazy" onerror="handleCharImageError(this)" />
          </div>
          <div class="table-char-info">
            <strong>${char.name}</strong>
            <span class="house-badge ${houseClass}">${char.house}</span>
            <small style="color: var(--text-dim); display: block;">${char.role}</small>
          </div>
        </div>
      </td>
      <td>
        <div class="table-actor-cell">
          <img class="table-actor-thumb" src="${char.movie.img}" alt="${escapedMovieActor}" data-name="${escapedMovieActor}" loading="lazy" onerror="handleImageError(this)" />
          <div class="table-actor-meta">
            <a class="table-wiki-link" href="${char.movie.wiki}" target="_blank" rel="noopener noreferrer">
              ${char.movie.actor} ↗
            </a>
            <small style="color: var(--text-dim); display: block;">${char.movie.coverage}</small>
          </div>
        </div>
      </td>
      <td>
        <div class="table-actor-cell">
          <img class="table-actor-thumb audible-thumb" src="${char.audible.img}" alt="${escapedAudibleActor}" data-name="${escapedAudibleActor}" loading="lazy" onerror="handleImageError(this)" />
          <div class="table-actor-meta">
            <a class="table-wiki-link" href="${char.audible.wiki}" target="_blank" rel="noopener noreferrer" style="color: var(--cyan-accent);">
              ${char.audible.actor} ↗
            </a>
            <small style="color: var(--text-dim); display: block;">${char.audible.coverage}</small>
          </div>
        </div>
      </td>
      <td>
        <small style="color: var(--text-muted);">${char.shiftSummary || char.movie.notes}</small>
      </td>
      <td>
        <button class="details-modal-btn" onclick="openCharModal('${char.id}')">
          Details
        </button>
      </td>
    </tr>
  `;
  }).join("");

  container.innerHTML = `
    <div class="table-view-container animate-fade-in">
      <table class="cast-table">
        <thead>
          <tr>
            <th>Character & Face</th>
            <th>Movie Actor (WB)</th>
            <th>Audible Voice Artist</th>
            <th>Casting Transition Analysis</th>
            <th>Deep Dive</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}

// Render Timeline / Era View
function renderTimeline() {
  const container = document.getElementById("castContentArea");
  if (!container) return;

  container.innerHTML = `
    <div class="timeline-section animate-fade-in">
      <div class="hero-tag">🌟 INSIDE THE PRODUCTION DESIGN</div>
      <h2 class="timeline-title">The Audible Full-Cast Casting Architecture: 3 Eras of Growth</h2>
      <p style="color: var(--text-muted); max-width: 900px; margin-bottom: 2rem; line-height: 1.6;">
        Unlike the feature films where Daniel Radcliffe, Emma Watson, and Rupert Grint aged naturally in front of the lens from 2001 to 2011, Pottermore Publishing and Audible made a deliberate directorial choice to split the 7-book audiobook audio production across three distinct voice eras to capture authentic vocal maturity:
      </p>

      <div class="timeline-grid">
        <div class="era-card era-1">
          <div class="era-badge">ERA 1: BOOKS 1–3 (AGES 11–13)</div>
          <h3 class="era-title">The Child Voice Ensemble</h3>
          <p class="era-desc">
            Recorded with authentic young British actors to capture the high pitch, innocent banter, and schoolyard wonder of Harry's early Hogwarts years.
          </p>
          <div class="era-cast-list">
            • <strong>Harry Potter:</strong> Frankie Treadaway<br>
            • <strong>Ron Weasley:</strong> Max Lester<br>
            • <strong>Hermione Granger:</strong> Arabella Stanton<br>
            • <strong>Draco Malfoy:</strong> Jude Farrant<br>
            • <strong>Neville Longbottom:</strong> Jake Sigsworth<br>
            • <strong>Ginny Weasley:</strong> Bumble Clarke
          </div>
        </div>

        <div class="era-card era-2">
          <div class="era-badge">ERA 2: BOOKS 4–7 (AGES 14–17)</div>
          <h3 class="era-title">The Mature / Teen Ensemble</h3>
          <p class="era-desc">
            Beginning with the dark, tragic tone shift of <em>Goblet of Fire</em>, the student cast transitions to older teenage actors with deeper vocal timbre and emotional gravity.
          </p>
          <div class="era-cast-list">
            • <strong>Harry Potter:</strong> Jaxon Knopf<br>
            • <strong>Ron Weasley:</strong> Rhys Mulligan<br>
            • <strong>Hermione Granger:</strong> Nina Barker-Francis<br>
            • <strong>Draco Malfoy:</strong> Maximus Evans<br>
            • <strong>Neville Longbottom:</strong> Archie Mountain<br>
            • <strong>Ginny Weasley:</strong> Shreya Lallu
          </div>
        </div>

        <div class="era-card era-3">
          <div class="era-badge">ERA 3: EPILOGUE (19 YEARS LATER)</div>
          <h3 class="era-title">The Adult Epilogue Cast</h3>
          <p class="era-desc">
            In <em>Deathly Hallows</em> Platform 9¾ scene, mature adult actors take over as parents seeing their children off to Hogwarts, avoiding artificial aging effects.
          </p>
          <div class="era-cast-list">
            • <strong>Adult Harry:</strong> Sam Stafford<br>
            • <strong>Adult Ron:</strong> David Ames<br>
            • <strong>Adult Hermione:</strong> Kelechi Okafor<br>
            • <strong>Adult Ginny:</strong> Rosie Jones<br>
            • <strong>Adult Draco:</strong> Alex Hassell
          </div>
        </div>
      </div>

      <div style="margin-top: 3rem; background: var(--bg-card); border: 1px solid var(--gold-border); border-radius: var(--border-radius-lg); padding: 2rem;">
        <h3 style="color: var(--gold-light); margin-bottom: 1rem; font-family: var(--font-display);">🎬 Film vs. 🎧 Audio: Key Directorial Differences</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div>
            <h4 style="color: #fff; margin-bottom: 0.5rem;">1. Visual Aging vs Vocal Authenticity</h4>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.5;">
              Warner Bros. committed to Daniel, Emma, and Rupert over a 10-year span. While beloved, 21-year-old Daniel playing 17-year-old Harry in 2011 differed from Audible's vocal casting, which could strictly match the characters' precise chronological vocal resonance.
            </p>
          </div>
          <div>
            <h4 style="color: #fff; margin-bottom: 0.5rem;">2. Restoring S.P.E.W., Winky & Peeves</h4>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.5;">
              Because films face 2.5-hour runtime limits, massive storylines like Hermione's Society for the Promotion of Elfish Welfare (S.P.E.W.), Ludo Bagman's gambling debts, and poltergeist Peeves were excised. The Audible series features every single line unabridged.
            </p>
          </div>
          <div>
            <h4 style="color: #fff; margin-bottom: 0.5rem;">3. Spatial Dolby Atmos Soundscapes</h4>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.5;">
              The audio edition is mixed in full Dolby Atmos, placing Harry's Parseltongue whispers around your head, Dementor chills sweeping from behind, and Quidditch Golden Snitches buzzing past each ear in 3D binaural space.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Exclusives View
function renderExclusives() {
  const container = document.getElementById("castContentArea");
  if (!container) return;

  const exclusives = HP_CHARACTERS_DATA.filter(c => 
    c.tags.some(t => t.toLowerCase().includes("exclusive") || t.toLowerCase().includes("cut"))
  );

  renderCards(exclusives);
}

// Main App Render
function renderApp() {
  renderBookNav();
  renderBookContextBanner();
  renderCategoryPills();

  const filteredChars = getFilteredCharacters();

  // Update results count
  const countEl = document.getElementById("resultsCount");
  if (countEl) {
    countEl.textContent = `${filteredChars.length} Characters Displayed`;
  }

  // Render view
  if (state.activeView === "cards") {
    renderCards(filteredChars);
  } else if (state.activeView === "table") {
    renderTable(filteredChars);
  } else if (state.activeView === "timeline") {
    renderTimeline();
  } else if (state.activeView === "exclusives") {
    renderExclusives();
  }
}

// Open Character Modal with Character and Actor Portraits
window.openCharModal = function(charId) {
  const char = HP_CHARACTERS_DATA.find(c => c.id === charId);
  if (!char) return;

  playMagicalChime();

  const modal = document.getElementById("charModal");
  const modalContent = document.getElementById("modalBodyContent");
  if (!modal || !modalContent) return;

  const houseClass = char.house.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const charImgSrc = char.characterImg || `images/characters/${char.id}.jpg`;
  const escapedCharName = char.name.replace(/"/g, '&quot;');
  const escapedMovieActor = char.movie.actor.replace(/"/g, '&quot;');
  const escapedAudibleActor = char.audible.actor.replace(/"/g, '&quot;');

  modalContent.innerHTML = `
    <!-- Modal Hero: Character Portrait + Lore Header -->
    <div class="modal-header">
      <div class="modal-hero-split">
        <div class="modal-char-portrait-wrap house-ring-${houseClass}">
          <img 
            class="modal-char-portrait-img" 
            src="${charImgSrc}" 
            alt="${escapedCharName} Portrait"
            data-name="${escapedCharName}"
            onerror="handleCharImageError(this)"
          />
        </div>
        <div class="modal-hero-text">
          <div class="modal-title-row">
            <h2 class="modal-title">${char.name}</h2>
            <span class="house-badge ${houseClass}">${char.house}</span>
          </div>
          <p class="modal-subtitle">${char.role} • Active in Books: ${char.booksActive.join(', ')}</p>
          <div class="modal-tags">
            ${char.tags.map(t => `<span class="tag-badge tag-shift">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Dual Grid: Movie Actor vs Voice Artist Faces -->
    <div class="modal-body">
      <div class="modal-dual-grid">
        <!-- Movie Actor Profile -->
        <div class="modal-column">
          <div class="side-header">
            <span class="side-title movie">🎬 WARNER BROS. FILMS</span>
            <span class="side-year">${char.movie.coverage}</span>
          </div>
          <div class="modal-actor-card-head">
            <img 
              class="modal-actor-img" 
              src="${char.movie.img}" 
              alt="${escapedMovieActor}"
              data-name="${escapedMovieActor}"
              onerror="handleImageError(this)"
            />
            <div>
              <h3 style="color: #fff; font-size: 1.15rem; margin-bottom: 0.2rem;">${char.movie.actor}</h3>
              ${char.movie.secondaryActor ? `<p style="font-size: 0.8rem; color: var(--gold-light);">${char.movie.secondaryActor}</p>` : ''}
              <a class="wiki-btn-link" href="${char.movie.wiki}" target="_blank" rel="noopener noreferrer">
                📖 View Wikipedia Biography ↗
              </a>
            </div>
          </div>
          <div class="modal-section">
            <h4 class="modal-section-title">Screen Portrayal & Impact</h4>
            <p class="modal-section-text">${char.movie.notes}</p>
          </div>
        </div>

        <!-- Audible Actor Profile -->
        <div class="modal-column">
          <div class="side-header">
            <span class="side-title audible">🎧 AUDIBLE FULL-CAST EDITION</span>
            <span class="side-year">${char.audible.coverage}</span>
          </div>
          <div class="modal-actor-card-head">
            <img 
              class="modal-actor-img audible-modal-img" 
              src="${char.audible.img}" 
              alt="${escapedAudibleActor}"
              data-name="${escapedAudibleActor}"
              onerror="handleImageError(this)"
            />
            <div>
              <h3 style="color: #fff; font-size: 1.15rem; margin-bottom: 0.2rem;">${char.audible.actor}</h3>
              ${char.audible.secondaryActor ? `<p style="font-size: 0.8rem; color: var(--cyan-accent);">${char.audible.secondaryActor}</p>` : ''}
              <a class="wiki-btn-link" href="${char.audible.wiki}" target="_blank" rel="noopener noreferrer" style="border-color: rgba(79,195,247,0.4); color: var(--cyan-accent);">
                📖 View Biography ↗
              </a>
            </div>
          </div>
          <div class="modal-section">
            <h4 class="modal-section-title">Vocal Delivery & Dolby Atmos Nuance</h4>
            <p class="modal-section-text">${char.audible.notes}</p>
          </div>
        </div>
      </div>

      <!-- Casting Shift & Production Analysis -->
      <div style="background: rgba(15,22,36,0.9); border: 1px solid var(--gold-border); border-radius: var(--border-radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
        <h4 class="modal-section-title">🔄 Casting Transition & Production Analysis</h4>
        <p class="modal-section-text">${char.shiftSummary || 'Maintained consistent casting throughout the production run.'}</p>
      </div>

      <!-- Wizarding Trivia & Lore Difference -->
      <div style="background: rgba(9,13,22,0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--border-radius-md); padding: 1.5rem;">
        <h4 class="modal-section-title">⚡ Wizarding Trivia & Lore Difference</h4>
        <p class="modal-section-text">${char.trivia}</p>
      </div>
    </div>
  `;

  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

// Close Character Modal
window.closeCharModal = function() {
  const modal = document.getElementById("charModal");
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }
};

// Initialize listeners on DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Search input
  const searchInput = document.getElementById("characterSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderApp();
    });
  }

  // Recasts toggle
  const recastBtn = document.getElementById("toggleRecastsBtn");
  if (recastBtn) {
    recastBtn.addEventListener("click", () => {
      state.showOnlyRecasts = !state.showOnlyRecasts;
      recastBtn.classList.toggle("active", state.showOnlyRecasts);
      playMagicalChime();
      renderApp();
    });
  }

  // Exclusives toggle
  const exclusiveBtn = document.getElementById("toggleExclusivesBtn");
  if (exclusiveBtn) {
    exclusiveBtn.addEventListener("click", () => {
      state.showOnlyExclusives = !state.showOnlyExclusives;
      exclusiveBtn.classList.toggle("active", state.showOnlyExclusives);
      playMagicalChime();
      renderApp();
    });
  }

  // View switchers
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-view");
      state.activeView = mode;
      document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      playMagicalChime();
      renderApp();
    });
  });

  // Sound toggle
  const soundBtn = document.getElementById("soundToggleBtn");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      state.soundEnabled = !state.soundEnabled;
      soundBtn.classList.toggle("active", state.soundEnabled);
      soundBtn.innerHTML = state.soundEnabled ? "🔔 Chimes: ON" : "🔕 Chimes: OFF";
      if (state.soundEnabled) playMagicalChime();
    });
  }

  // Modal close listeners
  const closeBtn = document.getElementById("modalCloseBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCharModal);
  }

  const modalOverlay = document.getElementById("charModal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeCharModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCharModal();
  });

  // Initial render
  renderApp();
});
