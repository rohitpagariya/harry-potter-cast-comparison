# ⚡ The Chronicles of Casting: Harry Potter (Movies vs. Audible Full Ensemble)

An interactive, responsive visualization web application comparing the casting and vocal craft of the **eight Warner Bros. feature films (2001–2011)** with the **Pottermore Publishing & Audible Full-Cast Audio Editions (2025–2026)** recorded in immersive Dolby Atmos.

![Cast Comparison Preview](images/characters/harry_potter.jpg)

---

## 🌟 Key Application Features

### 1. Three-Way Face Association (Character ➔ Movie ➔ Audio)
* **Canonical Wizarding Character Faces**: Each character card prominently showcases the character's portrait framed in an ambient glowing border matching their Hogwarts house:
  - 🦁 **Gryffindor Crimson & Gold**: Harry Potter, Hermione Granger, Ron Weasley, Albus Dumbledore, Sirius Black, etc.
  - 🐍 **Slytherin Emerald & Silver**: Severus Snape, Lord Voldemort, Draco Malfoy, Bellatrix Lestrange, Lucius Malfoy.
  - 🦅 **Ravenclaw Sapphire & Bronze**: Luna Lovegood, Cho Chang, Filius Flitwick, Sybill Trelawney.
  - 🦡 **Hufflepuff Amber & Ebony**: Cedric Diggory, Pomona Sprout, Nymphadora Tonks.
  - ⚡ **Hogwarts Gold**: Argus Filch, Rubeus Hagrid, Garrick Ollivander, Sorting Hat, Narrator.
* **Side-by-Side Dual Portrayals**:
  - 🎬 **Warner Bros. Live-Action Film**: Actor portrait with gold border, character coverage, performance notes, and direct Wikipedia biography link (`↗`).
  - 🎧 **Audible Dolby Atmos Ensemble**: Voice artist portrait or branded audio insignia with cyan border, coverage, vocal delivery nuances, and direct biography link (`↗`).

### 2. Book-by-Book Navigation (Books 1–7 + Saga Master View)
* Select any individual volume (e.g., *Prisoner of Azkaban*, *Goblet of Fire*) or switch to the *All Books* overview.
* Dynamic context banners summarize the novel synopsis, film release/director, audiobook release date, and specific casting shifts for that volume.

### 3. The Audible 3-Era Casting Architecture
* **Era 1 (Books 1–3, Ages 11–13)**: Youthful British child actors capturing schoolyard wonder:
  - Harry: Frankie Treadaway | Ron: Max Lester | Hermione: Arabella Stanton | Draco: Jude Farrant | Neville: Jake Sigsworth | Ginny: Bumble Clarke
* **Era 2 (Books 4–7, Ages 14–17)**: Older teenage actors capturing voice deepening, puberty, and wartime trauma:
  - Harry: Jaxon Knopf | Ron: Rhys Mulligan | Hermione: Nina Barker-Francis | Draco: Maximus Evans | Neville: Archie Mountain | Ginny: Shreya Lallu
* **Era 3 (19 Years Later Epilogue)**: Mature adult cast taking over Platform 9¾:
  - Adult Harry: Sam Stafford | Adult Ron: David Ames | Adult Hermione: Kelechi Okafor | Adult Ginny: Rosie Jones | Adult Draco: Alex Hassell

### 4. Movie Recasting Analysis
* **Albus Dumbledore**: Richard Harris (Films 1–2) ➔ Michael Gambon (Films 3–8) vs. Hugh Laurie's consistent 7-book vocal anchor in Audible.
* **Lord Voldemort**: Richard Bremmer / Ian Hart (Film 1) ➔ Christian Coulson (Film 2) ➔ Ralph Fiennes (Films 4–8) vs. Matthew Macfadyen and Oscar Brudenall-Jones in Audible.
* **The Fat Lady**: Elizabeth Spriggs (Film 1) ➔ Dawn French (Film 3) vs. Sarah Whitehouse in Audible.
* **Lavender Brown**: Background extras Kathleen Cauley (Film 2) & Jennifer Smith (Film 3) ➔ Jessie Cave (Films 6–8) vs. Ruby-May Martinwood in Audible.

