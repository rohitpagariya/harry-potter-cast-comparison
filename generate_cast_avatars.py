# generate_cast_avatars.py
import os

BASE_DIR = "/Users/rohitpagariya/.gemini/antigravity/scratch/harry-potter-cast-comparison"
ACTOR_DIST = os.path.join(BASE_DIR, "dist", "images", "actors")
ACTOR_SRC = os.path.join(BASE_DIR, "images", "actors")

for d in [ACTOR_DIST, ACTOR_SRC]:
    os.makedirs(d, exist_ok=True)

AUDIBLE_ACTORS = {
    "harry_potter": {"initials": "HP", "name": "Frankie Treadaway / Jaxon Knopf", "color": "#e5a93b", "accent": "#ffd700"},
    "hermione_granger": {"initials": "NB", "name": "Nina Barker-Francis", "color": "#38bdf8", "accent": "#7dd3fc"},
    "ron_weasley": {"initials": "RM", "name": "Rhys Mulligan", "color": "#f97316", "accent": "#fb923c"},
    "draco_malfoy": {"initials": "ME", "name": "Maximus Evans", "color": "#10b981", "accent": "#34d399"},
    "neville_longbottom": {"initials": "AM", "name": "Archie Mountain", "color": "#eab308", "accent": "#facc15"},
    "ginny_weasley": {"initials": "SL", "name": "Shreya Lallu", "color": "#ec4899", "accent": "#f472b6"},
    "luna_lovegood": {"initials": "MG", "name": "Millie Gubby", "color": "#a855f7", "accent": "#c084fc"},
    "sybill_trelawney": {"initials": "SJ", "name": "Saoirse-Monica Jackson", "color": "#06b6d4", "accent": "#22d3ee"},
    "kingsley_shacklebolt": {"initials": "AP", "name": "Abraham Popoola", "color": "#6366f1", "accent": "#818cf8"},
    "barty_crouch_jr": {"initials": "MA", "name": "Michael Ahomka-Lindsay", "color": "#f43f5e", "accent": "#fb7185"},
    "cho_chang": {"initials": "LH", "name": "Lisa He", "color": "#38bdf8", "accent": "#7dd3fc"},
    "fleur_delacour": {"initials": "TS", "name": "Tara Salma", "color": "#3b82f6", "accent": "#60a5fa"},
    "stan_shunpike": {"initials": "DH", "name": "David Holmes", "color": "#8b5cf6", "accent": "#a78bfa"},
    "ludo_bagman": {"initials": "DK", "name": "Danny Kirrane", "color": "#eab308", "accent": "#facc15"},
    "winky": {"initials": "CC", "name": "Clare Corbett", "color": "#14b8a6", "accent": "#2dd4bf"},
    "lavender_brown": {"initials": "RM", "name": "Ruby-May Martinwood", "color": "#f472b6", "accent": "#fbcfe8"},
}

def create_audible_svg(initials, name, color, accent):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="320" height="320">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="70%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#070b14"/>
    </radialGradient>
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{accent}"/>
      <stop offset="50%" stop-color="{color}"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background Circle -->
  <circle cx="160" cy="160" r="154" fill="url(#bgGrad)" stroke="url(#ringGrad)" stroke-width="5"/>
  <circle cx="160" cy="160" r="140" fill="none" stroke="{color}" stroke-opacity="0.25" stroke-dasharray="4,6" stroke-width="2"/>

  <!-- Audio Wave Rings -->
  <g opacity="0.3" stroke="{accent}" stroke-width="2" fill="none">
    <path d="M 60 160 A 100 100 0 0 1 260 160" />
    <path d="M 80 160 A 80 80 0 0 1 240 160" />
  </g>

  <!-- Headphone Icon Motif -->
  <g transform="translate(160, 105) scale(0.9)" filter="url(#glow)">
    <path d="M -36 12 C -36 -18, 36 -18, 36 12" fill="none" stroke="{accent}" stroke-width="5" stroke-linecap="round"/>
    <rect x="-44" y="8" width="16" height="26" rx="8" fill="{color}"/>
    <rect x="28" y="8" width="16" height="26" rx="8" fill="{color}"/>
  </g>

  <!-- Initials -->
  <text x="160" y="195" font-family="'Cinzel', 'Georgia', serif" font-size="44" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="3" filter="url(#glow)">
    {initials}
  </text>

  <!-- Label Banner -->
  <rect x="50" y="228" width="220" height="28" rx="14" fill="#0b111e" stroke="{color}" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="160" y="247" font-family="'Inter', -apple-system, sans-serif" font-size="11" font-weight="700" fill="{accent}" text-anchor="middle" letter-spacing="1.8">
    AUDIBLE ENSEMBLE
  </text>
  
  <text x="160" y="278" font-family="'Inter', -apple-system, sans-serif" font-size="9" font-weight="500" fill="#94a3b8" text-anchor="middle" opacity="0.9">
    Dolby Atmos Voice Artist
  </text>
</svg>"""

def create_cut_film_svg(character_name):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="320" height="320">
  <defs>
    <radialGradient id="cutBg" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#2a1215"/>
      <stop offset="70%" stop-color="#1a0b0d"/>
      <stop offset="100%" stop-color="#0b0405"/>
    </radialGradient>
  </defs>

  <!-- Background Circle -->
  <circle cx="160" cy="160" r="154" fill="url(#cutBg)" stroke="#e11d48" stroke-width="4" stroke-opacity="0.6"/>
  <circle cx="160" cy="160" r="140" fill="none" stroke="#f43f5e" stroke-opacity="0.2" stroke-dasharray="6,6" stroke-width="2"/>

  <!-- Film Reel Slash Icon -->
  <g transform="translate(160, 110)">
    <circle cx="0" cy="0" r="32" fill="none" stroke="#f43f5e" stroke-width="4"/>
    <circle cx="0" cy="0" r="8" fill="#f43f5e"/>
    <circle cx="-14" cy="-14" r="5" fill="#f43f5e"/>
    <circle cx="14" cy="-14" r="5" fill="#f43f5e"/>
    <circle cx="-14" cy="14" r="5" fill="#f43f5e"/>
    <circle cx="14" cy="14" r="5" fill="#f43f5e"/>
    <line x1="-38" y1="38" x2="38" y2="-38" stroke="#f43f5e" stroke-width="4" stroke-linecap="round"/>
  </g>

  <!-- Heading -->
  <text x="160" y="195" font-family="'Cinzel', 'Georgia', serif" font-size="20" font-weight="bold" fill="#fda4af" text-anchor="middle" letter-spacing="1">
    CUT FROM FILMS
  </text>

  <!-- Banner -->
  <rect x="40" y="222" width="240" height="28" rx="14" fill="#180709" stroke="#e11d48" stroke-width="1.5"/>
  <text x="160" y="241" font-family="'Inter', -apple-system, sans-serif" font-size="11" font-weight="700" fill="#f43f5e" text-anchor="middle" letter-spacing="1.5">
    AUDIOBOOK EXCLUSIVE
  </text>

  <text x="160" y="274" font-family="'Inter', -apple-system, sans-serif" font-size="10" font-weight="500" fill="#cbd5e1" text-anchor="middle">
    Not featured in WB Movie adaptations
  </text>
</svg>"""

def main():
    # Generate Audible voice SVGs
    for cid, info in AUDIBLE_ACTORS.items():
        svg_content = create_audible_svg(info["initials"], info["name"], info["color"], info["accent"])
        for base in [ACTOR_DIST, ACTOR_SRC]:
            p = os.path.join(base, f"audible_{cid}.svg")
            with open(p, "w", encoding="utf-8") as f:
                f.write(svg_content)
        print(f"Generated audible SVG for {cid}")

    # Generate Cut From Film SVGs for movie column
    for cid in ["ludo_bagman", "winky"]:
        svg_content = create_cut_film_svg(cid)
        for base in [ACTOR_DIST, ACTOR_SRC]:
            p = os.path.join(base, f"movie_{cid}.svg")
            with open(p, "w", encoding="utf-8") as f:
                f.write(svg_content)
        print(f"Generated cut film SVG for movie_{cid}")

if __name__ == "__main__":
    main()