### 5. Star Crossovers & Casting Coups
* **Bill Nighy**: Played Minister Rufus Scrimgeour in *Deathly Hallows: Part 1*, but voices Professor Horace Slughorn in Audible!
* **David Holmes**: Daniel Radcliffe’s real-life stunt double returns to voice Knight Bus conductor Stan Shunpike!
* **A-List Voice Cast**: Keira Knightley (Umbridge), Kit Harington (Lockhart), James McAvoy (Mad-Eye Moody), Hugh Laurie (Dumbledore), Matthew Macfadyen (Voldemort), Riz Ahmed (Snape), Michelle Gomez (McGonagall), Mark Addy (Hagrid), Ruth Wilson (Bellatrix), Simon Pegg (Arthur Weasley), Iwan Rheon (Remus Lupin), Cush Jumbo OBE (Narrator).

### 6. Book-Exclusive Characters (Restored from the Cuts)
* **Peeves the Poltergeist** (Nigel Pilkington) – Featured across all 7 books!
* **Ludo Bagman** (Danny Kirrane) – Triwizard gambling debts restored!
* **Winky the House-Elf** (Clare Corbett) – Hermione's S.P.E.W. storyline restored!
* **Charlie Weasley** (Joel Fry) – Dragons and Order work featured!
* **The House of Gaunt** (Finbar Lynch) – Pensieve memory lore restored!
* **Sir Cadogan** (Matt Berry) – Booming comedy perfection!

### 7. Multiple View Modes & Mobile Optimization
* 🎴 **Side-by-Side Cards**: Rich dual portraits, tags, active book tracker dots, and chime triggers.
* 📋 **Matrix Table**: Dense comparative grid with triple face thumbnails (Character, Movie Actor, Audible Artist).
* 📊 **Era Architecture**: Directorial breakdown of the 3 eras, spatial Dolby Atmos sound design, and live-action vs audio craft.
* 📱 **Mobile-First Responsive Design**: Stacks gracefully on touchscreens (<640px) with minimum 44px tap targets, momentum swipe navigation, and zero horizontal clipping.

---

## 💻 Local Development

Clone the repository and run locally:

```bash
# Clone the repository
git clone https://github.com/<your-username>/harry-potter-cast-comparison.git
cd harry-potter-cast-comparison

# Start a simple HTTP server (Python 3)
python3 -m http.server 8080

# Or using Node.js npx serve
npx serve .
```

Open `http://localhost:8080` in your web browser.

---

## ☁️ Deploying to Cloudflare Pages

You can deploy this static application to Cloudflare Pages using either the **Cloudflare Dashboard (Git Integration)** or the **Wrangler CLI**.

### Option A: Cloudflare Dashboard (Recommended — Automated CI/CD)

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Select this GitHub repository.
4. Configure the build settings:
   - **Framework preset**: `None`
   - **Build command**: `npm run build` *(or leave blank if deploying pre-built files)*
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Cloudflare will automatically build and deploy the site to a free `*.pages.dev` domain on every `git push`.

---

### Option B: Wrangler CLI (Direct Command-Line Deployment)

If you prefer deploying directly from your terminal:

1. **Install Wrangler** (Cloudflare Developer Platform CLI):
   ```bash
   npm install -g wrangler
   # or run directly with npx
   ```

2. **Log in to Cloudflare**:
   ```bash
   wrangler login
   ```
   *(This opens your browser to authorize Wrangler with your Cloudflare account without hardcoding credentials in the repo).*

3. **Deploy the `dist/` directory**:
   ```bash
   wrangler pages deploy dist --project-name=<your-project-name>
   ```

4. Wrangler will upload the static assets and provide your live production URL (e.g., `https://<your-project-name>.pages.dev`).

---

## 📂 Project Structure

```text
├── index.html            # Main semantic HTML5 markup
├── styles.css            # Wizarding dark theme, CSS variables & mobile media queries
├── data.js               # Structured dataset (Books 1–7, 53 characters, bios, lore)
├── app.js                # State management, views, search/filter logic, Web Audio chimes
├── standalone.html       # Self-contained zero-dependency bundle
├── images/               # High-resolution local image assets
│   ├── characters/       # Canonical character portraits (WebP / JPG)
│   └── actors/           # Movie actors & Audible Dolby Atmos artist badges
├── dist/                 # Production-ready deployment directory
├── package.json          # Project metadata & build/deploy scripts
└── README.md             # Project documentation & deployment guide
```

---

## 📜 License & Disclaimers

* **License**: MIT
* **Disclaimer**: This educational, non-commercial project compares performance craft across media. *Harry Potter* film adaptations &copy; Warner Bros. Entertainment Inc. Full-Cast Audio Editions produced by Pottermore Publishing and Audible in Dolby Atmos.
