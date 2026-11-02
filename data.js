// Harry Potter Cast Comparison Dataset: Movies vs Audible Full Ensemble
const HP_BOOKS_DATA = [
  {
    "id": 1,
    "title": "Harry Potter and the Philosopher's / Sorcerer's Stone",
    "shortTitle": "1. Philosopher's Stone",
    "bookYear": 1997,
    "movieYear": 2001,
    "audibleYear": "Nov 2025",
    "movieDirector": "Chris Columbus",
    "audibleNarrator": "Cush Jumbo OBE",
    "synopsis": "Harry discovers his magical heritage on his 11th birthday, arrives at Hogwarts School of Witchcraft and Wizardry, and protects the legendary Philosopher's Stone from Lord Voldemort and Professor Quirrell.",
    "audibleCastEra": "Child Voice Cast (Books 1\u20133)",
    "shiftSummary": "First introduction of Frankie Treadaway, Max Lester, and Arabella Stanton as the youthful Golden Trio. Richard Harris debuts as Movie Dumbledore; Hugh Laurie voices Dumbledore for Audible.",
    "icon": "\u26a1"
  },
  {
    "id": 2,
    "title": "Harry Potter and the Chamber of Secrets",
    "shortTitle": "2. Chamber of Secrets",
    "bookYear": 1998,
    "movieYear": 2002,
    "audibleYear": "Dec 2025",
    "movieDirector": "Chris Columbus",
    "audibleNarrator": "Cush Jumbo OBE",
    "synopsis": "Dark warnings from Dobby the House-Elf precede petrifications at Hogwarts. The Chamber of Secrets has been opened, unleashing Salazar Slytherin's Basilisk and Tom Riddle's preserved 16-year-old memory.",
    "audibleCastEra": "Child Voice Cast (Books 1\u20133)",
    "shiftSummary": "Introduces Kit Harington as Gilderoy Lockhart, Daniel Mays as Dobby, Alex Hassell as Lucius Malfoy, Simon Pegg as Arthur Weasley, and Oscar Brudenall-Jones as Tom Riddle. Richard Harris's final film as Dumbledore before his passing.",
    "icon": "\ud83d\udc0d"
  },
  {
    "id": 3,
    "title": "Harry Potter and the Prisoner of Azkaban",
    "shortTitle": "3. Prisoner of Azkaban",
    "bookYear": 1999,
    "movieYear": 2004,
    "audibleYear": "Jan 2026",
    "movieDirector": "Alfonso Cuar\u00f3n",
    "audibleNarrator": "Cush Jumbo OBE",
    "synopsis": "Notorious convict Sirius Black escapes Azkaban prison, Dementors patrol Hogwarts, and Harry uncovers the truth about the Marauders, his godfather, and Peter Pettigrew's ultimate betrayal.",
    "audibleCastEra": "Child Voice Cast (Books 1\u20133) [Final Book of Era 1]",
    "shiftSummary": "MAJOR MOVIE RECAST: Michael Gambon takes over Dumbledore from the late Richard Harris; Dawn French replaces Elizabeth Spriggs as The Fat Lady. Audible introduces Sope Dirisu as Sirius Black, Iwan Rheon as Remus Lupin, Blake Harrison as Wormtail, and Matt Berry as Sir Cadogan.",
    "icon": "\ud83d\udc3a"
  },
  {
    "id": 4,
    "title": "Harry Potter and the Goblet of Fire",
    "shortTitle": "4. Goblet of Fire",
    "bookYear": 2000,
    "movieYear": 2005,
    "audibleYear": "Feb 2026",
    "movieDirector": "Mike Newell",
    "audibleNarrator": "Cush Jumbo OBE",
    "synopsis": "Harry is mysteriously entered into the deadly Triwizard Tournament against older champions, culminating in the resurrection of Lord Voldemort in the Little Hangleton graveyard.",
    "audibleCastEra": "Teen / Mature Voice Cast (Books 4\u20137) [MAJOR AUDIBLE TURNING POINT]",
    "shiftSummary": "MAJOR AUDIBLE CAST SHIFT: The Golden Trio and student body transition to older actors! Jaxon Knopf replaces Frankie Treadaway as Harry; Rhys Mulligan replaces Max Lester as Ron; Nina Barker-Francis replaces Arabella Stanton as Hermione. Movie introduces Ralph Fiennes as physical Voldemort and Brendan Gleeson as Mad-Eye Moody (voiced by James McAvoy in Audible). Characters cut from the film like Ludo Bagman (Danny Kirrane) and Winky (Clare Corbett) appear in the audio edition!",
    "icon": "\ud83c\udfc6"
  },
  {
    "id": 5,
    "title": "Harry Potter and the Order of the Phoenix",
    "shortTitle": "5. Order of the Phoenix",
    "bookYear": 2003,
    "movieYear": 2007,
    "audibleYear": "Mar 2026",
    "movieDirector": "David Yates",
    "audibleNarrator": "Cush Jumbo OBE",
    "synopsis": "The Ministry denies Voldemort's return, installing Dolores Umbridge as High Inquisitor. Harry founds Dumbledore's Army to prepare for war as the Order fights from 12 Grimmauld Place.",
    "audibleCastEra": "Teen / Mature Voice Cast (Books 4\u20137)",
    "shiftSummary": "Audible casting highlights: Keira Knightley portrays Dolores Umbridge with terrifying sweetness; Ruth Wilson debuts as Bellatrix Lestrange; Abraham Popoola as Kingsley Shacklebolt; and Mackenzie Crook as Kreacher.",
    "icon": "\ud83d\udd25"
  },
  {
    "id": 6,
    "title": "Harry Potter and the Half-Blood Prince",
    "shortTitle": "6. Half-Blood Prince",
    "bookYear": 2005,
    "movieYear": 2009,
    "audibleYear": "Apr 2026",
    "movieDirector": "David Yates",
    "audibleNarrator": "Cush Jumbo OBE",
    "synopsis": "Dumbledore guides Harry through Voldemort's dark past using the Pensieve to unravel the mystery of Horcruxes, while Malfoy plots within Hogwarts and the mysterious Half-Blood Prince aids Harry's potions work.",
    "audibleCastEra": "Teen / Mature Voice Cast (Books 4\u20137)",
    "shiftSummary": "CROSSOVER CASTING: Bill Nighy (who played Rufus Scrimgeour in Deathly Hallows Part 1 film) voices Horace Slughorn in Audible! Jessica Henwick voices Narcissa Malfoy. Audible also includes the Gaunt family pensieve memories (Finbar Lynch as Marvolo, Pete Gold as Morfin) completely cut from the movie.",
    "icon": "\ud83e\uddea"
  },
  {
    "id": 7,
    "title": "Harry Potter and the Deathly Hallows",
    "shortTitle": "7. Deathly Hallows (Parts 1 & 2)",
    "bookYear": 2007,
    "movieYear": "2010 (Pt 1) / 2011 (Pt 2)",
    "audibleYear": "May 2026",
    "movieDirector": "David Yates",
    "audibleNarrator": "Cush Jumbo OBE",
    "synopsis": "Harry, Ron, and Hermione abandon Hogwarts to hunt Voldemort's Horcruxes on the run, leading to the ultimate standoff: The Battle of Hogwarts and the '19 Years Later' epilogue at Platform 9\u00be.",
    "audibleCastEra": "Mature Cast (Books 4\u20137) + Epilogue Adult Cast",
    "shiftSummary": "EPILOGUE CASTING: In Audible, adult voices take over for the 19 Years Later chapter: Sam Stafford (Adult Harry), Matthew Houston (Adult Ron), Saffron Coomber (Adult Hermione), and Claire-Louise Cordwell (Adult Ginny). In movies, the original actors wore prosthetic aging makeup. Features Jamie Demetriou as Xenophilius Lovegood and Leo Woodall as Bill Weasley.",
    "icon": "\u2694\ufe0f"
  }
];

const HP_CHARACTERS_DATA = [
  {
    "id": "harry_potter",
    "name": "Harry Potter",
    "role": "The Boy Who Lived / Gryffindor Seeker",
    "category": "Golden Trio",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Recast (Book 4)",
      "Epilogue Adult Recast"
    ],
    "shiftSummary": "Audible divided Harry into three ages: young boy (Books 1\u20133), maturing teenager (Books 4\u20137), and grown adult (Epilogue). The film retained Daniel Radcliffe through all 8 movies, applying prosthetic makeup for the epilogue.",
    "movie": {
      "actor": "Daniel Radcliffe",
      "wiki": "https://en.wikipedia.org/wiki/Daniel_Radcliffe",
      "img": "images/actors/movie_harry_potter.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Cast at age 11, Daniel Radcliffe aged in real time alongside Harry over a 10-year period, performing iconic stunt work and evolving Harry from wonderstruck orphan to battle-hardened hero."
    },
    "audible": {
      "actor": "Frankie Treadaway (B1\u20133) / Jaxon Knopf (B4\u20137)",
      "secondaryActor": "Adult Harry: Sam Stafford",
      "wiki": "https://en.wikipedia.org/wiki/Daniel_Radcliffe",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_harry_potter.svg",
      "coverage": "Books 1\u20133 (Treadaway) | Books 4\u20137 (Knopf) | Epilogue (Stafford)",
      "notes": "Audible's dual-casting reflects vocal puberty and emotional gravitas: Frankie Treadaway captures Harry's early vulnerability and awe, while Jaxon Knopf brings angsty power and weary determination from Goblet of Fire onward."
    },
    "trivia": "In the Audible Dolby Atmos mix, Harry's Parseltongue is whispered through multi-channel 3D audio, surrounding the listener in binaural snake-like hisses.",
    "characterImg": "images/characters/harry_potter.jpg"
  },
  {
    "id": "hermione_granger",
    "name": "Hermione Granger",
    "role": "Brightest Witch of Her Age / Gryffindor",
    "category": "Golden Trio",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Recast (Book 4)",
      "Epilogue Adult Recast"
    ],
    "shiftSummary": "Audible casts Arabella Stanton for Books 1\u20133, Nina Barker-Francis for Books 4\u20137, and Saffron Coomber for the adult epilogue. Emma Watson portrayed Hermione in all 8 films.",
    "movie": {
      "actor": "Emma Watson",
      "wiki": "https://en.wikipedia.org/wiki/Emma_Watson",
      "img": "images/actors/movie_hermione_granger.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Emma Watson's iconic performance brought sharp intellect, fierce poise, and emotional vulnerability, defining Hermione for a global generation."
    },
    "audible": {
      "actor": "Arabella Stanton (B1\u20133) / Nina Barker-Francis (B4\u20137)",
      "secondaryActor": "Adult Hermione: Saffron Coomber",
      "wiki": "https://en.wikipedia.org/wiki/Saffron_Coomber",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_hermione_granger.svg",
      "coverage": "Books 1\u20133 (Stanton) | Books 4\u20137 (Barker-Francis) | Epilogue (Coomber)",
      "notes": "Arabella Stanton plays young Hermione's bossy know-it-all cadence with charm; Nina Barker-Francis captures Hermione's teenage emotional depth, SPEW activism, and war-room strategic brilliance."
    },
    "trivia": "The Audible edition fully restores Hermione's S.P.E.W. (Society for the Promotion of Elfish Welfare) storyline, which was entirely omitted from the movie adaptations.",
    "characterImg": "images/characters/hermione_granger.jpg"
  },
  {
    "id": "ron_weasley",
    "name": "Ron Weasley",
    "role": "Harry's Loyal Best Friend / Gryffindor Keeper",
    "category": "Golden Trio",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Recast (Book 4)",
      "Epilogue Adult Recast"
    ],
    "shiftSummary": "Audible transitions from child actor Max Lester (Books 1\u20133) to Rhys Mulligan (Books 4\u20137), with Matthew Houston voicing adult Ron. Rupert Grint portrayed Ron across all 8 films.",
    "movie": {
      "actor": "Rupert Grint",
      "wiki": "https://en.wikipedia.org/wiki/Rupert_Grint",
      "img": "images/actors/movie_ron_weasley.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Rupert Grint brought peerless comedic timing, expressive facial comedy, and fierce heart to Ron across a decade on screen."
    },
    "audible": {
      "actor": "Max Lester (B1\u20133) / Rhys Mulligan (B4\u20137)",
      "secondaryActor": "Adult Ron: Matthew Houston",
      "wiki": "https://en.wikipedia.org/wiki/Rupert_Grint",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_ron_weasley.svg",
      "coverage": "Books 1\u20133 (Lester) | Books 4\u20137 (Mulligan) | Epilogue (Houston)",
      "notes": "Max Lester gives young Ron an earnest, squeaky warmth; Rhys Mulligan voices Ron's deeper teenage insecurities, jealousy, and fierce courage during the Horcrux hunt."
    },
    "trivia": "In the Audible audiobooks, Ron gets back dozens of book-original lines and wizarding knowledge explanations that the movie screenplays had reassigned to Hermione.",
    "characterImg": "images/characters/ron_weasley.jpg"
  },
  {
    "id": "albus_dumbledore",
    "name": "Albus Dumbledore",
    "role": "Headmaster of Hogwarts / Supreme Mugwump",
    "category": "Hogwarts Faculty & Staff",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Movie Recast (Movie 3)",
      "Audible Continuity"
    ],
    "shiftSummary": "In the movies, Richard Harris portrayed Dumbledore in Films 1\u20132 before passing away; Michael Gambon took over for Films 3\u20138 with a more energetic, turbulent style. In Audible, Hugh Laurie voices Dumbledore consistently across all 7 books.",
    "movie": {
      "actor": "Richard Harris (M1\u20132) / Michael Gambon (M3\u20138)",
      "wiki": "https://en.wikipedia.org/wiki/Michael_Gambon",
      "secondaryWiki": "https://en.wikipedia.org/wiki/Richard_Harris",
      "img": "images/actors/movie_albus_dumbledore.jpg",
      "coverage": "Movies 1\u20132 (Harris) | Movies 3\u20138 (Gambon)",
      "notes": "Harris brought fairy-tale twinkling gentleness; Gambon injected fierce vitality, famously yelling 'HARRY, DID YOU PUT YOUR NAME IN THE GOBLET OF FIRE?!'"
    },
    "audible": {
      "actor": "Hugh Laurie",
      "wiki": "https://en.wikipedia.org/wiki/Hugh_Laurie",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_albus_dumbledore.jpg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Beloved star Hugh Laurie (House, Blackadder) delivers an exquisite balance: calm grandfatherly wit, profound philosophical sadness, and terrifying subterranean authority when provoked."
    },
    "trivia": "Hugh Laurie voiced Dumbledore for the entire Audible marathon, delivering the line 'Harry, did you put your name in the Goblet of Fire?' calmly, exactly as J.K. Rowling wrote it in the book.",
    "characterImg": "images/characters/albus_dumbledore.jpg"
  },
  {
    "id": "severus_snape",
    "name": "Severus Snape",
    "role": "Potions Master / Head of Slytherin / Headmaster",
    "category": "Hogwarts Faculty & Staff",
    "house": "Slytherin",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting",
      "Young Flashback Actors"
    ],
    "shiftSummary": "Alan Rickman created a definitive legendary screen performance in all 8 movies. In Audible, Oscar and Emmy winner Riz Ahmed takes on the complex antihero.",
    "movie": {
      "actor": "Alan Rickman",
      "wiki": "https://en.wikipedia.org/wiki/Alan_Rickman",
      "img": "images/actors/movie_severus_snape.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Alan Rickman's deep, languid baritone, iconic pauses, and tragic emotional reveal in 'The Prince's Tale' created one of cinema history's greatest performances."
    },
    "audible": {
      "actor": "Riz Ahmed",
      "secondaryActor": "Young: Raj Swamy | Child: Mylo Khan",
      "wiki": "https://en.wikipedia.org/wiki/Riz_Ahmed",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_severus_snape.jpg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Riz Ahmed (Sound of Metal, Rogue One, The Night Of) delivers a coiled, venomous, and deeply tragic interpretation, leaning into Snape's bitter sarcasm and repressed heartbreak."
    },
    "trivia": "J.K. Rowling had personally told Alan Rickman Snape's secret 'Always' backstory years before Deathly Hallows was published so he could calibrate his acting accordingly.",
    "characterImg": "images/characters/severus_snape.jpg"
  },
  {
    "id": "minerva_mcgonagall",
    "name": "Minerva McGonagall",
    "role": "Transfiguration Professor / Deputy Headmistress",
    "category": "Hogwarts Faculty & Staff",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Dame Maggie Smith brought unforgettable aristocratic Scottish grandeur to all 8 films. Michelle Gomez voices McGonagall in Audible with sharp Scottish wit.",
    "movie": {
      "actor": "Maggie Smith",
      "wiki": "https://en.wikipedia.org/wiki/Maggie_Smith",
      "img": "images/actors/movie_minerva_mcgonagall.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Dame Maggie Smith balanced fierce disciplinary authority with fierce maternal protection, uttering classics like 'I've always wanted to use that spell!'"
    },
    "audible": {
      "actor": "Michelle Gomez",
      "wiki": "https://en.wikipedia.org/wiki/Michelle_Gomez",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_minerva_mcgonagall.jpg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Scottish actress Michelle Gomez (Doctor Who's Missy, The Flight Attendant) brings razor-sharp comedic timing, crisp brogue, and commanding courage during the Battle of Hogwarts."
    },
    "trivia": "Michelle Gomez's fiery delivery of McGonagall offering Harry a biscuit while eviscerating Umbridge's educational decrees in Book 5 is an audio standout.",
    "characterImg": "images/characters/minerva_mcgonagall.jpg"
  },
  {
    "id": "rubeus_hagrid",
    "name": "Rubeus Hagrid",
    "role": "Keeper of Keys and Grounds / Care of Magical Creatures",
    "category": "Hogwarts Faculty & Staff",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Robbie Coltrane's gentle giant in the films was followed by Mark Addy voicing Hagrid across all 7 books in Audible.",
    "movie": {
      "actor": "Robbie Coltrane",
      "wiki": "https://en.wikipedia.org/wiki/Robbie_Coltrane",
      "img": "images/actors/movie_rubeus_hagrid.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Robbie Coltrane's warm West Country rumble made Hagrid the emotional heartbeat of the cinematic universe ('Yer a wizard, Harry')."
    },
    "audible": {
      "actor": "Mark Addy",
      "secondaryActor": "Young Hagrid: Patrick Davies",
      "wiki": "https://en.wikipedia.org/wiki/Mark_Addy",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_rubeus_hagrid.jpg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Mark Addy (Robert Baratheon in Game of Thrones, The Full Monty) channels Hagrid's booming, sentimental giant-heart with Yorkshire/West-Country warmth and comic tears."
    },
    "trivia": "Mark Addy also recorded Hagrid's giant half-brother Grawp's vocal interactions alongside Finbar Lynch.",
    "characterImg": "images/characters/rubeus_hagrid.jpg"
  },
  {
    "id": "lord_voldemort",
    "name": "Lord Voldemort / Tom Riddle",
    "role": "The Dark Lord / Heir of Slytherin",
    "category": "Death Eaters & Dark Forces",
    "house": "Slytherin",
    "booksActive": [
      1,
      2,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Movie Recasts Across Forms",
      "Audible Star Casting"
    ],
    "shiftSummary": "Movies used Richard Bremmer & Ian Hart (M1), Christian Coulson (M2 16yo), Ralph Fiennes (M4\u20138), and Hero Fiennes Tiffin & Frank Dillane (M6). Audible casts Matthew Macfadyen as Voldemort and Oscar Brudenall-Jones / Sam Squire as Tom Riddle.",
    "movie": {
      "actor": "Ralph Fiennes (M4\u20138) / Christian Coulson (M2)",
      "secondaryActor": "Young: Hero Fiennes Tiffin & Frank Dillane (M6) | Face: Richard Bremmer (M1)",
      "wiki": "https://en.wikipedia.org/wiki/Ralph_Fiennes",
      "img": "images/actors/movie_lord_voldemort.jpg",
      "coverage": "M1 (Bremmer), M2 (Coulson), M4\u20138 (Fiennes), M6 (Fiennes Tiffin, Dillane)",
      "notes": "Ralph Fiennes' theatrical, hissing, aristocratic nightmare with no nose created a terrifying cinematic terror ('NYAAAH!')."
    },
    "audible": {
      "actor": "Matthew Macfadyen (Lord Voldemort)",
      "secondaryActor": "Tom Riddle: Oscar Brudenall-Jones | Young: Sam Squire",
      "wiki": "https://en.wikipedia.org/wiki/Matthew_Macfadyen",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_lord_voldemort.jpg",
      "coverage": "Books 1, 4\u20137 (Macfadyen) | Books 2 & 6 (Brudenall-Jones, Squire)",
      "notes": "Succession star Matthew Macfadyen portrays Voldemort with chilling quiet sophistication, predatory whispered sibilance, and sudden explosive malice."
    },
    "trivia": "In Dolby Atmos, Matthew Macfadyen's telepathic Voldemort voice in Book 5 actually whispers directly inside the listener's ear cups, mimicking Harry's mental intrusion.",
    "characterImg": "images/characters/lord_voldemort.jpg"
  },
  {
    "id": "narrator",
    "name": "The Narrator",
    "role": "Omniscient Guide & Storyteller of the Wizarding World",
    "category": "Narrator",
    "house": "Hogwarts",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Exclusive Anchor",
      "Audiobook Centerpiece"
    ],
    "shiftSummary": "Movies do not have a narrator, using visual cinematic storytelling. The Audible series features Cush Jumbo OBE guiding listeners through all 7 books alongside 500+ actors.",
    "movie": {
      "actor": "N/A (Visual Cinema Medium)",
      "wiki": "https://en.wikipedia.org/wiki/Harry_Potter_(film_series)",
      "img": "images/actors/movie_narrator.jpg",
      "coverage": "N/A (Film direction by Columbus, Cuar\u00f3n, Newell, Yates)",
      "notes": "The films rely on mise-en-sc\u00e8ne, John Williams' musical score, and visual effects rather than an omniscient narrative voice."
    },
    "audible": {
      "actor": "Cush Jumbo OBE",
      "wiki": "https://en.wikipedia.org/wiki/Cush_Jumbo",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_narrator.jpg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Olivier-nominated and OBE honoree Cush Jumbo (The Good Fight, Criminal Record) acts as the lyrical spine of the entire production, narrating scene descriptions, magical lore, and dramatic pauses."
    },
    "trivia": "Cush Jumbo recorded over 200 studio hours for the complete 7-book cycle, working in Dolby Atmos spatial audio soundstages.",
    "characterImg": "images/characters/narrator.jpg"
  },
  {
    "id": "draco_malfoy",
    "name": "Draco Malfoy",
    "role": "Slytherin Rival / Seeker / Reluctant Death Eater",
    "category": "Hogwarts Students",
    "house": "Slytherin",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Recast (Book 4)",
      "Movie Continuity"
    ],
    "shiftSummary": "Tom Felton played Draco across all 8 movies. Audible casts Jude Farrant for Books 1\u20133, transitioning to Maximus Evans for Books 4\u20137.",
    "movie": {
      "actor": "Tom Felton",
      "wiki": "https://en.wikipedia.org/wiki/Tom_Felton",
      "img": "images/actors/movie_draco_malfoy.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Tom Felton transformed Draco from a slick-backed playground bully into a conflicted, terrified boy trapped by Voldemort's demands in Half-Blood Prince."
    },
    "audible": {
      "actor": "Jude Farrant (B1\u20133) / Maximus Evans (B4\u20137)",
      "wiki": "https://en.wikipedia.org/wiki/Maximus_Evans",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_draco_malfoy.svg",
      "coverage": "Books 1\u20133 (Farrant) | Books 4\u20137 (Evans)",
      "notes": "Maximus Evans (known for playing villain Corey Brent in Coronation Street) takes over from Book 4, giving Draco an oily sneer that crumbles into terrified remorse in the Vanishing Cabinet scenes."
    },
    "trivia": "Audible's sound design includes the mechanical clicking of Draco's Vanishing Cabinet echoing across the Room of Requirement in Book 6.",
    "characterImg": "images/characters/draco_malfoy.jpg"
  },
  {
    "id": "neville_longbottom",
    "name": "Neville Longbottom",
    "role": "Gryffindor Herbologist / D.A. Leader / Hero of Hogwarts",
    "category": "Hogwarts Students",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Recast (Book 4)",
      "Movie Continuity"
    ],
    "shiftSummary": "Matthew Lewis played Neville in all 8 movies. Audible casts Jake Sigsworth for Books 1\u20133 and Archie Mountain for Books 4\u20137.",
    "movie": {
      "actor": "Matthew Lewis",
      "wiki": "https://en.wikipedia.org/wiki/Matthew_Lewis_(actor)",
      "img": "images/actors/movie_neville_longbottom.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Matthew Lewis embodied the ultimate transformation in cinema, from the toad-losing boy petrified by Hermione to pulling Gryffindor's sword to slay Nagini."
    },
    "audible": {
      "actor": "Jake Sigsworth (B1\u20133) / Archie Mountain (B4\u20137)",
      "wiki": "https://en.wikipedia.org/wiki/Matthew_Lewis_(actor)",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_neville_longbottom.svg",
      "coverage": "Books 1\u20133 (Sigsworth) | Books 4\u20137 (Mountain)",
      "notes": "Archie Mountain guides Neville through the tragic St. Mungo's hospital encounter with his parents and his rebellious leadership of Hogwarts during Deathly Hallows."
    },
    "trivia": "In the audio production, the St. Mungo's scene where Neville's mother hands him a Drooble's chewing gum wrapper is voiced with heart-wrenching emotional subtlety.",
    "characterImg": "images/characters/neville_longbottom.jpg"
  },
  {
    "id": "sirius_black",
    "name": "Sirius Black",
    "role": "Padfoot / Harry's Godfather / Order of the Phoenix",
    "category": "Order of the Phoenix",
    "house": "Gryffindor",
    "booksActive": [
      3,
      4,
      5,
      7
    ],
    "tags": [
      "Audible Star Casting",
      "Young Flashback Actors"
    ],
    "shiftSummary": "Gary Oldman played Sirius in Movies 3, 4, 5, and 8. \u1e62\u1ecdp\u1eb9\u0301 D\u00ecr\u00eds\u00f9 voices Sirius in Audible across Books 3, 4, 5, and 7.",
    "movie": {
      "actor": "Gary Oldman",
      "wiki": "https://en.wikipedia.org/wiki/Gary_Oldman",
      "img": "images/actors/movie_sirius_black.jpg",
      "coverage": "Movies 3, 4 (cameo), 5, 8",
      "notes": "Gary Oldman brought aristocratic rock-and-roll rebellion, feral desperation, and tender fatherly love to Sirius Black."
    },
    "audible": {
      "actor": "\u1e62\u1ecdp\u1eb9\u0301 D\u00ecr\u00eds\u00f9",
      "secondaryActor": "Young: Anthony J. Abraham | Child: Dylan Trigger",
      "wiki": "https://en.wikipedia.org/wiki/Sope_Dirisu",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_sirius_black.jpg",
      "coverage": "Books 3, 4, 5, 7 (D\u00ecr\u00eds\u00f9)",
      "notes": "Sope Dirisu (Gangs of London, His House, Slow Horses) gives Sirius a rich, haunted timbre, balancing 12 years of Azkaban anguish with reckless, protective courage."
    },
    "trivia": "In Book 4, Sirius communicates with Harry by fire in the Gryffindor common room; the Audible team layered Dirisu's voice with crackling hearth ember acoustics.",
    "characterImg": "images/characters/sirius_black.jpg"
  },
  {
    "id": "remus_lupin",
    "name": "Remus Lupin",
    "role": "Moony / Defense Against the Dark Arts Teacher / Order Member",
    "category": "Order of the Phoenix",
    "house": "Gryffindor",
    "booksActive": [
      3,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "David Thewlis played Lupin in Movies 3, 5, 6, 7, and 8. Iwan Rheon voices Lupin in Audible across Books 3, 5, 6, and 7.",
    "movie": {
      "actor": "David Thewlis",
      "wiki": "https://en.wikipedia.org/wiki/David_Thewlis",
      "img": "images/actors/movie_remus_lupin.jpg",
      "coverage": "Movies 3, 5, 6, 7, 8",
      "notes": "David Thewlis brought threadbare gentleness, melancholy kindness, and deep intellectual warmth to the afflicted werewolf."
    },
    "audible": {
      "actor": "Iwan Rheon",
      "secondaryActor": "Young Lupin: Richard Stranks",
      "wiki": "https://en.wikipedia.org/wiki/Iwan_Rheon",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_remus_lupin.jpg",
      "coverage": "Books 3, 5, 6, 7 (Rheon)",
      "notes": "Iwan Rheon (Game of Thrones' Ramsay Bolton, Misfits) plays against his villain type with deep empathy, soft-spoken wisdom, and fierce protective instincts as Moony."
    },
    "trivia": "The 'Boggart in the Wardrobe' lesson in Book 3 features Rheon cheerfully directing students while Matt Berry's Sir Cadogan shouts in the background.",
    "characterImg": "images/characters/remus_lupin.jpg"
  },
  {
    "id": "dolores_umbridge",
    "name": "Dolores Umbridge",
    "role": "Senior Undersecretary / High Inquisitor / Headmistress",
    "category": "Ministry & Civilians",
    "house": "Slytherin",
    "booksActive": [
      5,
      7
    ],
    "tags": [
      "Audible Star Casting Coup"
    ],
    "shiftSummary": "Imelda Staunton delivered one of the most hated villains in film history in Movies 5 and 7. In a massive casting coup, Oscar nominee Keira Knightley voices Umbridge in Audible.",
    "movie": {
      "actor": "Imelda Staunton",
      "wiki": "https://en.wikipedia.org/wiki/Imelda_Staunton",
      "img": "images/actors/movie_dolores_umbridge.jpg",
      "coverage": "Movies 5 & 7",
      "notes": "Imelda Staunton's pink-cardiganed, kitten-loving bureaucrat with her prim 'Hem, hem' cough remains universally despised and acclaimed."
    },
    "audible": {
      "actor": "Keira Knightley",
      "wiki": "https://en.wikipedia.org/wiki/Keira_Knightley",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_dolores_umbridge.jpg",
      "coverage": "Books 5 & 7",
      "notes": "Keira Knightley (Pride & Prejudice, Pirates of the Caribbean, Atonement) surprises listeners with a baby-voiced, sugar-coated cruelty that turns into bloodcurdling sadism during blood quill detentions."
    },
    "trivia": "Listeners were stunned by Keira Knightley's vocal transformation, masking her famous natural voice completely under an eerie, sing-song purr.",
    "characterImg": "images/characters/dolores_umbridge.jpg"
  },
  {
    "id": "bellatrix_lestrange",
    "name": "Bellatrix Lestrange",
    "role": "Voldemort's Most Loyal Lieutenant / Death Eater",
    "category": "Death Eaters & Dark Forces",
    "house": "Slytherin",
    "booksActive": [
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Helena Bonham Carter defined Bellatrix's wild gothic madness in Movies 5\u20138. Ruth Wilson voices Bellatrix in Audible across Books 4\u20137.",
    "movie": {
      "actor": "Helena Bonham Carter",
      "wiki": "https://en.wikipedia.org/wiki/Helena_Bonham_Carter",
      "img": "images/actors/movie_bellatrix_lestrange.jpg",
      "coverage": "Movies 5, 6, 7, 8",
      "notes": "Helena Bonham Carter brought wild unhinged hair, baby-talk cruelty ('I killed Sirius Black!'), and feral devotion to Voldemort."
    },
    "audible": {
      "actor": "Ruth Wilson",
      "wiki": "https://en.wikipedia.org/wiki/Ruth_Wilson",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_bellatrix_lestrange.jpg",
      "coverage": "Books 4 (Pensieve cameo), 5, 6, 7",
      "notes": "Golden Globe winner Ruth Wilson (Luther's Alice Morgan, His Dark Materials' Mrs. Coulter) plays Bellatrix with lethal aristocratic poise that snaps into rabid, shrieking frenzy."
    },
    "trivia": "Ruth Wilson's vocal performance in the Malfoy Manor interrogation in Book 7 features terrifying psychological cruelty opposite Nina Barker-Francis's Hermione.",
    "characterImg": "images/characters/bellatrix_lestrange.jpg"
  },
  {
    "id": "gilderoy_lockhart",
    "name": "Gilderoy Lockhart",
    "role": "Defense Against the Dark Arts Teacher / Fraudulent Celebrity",
    "category": "Hogwarts Faculty & Staff",
    "house": "Ravenclaw",
    "booksActive": [
      2,
      5
    ],
    "tags": [
      "Audible Star Casting",
      "Book 5 St. Mungo's Return"
    ],
    "shiftSummary": "Sir Kenneth Branagh played Lockhart in Movie 2. Kit Harington voices Lockhart in Audible for Books 2 and 5 (the St. Mungo's hospital scene cut from the movie).",
    "movie": {
      "actor": "Kenneth Branagh",
      "wiki": "https://en.wikipedia.org/wiki/Kenneth_Branagh",
      "img": "images/actors/movie_gilderoy_lockhart.jpg",
      "coverage": "Movie 2 (Chamber of Secrets)",
      "notes": "Kenneth Branagh dazzled with his teeth-gleaming vanity, billowing robes, and hilarious cowardice ('Cornish pixies! Let's see what you make of them!')."
    },
    "audible": {
      "actor": "Kit Harington",
      "wiki": "https://en.wikipedia.org/wiki/Kit_Harington",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_gilderoy_lockhart.jpg",
      "coverage": "Books 2 & 5",
      "notes": "Kit Harington (Game of Thrones' Jon Snow) showcases dazzling comic range, playing Lockhart with ridiculous pomposity in Book 2 and delightful amnesiac cheerfulness in Book 5's Janus Thickey ward."
    },
    "trivia": "Kit Harington returns in Book 5 to sign autographs with peacock feathers in St. Mungo's Hospital\u2014a fan-favorite scene that never appeared in the film series!",
    "characterImg": "images/characters/gilderoy_lockhart.jpg"
  },
  {
    "id": "alastor_moody",
    "name": "Alastor 'Mad-Eye' Moody",
    "role": "Legendary Auror / Order of the Phoenix Leader",
    "category": "Order of the Phoenix",
    "house": "Hogwarts",
    "booksActive": [
      4,
      5,
      7
    ],
    "tags": [
      "Audible Hollywood Star Casting"
    ],
    "shiftSummary": "Brendan Gleeson played Mad-Eye Moody in Movies 4, 5, and 7. Hollywood A-lister James McAvoy voices Moody in Audible across Books 4, 5, and 7.",
    "movie": {
      "actor": "Brendan Gleeson",
      "wiki": "https://en.wikipedia.org/wiki/Brendan_Gleeson",
      "img": "images/actors/movie_alastor_moody.jpg",
      "coverage": "Movies 4, 5, 7",
      "notes": "Brendan Gleeson brought Irish brogue, mechanical stomping, swirling magical eye movements, and barking paranoia ('CONSTANT VIGILANCE!')."
    },
    "audible": {
      "actor": "James McAvoy",
      "wiki": "https://en.wikipedia.org/wiki/James_McAvoy",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_alastor_moody.jpg",
      "coverage": "Books 4, 5, 7",
      "notes": "James McAvoy (X-Men, Split, Atonement) turns in a gravelly, battle-scarred performance laden with ferocious intensity, guttural barks, and tragic loyalty."
    },
    "trivia": "Because Barty Crouch Jr. impersonates Moody for the entirety of Book 4, McAvoy had to subtly infuse his performance with slight hints of manic fanaticism.",
    "characterImg": "images/characters/alastor_moody.jpg"
  },
  {
    "id": "horace_slughorn",
    "name": "Horace Slughorn",
    "role": "Potions Master / Slug Club Founder / Slytherin Head",
    "category": "Hogwarts Faculty & Staff",
    "house": "Slytherin",
    "booksActive": [
      6,
      7
    ],
    "tags": [
      "Movie-to-Audio Star Crossover",
      "Bill Nighy Switch"
    ],
    "shiftSummary": "Jim Broadbent played Slughorn in Movies 6 and 8. In a legendary crossover, Bill Nighy (who played Minister Rufus Scrimgeour in Deathly Hallows Part 1 film) voices Slughorn in Audible!",
    "movie": {
      "actor": "Jim Broadbent",
      "wiki": "https://en.wikipedia.org/wiki/Jim_Broadbent",
      "img": "images/actors/movie_horace_slughorn.jpg",
      "coverage": "Movies 6 & 8",
      "notes": "Jim Broadbent portrayed Slughorn with bumbling vanity, guilty shame, and deep affection for Lily Potter, disguised as an armchair."
    },
    "audible": {
      "actor": "Bill Nighy",
      "wiki": "https://en.wikipedia.org/wiki/Bill_Nighy",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_horace_slughorn.jpg",
      "coverage": "Books 6 & 7",
      "notes": "Oscar nominee Bill Nighy brings his trademark theatrical drawl, velvety self-satisfaction, and profound remorse to Slughorn's Horcrux confession."
    },
    "trivia": "BILL NIGHY CASTING IRONIC CROSSOVER: Nighy played Minister Rufus Scrimgeour in the movie Deathly Hallows: Part 1! In Audible, Scrimgeour is voiced by Nicholas Boulton while Nighy plays Slughorn!",
    "characterImg": "images/characters/horace_slughorn.jpg"
  },
  {
    "id": "arthur_weasley",
    "name": "Arthur Weasley",
    "role": "Misuse of Muggle Artefacts Office / Order Member",
    "category": "Order of the Phoenix",
    "house": "Gryffindor",
    "booksActive": [
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Mark Williams played Arthur in Movies 2\u20138. Simon Pegg voices Arthur Weasley across Books 2\u20137 in Audible.",
    "movie": {
      "actor": "Mark Williams",
      "wiki": "https://en.wikipedia.org/wiki/Mark_Williams_(actor)",
      "img": "images/actors/movie_arthur_weasley.jpg",
      "coverage": "Movies 2\u20138",
      "notes": "Mark Williams brought endless gentle wonder to Muggle oddities ('Tell me, what exactly is the function of a rubber duck?')."
    },
    "audible": {
      "actor": "Simon Pegg",
      "wiki": "https://en.wikipedia.org/wiki/Simon_Pegg",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_arthur_weasley.jpg",
      "coverage": "Books 2\u20137",
      "notes": "Pop culture icon Simon Pegg (Shaun of the Dead, Hot Fuzz, Star Trek) infuses Arthur with boundless nerdy curiosity, warm fatherly devotion, and courage when confronting Lucius Malfoy."
    },
    "trivia": "Simon Pegg previously voiced Phineas Nigellus Black in the video game Hogwarts Legacy; here he takes over the warm-hearted Arthur Weasley!",
    "characterImg": "images/characters/arthur_weasley.jpg"
  },
  {
    "id": "molly_weasley",
    "name": "Molly Weasley",
    "role": "Matriarch of the Burrow / Order of the Phoenix",
    "category": "Order of the Phoenix",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Dame Julie Walters portrayed Molly across Movies 1\u20133 and 5\u20138. British comedy star Nina Wadia voices Molly in Audible.",
    "movie": {
      "actor": "Julie Walters",
      "wiki": "https://en.wikipedia.org/wiki/Julie_Walters",
      "img": "images/actors/movie_molly_weasley.jpg",
      "coverage": "Movies 1\u20133, 5\u20138",
      "notes": "Julie Walters provided heart, knitted sweaters, and the series' most iconic victory shout: 'NOT MY DAUGHTER, YOU BITCH!'"
    },
    "audible": {
      "actor": "Nina Wadia",
      "wiki": "https://en.wikipedia.org/wiki/Nina_Wadia",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_molly_weasley.jpg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Nina Wadia (Goodness Gracious Me, EastEnders, Aladdin) voices Molly with magnificent comic exasperation, deep emotional vulnerability over the Boggart, and lethal fury in the final duel."
    },
    "trivia": "Nina Wadia's performance of Molly's Howler to Ron in Chamber of Secrets is processed through Dolby Atmos reverberation that literally rattles the listener's headphones.",
    "characterImg": "images/characters/molly_weasley.jpg"
  },
  {
    "id": "ginny_weasley",
    "name": "Ginny Weasley",
    "role": "Gryffindor Chaser & Seeker / D.A. / Harry's True Love",
    "category": "Hogwarts Students",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Recast (Book 4)",
      "Book-to-Film Character Shift"
    ],
    "shiftSummary": "Bonnie Wright played Ginny in all 8 movies. Audible casts Bumble Clarke for Books 1\u20133, Shreya Lallu for Books 4\u20137, and Claire-Louise Cordwell for the adult epilogue.",
    "movie": {
      "actor": "Bonnie Wright",
      "wiki": "https://en.wikipedia.org/wiki/Bonnie_Wright",
      "img": "images/actors/movie_ginny_weasley.jpg",
      "coverage": "All 8 Movies (2001\u20132011)",
      "notes": "Bonnie Wright portrayed Ginny from shy first-year to D.A. warrior, though fans frequently noted that the films curtailed her fiery book personality."
    },
    "audible": {
      "actor": "Bumble Clarke (B1\u20133) / Shreya Lallu (B4\u20137)",
      "secondaryActor": "Adult Ginny: Claire-Louise Cordwell",
      "wiki": "https://en.wikipedia.org/wiki/Bonnie_Wright",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_ginny_weasley.svg",
      "coverage": "Books 1\u20133 (Clarke) | Books 4\u20137 (Lallu) | Epilogue (Cordwell)",
      "notes": "Shreya Lallu restores the fiery, witty, confident book-accurate Ginny Weasley\u2014casting Bat-Bogey Hexes, leading the rebellion at Hogwarts, and bantering with Harry."
    },
    "trivia": "Fans widely celebrated the Audible edition for restoring Ginny's sharp wit, fierce confidence, and natural romance with Harry that was muted in the movies.",
    "characterImg": "images/characters/ginny_weasley.jpg"
  },
  {
    "id": "luna_lovegood",
    "name": "Luna Lovegood",
    "role": "Ravenclaw Dreamer / D.A. Loyalist / The Quibbler Contributor",
    "category": "Hogwarts Students",
    "house": "Ravenclaw",
    "booksActive": [
      5,
      6,
      7
    ],
    "tags": [
      "Beloved Character Portrayals"
    ],
    "shiftSummary": "Evanna Lynch famously won the role over 15,000 applicants for Movies 5\u20138. Millie Gubby voices Luna in Audible across Books 5\u20137.",
    "movie": {
      "actor": "Evanna Lynch",
      "wiki": "https://en.wikipedia.org/wiki/Evanna_Lynch",
      "img": "images/actors/movie_luna_lovegood.jpg",
      "coverage": "Movies 5, 6, 7, 8",
      "notes": "Evanna Lynch's ethereal cadence, Radish earrings, and dreamy delivery made her an instant fan legend; J.K. Rowling admitted Lynch influenced her writing in later books."
    },
    "audible": {
      "actor": "Millie Gubby",
      "wiki": "https://en.wikipedia.org/wiki/Evanna_Lynch",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_luna_lovegood.svg",
      "coverage": "Books 5, 6, 7",
      "notes": "Millie Gubby captures Luna's floaty, matter-of-fact observations about Wrackspurts and Nargles while anchoring her fierce loyalty to her friends."
    },
    "trivia": "Luna's Quidditch commentary in Book 6\u2014talking about Loser's Lurgy rather than the match score\u2014is an absolute highlight in Millie Gubby's performance.",
    "characterImg": "images/characters/luna_lovegood.jpg"
  },
  {
    "id": "lucius_malfoy",
    "name": "Lucius Malfoy",
    "role": "Pureblood Aristocrat / Death Eater / School Governor",
    "category": "Death Eaters & Dark Forces",
    "house": "Slytherin",
    "booksActive": [
      2,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Jason Isaacs created the silver-maned, cane-wielding Lucius across Movies 2, 4, 5, 7, and 8. Alex Hassell voices Lucius in Audible across Books 2, 4\u20137.",
    "movie": {
      "actor": "Jason Isaacs",
      "wiki": "https://en.wikipedia.org/wiki/Jason_Isaacs",
      "img": "images/actors/movie_lucius_malfoy.jpg",
      "coverage": "Movies 2, 4, 5, 7, 8",
      "notes": "Jason Isaacs brought sneering patrician arrogance and invented the snake-headed cane wand, descending into pathetic dishevelment as Voldemort takes over Malfoy Manor."
    },
    "audible": {
      "actor": "Alex Hassell",
      "wiki": "https://en.wikipedia.org/wiki/Alex_Hassell",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_lucius_malfoy.jpg",
      "coverage": "Books 2, 4, 5, 6, 7",
      "notes": "Alex Hassell (Translucent in The Boys, Spike Spiegel in Cowboy Bebop) delivers Lucius's languid, venomous privilege, capturing his slow descent into terrified desperation."
    },
    "trivia": "Alex Hassell and Matthew Macfadyen share electric audio scenes in Book 7 where Voldemort demands Lucius surrender his wand at the Malfoy dining table.",
    "characterImg": "images/characters/lucius_malfoy.jpg"
  },
  {
    "id": "narcissa_malfoy",
    "name": "Narcissa Malfoy",
    "role": "Malfoy Matriarch / Draco's Protective Mother",
    "category": "Death Eaters & Dark Forces",
    "house": "Slytherin",
    "booksActive": [
      4,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "The late great Helen McCrory played Narcissa in Movies 6\u20138. Jessica Henwick voices Narcissa in Audible across Books 4, 6, and 7.",
    "movie": {
      "actor": "Helen McCrory",
      "wiki": "https://en.wikipedia.org/wiki/Helen_McCrory",
      "img": "images/actors/movie_narcissa_malfoy.jpg",
      "coverage": "Movies 6, 7, 8",
      "notes": "Helen McCrory brought fierce aristocratic dignity and maternal love, delivering the pivotal whisper in the forest: 'Is he alive? Is Draco alive?'"
    },
    "audible": {
      "actor": "Jessica Henwick",
      "wiki": "https://en.wikipedia.org/wiki/Jessica_Henwick",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_narcissa_malfoy.jpg",
      "coverage": "Books 4, 6, 7",
      "notes": "Jessica Henwick (Glass Onion, The Matrix Resurrections, Game of Thrones) portrays Narcissa's cold exterior cracking under maternal agony in the Spinner's End chapter with Riz Ahmed's Snape."
    },
    "trivia": "The 'Spinner's End' chapter in Half-Blood Prince is considered one of the highest-rated audio performances in the Audible production.",
    "characterImg": "images/characters/narcissa_malfoy.jpg"
  },
  {
    "id": "peter_pettigrew",
    "name": "Peter Pettigrew / Wormtail",
    "role": "Scabbers / Marauder Traitor / Death Eater",
    "category": "Death Eaters & Dark Forces",
    "house": "Gryffindor",
    "booksActive": [
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Comedy/Drama Star"
    ],
    "shiftSummary": "Timothy Spall played Wormtail in Movies 3\u20138. Blake Harrison voices Wormtail across Books 3\u20137 in Audible.",
    "movie": {
      "actor": "Timothy Spall",
      "wiki": "https://en.wikipedia.org/wiki/Timothy_Spall",
      "img": "images/actors/movie_peter_pettigrew.jpg",
      "coverage": "Movies 3, 4, 5, 6, 7, 8",
      "notes": "Timothy Spall gave Wormtail twitching rat-like mannerisms, squealing terror, and pathetic servility in the graveyard ritual."
    },
    "audible": {
      "actor": "Blake Harrison",
      "secondaryActor": "Young Pettigrew: Rory Toms",
      "wiki": "https://en.wikipedia.org/wiki/Blake_Harrison",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_peter_pettigrew.jpg",
      "coverage": "Books 3, 4, 5, 6, 7",
      "notes": "Blake Harrison (Neil in The Inbetweeners, A Very English Scandal) gives Pettigrew sniveling, desperate cowardice and gut-wrenching panic during his silver-hand demise in Book 7."
    },
    "trivia": "In the book (and Audible), Wormtail's silver hand strangles him when he hesitates to kill Harry due to a life debt\u2014a chilling moment altered in the movie.",
    "characterImg": "images/characters/peter_pettigrew.jpg"
  },
  {
    "id": "dobby",
    "name": "Dobby the House-Elf",
    "role": "Free Elf / Loyal Protector of Harry Potter",
    "category": "Ghosts & Magical Beings",
    "house": "Free Elves",
    "booksActive": [
      2,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Restored Book Presence in Audio",
      "Audible Star Voice"
    ],
    "shiftSummary": "Toby Jones voiced CGI Dobby in Movies 2 and 7 (Dobby was completely omitted from Movies 4, 5, and 6). Daniel Mays voices Dobby across all his book appearances (Books 2, 4, 5, 6, and 7) in Audible.",
    "movie": {
      "actor": "Toby Jones (Voice)",
      "wiki": "https://en.wikipedia.org/wiki/Toby_Jones",
      "img": "images/actors/movie_dobby.jpg",
      "coverage": "Movies 2 & 7 (Cut from Movies 4, 5, 6)",
      "notes": "Toby Jones provided Dobby's squeaky devotion, head-banging self-punishment, and heart-breaking death scene on the beach in Shell Cottage."
    },
    "audible": {
      "actor": "Daniel Mays",
      "wiki": "https://en.wikipedia.org/wiki/Daniel_Mays",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_dobby.jpg",
      "coverage": "Books 2, 4, 5, 6, 7",
      "notes": "Daniel Mays (Line of Duty, Rogue One, 1917) voices Dobby with boundless emotional purity, squeaking enthusiasm, and wearing all of Hermione's knitted hats simultaneously."
    },
    "trivia": "MAJOR AUDIOBOOK WIN: In the movies, Neville gives Harry Gillyweed and shows him the Room of Requirement; in the books (and Audible), it is Dobby who gives Harry Gillyweed and discovers the Room of Requirement!",
    "characterImg": "images/characters/dobby.jpg"
  },
  {
    "id": "kreacher",
    "name": "Kreacher the House-Elf",
    "role": "Black Family House-Elf / Keeper of Regulus's Locket",
    "category": "Ghosts & Magical Beings",
    "house": "House of Black",
    "booksActive": [
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Voice",
      "Full Redemption Arc"
    ],
    "shiftSummary": "Voiced by Timothy Bateson (M5) and Simon McBurney (M7) in films. In Audible, Mackenzie Crook voices Kreacher across Books 5, 6, and 7.",
    "movie": {
      "actor": "Timothy Bateson (M5) / Simon McBurney (M7)",
      "wiki": "https://en.wikipedia.org/wiki/Simon_McBurney",
      "img": "images/actors/movie_kreacher.jpg",
      "coverage": "Movie 5 (Bateson) | Movie 7 (McBurney)",
      "notes": "Appeared briefly muttering insults under his breath; J.K. Rowling famously intervened to keep Kreacher in Movie 5 because of his vital role in Book 7."
    },
    "audible": {
      "actor": "Mackenzie Crook",
      "wiki": "https://en.wikipedia.org/wiki/Mackenzie_Crook",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_kreacher.jpg",
      "coverage": "Books 5, 6, 7",
      "notes": "Mackenzie Crook (Pirates of the Caribbean's Ragetti, The Office's Gareth Keenan, Detectorists) gives an extraordinary performance: a rasping, bitter curmudgeon who weeps upon receiving Regulus's fake locket and leads the Hogwarts elves into battle ('Fight! Fight for my master, the defender of the house-elves!')."
    },
    "trivia": "Mackenzie Crook's recording of Kreacher's tale about Regulus Black drinking the emerald potion inside Voldemort's cave brought studio engineers to tears.",
    "characterImg": "images/characters/kreacher.jpg"
  },
  {
    "id": "sybill_trelawney",
    "name": "Sybill Trelawney",
    "role": "Divination Professor / True Seer of the Prophecy",
    "category": "Hogwarts Faculty & Staff",
    "house": "Ravenclaw",
    "booksActive": [
      3,
      5,
      6
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Dame Emma Thompson played Trelawney in Movies 3, 5, and 8. Derry Girls star Saoirse-Monica Jackson voices Trelawney in Audible.",
    "movie": {
      "actor": "Emma Thompson",
      "wiki": "https://en.wikipedia.org/wiki/Emma_Thompson",
      "img": "images/actors/movie_sybill_trelawney.jpg",
      "coverage": "Movies 3, 5, 8",
      "notes": "Emma Thompson wore giant bottle-glass spectacles, shawls, and fluttering mannerisms, alternating between misty dramatics and trance prophecies."
    },
    "audible": {
      "actor": "Saoirse-Monica Jackson",
      "wiki": "https://en.wikipedia.org/wiki/Saoirse-Monica_Jackson",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_sybill_trelawney.svg",
      "coverage": "Books 3, 5, 6",
      "notes": "Saoirse-Monica Jackson (Erin in Derry Girls) brings hilarious theatrical neurosis, misty breathiness, and a jarring pitch drop when uttering the prophecy."
    },
    "trivia": "In Book 6, Trelawney hides sherry bottles in the Room of Requirement and throws crystal balls at Death Eaters during the battle.",
    "characterImg": "images/characters/sybill_trelawney.jpg"
  },
  {
    "id": "nymphadora_tonks",
    "name": "Nymphadora Tonks",
    "role": "Metamorphmagus Auror / Order of the Phoenix",
    "category": "Order of the Phoenix",
    "house": "Hufflepuff",
    "booksActive": [
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Natalia Tena played Tonks in Movies 5\u20138. Ambika Mod voices Tonks in Audible across Books 5\u20137.",
    "movie": {
      "actor": "Natalia Tena",
      "wiki": "https://en.wikipedia.org/wiki/Natalia_Tena",
      "img": "images/actors/movie_nymphadora_tonks.jpg",
      "coverage": "Movies 5, 6, 7, 8",
      "notes": "Natalia Tena brought bubblegum punk attitude, morphing hair colors, and clumsy charm ('Don't call me Nymphadora!')."
    },
    "audible": {
      "actor": "Ambika Mod",
      "wiki": "https://en.wikipedia.org/wiki/Ambika_Mod",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_nymphadora_tonks.jpg",
      "coverage": "Books 5, 6, 7",
      "notes": "Breakout star Ambika Mod (This Is Going to Hurt, One Day) captures Tonks's vibrant humor, clumsy energy, and heartbroken devotion to Remus Lupin."
    },
    "trivia": "The Audible edition includes Tonks's depression and Patronus shift in Book 6, an arc heavily condensed in the film version.",
    "characterImg": "images/characters/nymphadora_tonks.jpg"
  },
  {
    "id": "kingsley_shacklebolt",
    "name": "Kingsley Shacklebolt",
    "role": "Senior Auror / Order of the Phoenix / Minister for Magic",
    "category": "Order of the Phoenix",
    "house": "Hogwarts",
    "booksActive": [
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Voice"
    ],
    "shiftSummary": "George Harris played Kingsley in Movies 5, 7, and 8. Abraham Popoola voices Kingsley in Audible.",
    "movie": {
      "actor": "George Harris",
      "wiki": "https://en.wikipedia.org/wiki/George_Harris_(actor)",
      "img": "images/actors/movie_kingsley_shacklebolt.jpg",
      "coverage": "Movies 5, 7, 8",
      "notes": "George Harris brought deep calming authority, cool ear-ringed robes, and duel prowess ('Dumbledore's got style')."
    },
    "audible": {
      "actor": "Abraham Popoola",
      "wiki": "https://en.wikipedia.org/wiki/Abraham_Popoola",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_kingsley_shacklebolt.svg",
      "coverage": "Books 5, 6, 7",
      "notes": "Abraham Popoola (The Great, Cruella, Atlas) delivers Kingsley's slow, reassuring baritone, warning the wedding via his Lynx Patronus: 'The Ministry has fallen. Scrimgeour is dead. They are coming.'"
    },
    "trivia": "The Patronus warning at Bill and Fleur's wedding in Book 7 is one of the most suspenseful audio cues in the entire Audible series.",
    "characterImg": "images/characters/kingsley_shacklebolt.jpg"
  },
  {
    "id": "quirinus_quirrell",
    "name": "Quirinus Quirrell",
    "role": "Defense Against the Dark Arts Teacher / Voldemort's Host",
    "category": "Hogwarts Faculty & Staff",
    "house": "Ravenclaw",
    "booksActive": [
      1
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Ian Hart played Quirrell in Movie 1. Sacha Dhawan voices Quirrell in Book 1 for Audible.",
    "movie": {
      "actor": "Ian Hart",
      "wiki": "https://en.wikipedia.org/wiki/Ian_Hart",
      "img": "images/actors/movie_quirinus_quirrell.jpg",
      "coverage": "Movie 1 (Philosopher's Stone)",
      "notes": "Ian Hart played the turban-wearing stutterer whose voice suddenly became cold and resonant during the mirror confrontation."
    },
    "audible": {
      "actor": "Sacha Dhawan",
      "wiki": "https://en.wikipedia.org/wiki/Sacha_Dhawan",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_quirinus_quirrell.jpg",
      "coverage": "Book 1 (Philosopher's Stone)",
      "notes": "Sacha Dhawan (The Master in Doctor Who, The Great) expertly executes the chilling tonal snap from shivering stutter to psychopathic servant."
    },
    "trivia": "Sacha Dhawan's dialogue was mixed so his Quirrell voice sounds forward in the stereo field, while Matthew Macfadyen's Voldemort voice comes from behind the head!",
    "characterImg": "images/characters/quirinus_quirrell.jpg"
  },
  {
    "id": "vernon_dursley",
    "name": "Vernon Dursley",
    "role": "Harry's Muggle Uncle / Director of Grunnings Drills",
    "category": "Ministry & Civilians",
    "house": "Muggle",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Richard Griffiths portrayed Uncle Vernon across Movies 1\u20133, 5, and 7. Emmy nominee Jeremy Swift voices Uncle Vernon in Audible.",
    "movie": {
      "actor": "Richard Griffiths",
      "wiki": "https://en.wikipedia.org/wiki/Richard_Griffiths",
      "img": "images/actors/movie_vernon_dursley.jpg",
      "coverage": "Movies 1, 2, 3, 5, 7",
      "notes": "The late Richard Griffiths gave Vernon purpling rage, blustering indignation, and legendary hatred of post ('NO POST ON SUNDAYS!')."
    },
    "audible": {
      "actor": "Jeremy Swift",
      "wiki": "https://en.wikipedia.org/wiki/Jeremy_Swift",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_vernon_dursley.jpg",
      "coverage": "Books 1, 2, 3, 4, 5, 7",
      "notes": "Jeremy Swift (Higgins in Ted Lasso, Downton Abbey) captures Vernon's vein-throbbing exasperation, drill obsession, and comical panic when wizards visit Privet Drive."
    },
    "trivia": "Jeremy Swift records Vernon's hilarious outrage when the Weasleys accidentally destroy the Dursley fireplace via Floo Network in Book 4.",
    "characterImg": "images/characters/vernon_dursley.jpg"
  },
  {
    "id": "petunia_dursley",
    "name": "Petunia Dursley",
    "role": "Harry's Muggle Aunt / Lily's Estranged Sister",
    "category": "Ministry & Civilians",
    "house": "Muggle",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Fiona Shaw portrayed Aunt Petunia in Movies 1\u20133, 5, and 7. Indira Varma voices Aunt Petunia in Audible.",
    "movie": {
      "actor": "Fiona Shaw",
      "wiki": "https://en.wikipedia.org/wiki/Fiona_Shaw",
      "img": "images/actors/movie_petunia_dursley.jpg",
      "coverage": "Movies 1, 2, 3, 5, 7",
      "notes": "Fiona Shaw gave Petunia horse-necked snooping, shrill domestic tyranny, and quiet undercurrents of painful childhood rejection."
    },
    "audible": {
      "actor": "Indira Varma",
      "secondaryActor": "Child Petunia: Sophia Jamal",
      "wiki": "https://en.wikipedia.org/wiki/Indira_Varma",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_petunia_dursley.jpg",
      "coverage": "Books 1, 2, 3, 4, 5, 7",
      "notes": "Indira Varma (Game of Thrones' Ellaria Sand, Obi-Wan Kenobi, Rome) infuses Petunia with razor-wire disdain, obsessive kitchen cleaning, and deep suppressed trauma over Lily."
    },
    "trivia": "In Book 5, Petunia receives a Howler shouting 'REMEMBER MY LAST, PETUNIA' from Dumbledore; Varma's reaction is chillingly authentic.",
    "characterImg": "images/characters/petunia_dursley.jpg"
  },
  {
    "id": "dudley_dursley",
    "name": "Dudley Dursley",
    "role": "Harry's Spoiled Cousin / Smeltings Boxer",
    "category": "Ministry & Civilians",
    "house": "Muggle",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      7
    ],
    "tags": [
      "Audible Recast (Book 4)",
      "Movie Continuity"
    ],
    "shiftSummary": "Harry Melling played Dudley in Movies 1\u20133, 5, and 7. Audible casts Jaiden Dosanjh for Books 1\u20133 and Isaac Howard for Books 4, 5, and 7.",
    "movie": {
      "actor": "Harry Melling",
      "wiki": "https://en.wikipedia.org/wiki/Harry_Melling",
      "img": "images/actors/movie_dudley_dursley.jpg",
      "coverage": "Movies 1, 2, 3, 5, 7",
      "notes": "Harry Melling played Dudley through tantrums (36 presents!) to his boxing teenage years, culminating in his quiet handshake redemption in Deathly Hallows."
    },
    "audible": {
      "actor": "Jaiden Dosanjh (B1\u20133) / Isaac Howard (B4\u20137)",
      "wiki": "https://en.wikipedia.org/wiki/Harry_Melling",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_dudley_dursley.jpg",
      "coverage": "Books 1\u20133 (Dosanjh) | Books 4, 5, 7 (Howard)",
      "notes": "Jaiden Dosanjh nails the wailing birthday tantrum; Isaac Howard voices the gruff, shaken teen survivor of Dementor trauma who says 'I don't think you're a waste of space.'"
    },
    "trivia": "The Ton-Tongue Toffee scene from Book 4 where Dudley eats Fred & George's candy is a masterpiece of sound effects and comedic groans.",
    "characterImg": "images/characters/dudley_dursley.jpg"
  },
  {
    "id": "argus_filch",
    "name": "Argus Filch",
    "role": "Hogwarts Caretaker / Squib / Mrs. Norris's Owner",
    "category": "Hogwarts Faculty & Staff",
    "house": "Hogwarts",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "David Bradley played Filch in Movies 1\u20136 and 8. BAFTA winner Adeel Akhtar voices Filch in Audible across all 7 books.",
    "movie": {
      "actor": "David Bradley",
      "wiki": "https://en.wikipedia.org/wiki/David_Bradley_(actor)",
      "img": "images/actors/movie_argus_filch.jpg",
      "coverage": "Movies 1\u20136, 8",
      "notes": "David Bradley gave Filch a greasy limp, wheezing spite, lantern-swinging menace, and hilarious enthusiasm for hanging students by their thumbs."
    },
    "audible": {
      "actor": "Adeel Akhtar",
      "wiki": "https://en.wikipedia.org/wiki/Adeel_Akhtar",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_argus_filch.jpg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Adeel Akhtar (Sweet Tooth, Fool Me Once, Enola Holmes) captures Filch's bitter jealousy of magic, manic devotion to Umbridge's proclamations, and coddling love for his cat."
    },
    "trivia": "The secret Kwikspell letter Harry discovers in Filch's office in Book 2 is read with delicious pathos by Akhtar.",
    "characterImg": "images/characters/argus_filch.jpg"
  },
  {
    "id": "cornelius_fudge",
    "name": "Cornelius Fudge",
    "role": "Minister for Magic / Incompetent Bureaucrat",
    "category": "Ministry & Civilians",
    "house": "Ministry",
    "booksActive": [
      2,
      3,
      4,
      5,
      6
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Robert Hardy played Fudge in Movies 2\u20135. Miles Jupp voices Fudge in Audible across Books 2\u20136.",
    "movie": {
      "actor": "Robert Hardy",
      "wiki": "https://en.wikipedia.org/wiki/Robert_Hardy",
      "img": "images/actors/movie_cornelius_fudge.jpg",
      "coverage": "Movies 2, 3, 4, 5",
      "notes": "Robert Hardy gave Fudge bowler-hatted pompous affability that curdled into paranoid political self-delusion during Harry's hearing."
    },
    "audible": {
      "actor": "Miles Jupp",
      "wiki": "https://en.wikipedia.org/wiki/Miles_Jupp",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_cornelius_fudge.jpg",
      "coverage": "Books 2\u20136",
      "notes": "Miles Jupp (The Thick of It, Rev.) delivers Fudge's anxious hand-wringing and stubborn refusal to accept Voldemort's return with pitch-perfect bureaucratic defensiveness."
    },
    "trivia": "In Book 6's opening chapter 'The Other Minister', Miles Jupp visits the Muggle Prime Minister (Tom Alexander) via fireplace in a tour-de-force comic scene cut from the films.",
    "characterImg": "images/characters/cornelius_fudge.jpg"
  },
  {
    "id": "rita_skeeter",
    "name": "Rita Skeeter",
    "role": "Daily Prophet Journalist / Unregistered Beetle Animagus",
    "category": "Ministry & Civilians",
    "house": "Ministry",
    "booksActive": [
      4,
      5,
      7
    ],
    "tags": [
      "Audible Star Voice"
    ],
    "shiftSummary": "Miranda Richardson played Skeeter in Movies 4 and 7. Anna Maxwell Martin voices Skeeter in Audible across Books 4, 5, and 7.",
    "movie": {
      "actor": "Miranda Richardson",
      "wiki": "https://en.wikipedia.org/wiki/Miranda_Richardson",
      "img": "images/actors/movie_rita_skeeter.jpg",
      "coverage": "Movies 4 & 7",
      "notes": "Miranda Richardson brought platinum curls, horned glasses, and acid-green Quick-Quotes Quill sensationalism into the broom cupboard."
    },
    "audible": {
      "actor": "Anna Maxwell Martin",
      "wiki": "https://en.wikipedia.org/wiki/Anna_Maxwell_Martin",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_rita_skeeter.jpg",
      "coverage": "Books 4, 5, 7",
      "notes": "Two-time BAFTA winner Anna Maxwell Martin (Motherland, Line of Duty) delivers Skeeter's toxic, smiling venom with breathtaking spite and ruthless tabloid greed."
    },
    "trivia": "Hermione trapping Rita in an unbreakable jar as a beetle at the end of Book 4 is fully dramatized in the Audible recording with frantic buzzing sound design!",
    "characterImg": "images/characters/rita_skeeter.jpg"
  },
  {
    "id": "barty_crouch_jr",
    "name": "Bartemius Crouch Jr.",
    "role": "Death Eater Infiltrator / Polyjuice Moody",
    "category": "Death Eaters & Dark Forces",
    "house": "Slytherin",
    "booksActive": [
      4
    ],
    "tags": [
      "Movie-to-Audio Highlights"
    ],
    "shiftSummary": "David Tennant played Crouch Jr. in Movie 4. West End star Michael Ahomka-Lindsay voices Crouch Jr. in Audible.",
    "movie": {
      "actor": "David Tennant",
      "wiki": "https://en.wikipedia.org/wiki/David_Tennant",
      "img": "images/actors/movie_barty_crouch_jr.jpg",
      "coverage": "Movie 4 (Goblet of Fire)",
      "notes": "David Tennant brought tongue-flicking manic energy, wild eyes, and fanatical devotion to the Dark Lord in the trial and unmasking."
    },
    "audible": {
      "actor": "Michael Ahomka-Lindsay",
      "wiki": "https://en.wikipedia.org/wiki/Michael_Ahomka-Lindsay",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_barty_crouch_jr.svg",
      "coverage": "Book 4 (Goblet of Fire)",
      "notes": "West End powerhouse Michael Ahomka-Lindsay (Cabaret, Newsies) delivers Crouch Jr.'s spine-chilling Veritaserum confession with manic theatrical intensity."
    },
    "trivia": "In the book, Crouch Jr.'s backstory involving his mother drinking Polyjuice Potion to die in Azkaban in his place is fully explained, unlike the simplified movie version.",
    "characterImg": "images/characters/barty_crouch_jr.jpg"
  },
  {
    "id": "cedric_diggory",
    "name": "Cedric Diggory",
    "role": "Hufflepuff Seeker & Prefect / Triwizard Champion",
    "category": "Hogwarts Students",
    "house": "Hufflepuff",
    "booksActive": [
      3,
      4
    ],
    "tags": [
      "Iconic Casting"
    ],
    "shiftSummary": "Robert Pattinson played Cedric in Movie 4 in his breakthrough role. Ryan Cresswell voices Cedric in Audible for Books 3 and 4.",
    "movie": {
      "actor": "Robert Pattinson",
      "wiki": "https://en.wikipedia.org/wiki/Robert_Pattinson",
      "img": "images/actors/movie_cedric_diggory.jpg",
      "coverage": "Movie 4 (Goblet of Fire)",
      "notes": "Robert Pattinson's dashing, chivalrous performance made Cedric's sudden murder in the graveyard an indelible cinematic tragedy."
    },
    "audible": {
      "actor": "Ryan Cresswell",
      "wiki": "https://en.wikipedia.org/wiki/Robert_Pattinson",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_cedric_diggory.jpg",
      "coverage": "Books 3 & 4",
      "notes": "Ryan Cresswell captures Cedric's honest sportsmanship, modesty, and the tragic camaraderie with Harry as they both agree to take the Triwizard Cup together."
    },
    "trivia": "Cedric actually first appears playing Quidditch in Book 3 (catching the Snitch when Dementors attack Harry); Cresswell voices him across both books.",
    "characterImg": "images/characters/cedric_diggory.jpg"
  },
  {
    "id": "cho_chang",
    "name": "Cho Chang",
    "role": "Ravenclaw Seeker / D.A. Member / Harry's First Crush",
    "category": "Hogwarts Students",
    "house": "Ravenclaw",
    "booksActive": [
      3,
      4,
      5,
      7
    ],
    "tags": [
      "Student Key Cast"
    ],
    "shiftSummary": "Katie Leung played Cho in Movies 4\u20138. Lisa He voices Cho in Audible across Books 3, 4, 5, and 7.",
    "movie": {
      "actor": "Katie Leung",
      "wiki": "https://en.wikipedia.org/wiki/Katie_Leung",
      "img": "images/actors/movie_cho_chang.jpg",
      "coverage": "Movies 4\u20138",
      "notes": "Katie Leung was chosen from thousands of Scottish applicants, portraying Cho through the heartbreak of Cedric's death and her awkward first kiss with Harry."
    },
    "audible": {
      "actor": "Lisa He",
      "wiki": "https://en.wikipedia.org/wiki/Katie_Leung",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_cho_chang.svg",
      "coverage": "Books 3, 4, 5, 7",
      "notes": "Lisa He navigates Cho's emotional turmoil with poignant sensitivity, highlighting the book plotline where Cho's friend Marietta Edgecombe\u2014not Cho\u2014betrays Dumbledore's Army."
    },
    "trivia": "In the movie, Cho betrays the D.A. under Veritaserum; in the book and Audible edition, it was her friend Marietta, clearing Cho of personal treachery!",
    "characterImg": "images/characters/cho_chang.jpg"
  },
  {
    "id": "fleur_delacour",
    "name": "Fleur Delacour",
    "role": "Beauxbatons Champion / Gringotts Employee / Bill's Wife",
    "category": "Ministry & Civilians",
    "house": "Beauxbatons",
    "booksActive": [
      4,
      6,
      7
    ],
    "tags": [
      "Triwizard Champion"
    ],
    "shiftSummary": "Cl\u00e9mence Po\u00e9sy played Fleur in Movies 4, 7, and 8. Tara Salma voices Fleur in Audible across Books 4, 6, and 7.",
    "movie": {
      "actor": "Cl\u00e9mence Po\u00e9sy",
      "wiki": "https://en.wikipedia.org/wiki/Cl%C3%A9mence_Po%C3%A9sy",
      "img": "images/actors/movie_fleur_delacour.jpg",
      "coverage": "Movies 4, 7, 8",
      "notes": "Cl\u00e9mence Po\u00e9sy brought French elegance, silvery veela charm, and brave devotion to Bill Weasley after Greyback's attack."
    },
    "audible": {
      "actor": "Tara Salma",
      "wiki": "https://en.wikipedia.org/wiki/Cl%C3%A9mence_Po%C3%A9sy",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_fleur_delacour.svg",
      "coverage": "Books 4, 6, 7",
      "notes": "Tara Salma brings vibrant French intonation, proud champion swagger, and heart-melting devotion in the hospital wing scene where Fleur declares her love for scarred Bill."
    },
    "trivia": "Tara Salma delivers Fleur's legendary hospital quote to Molly: 'I am good-looking enough for both of us, I think! All these scars show is that my husband is brave!'",
    "characterImg": "images/characters/fleur_delacour.jpg"
  },
  {
    "id": "stan_shunpike",
    "name": "Stan Shunpike",
    "role": "Knight Bus Conductor / Unwitting Death Eater Pawn",
    "category": "Ministry & Civilians",
    "house": "Ministry",
    "booksActive": [
      3,
      4,
      7
    ],
    "tags": [
      "Stunt Double Tribute Casting"
    ],
    "shiftSummary": "Lee Ingleby played Stan in Movie 3. In one of the most heartwarming cast stories, David Holmes (Daniel Radcliffe's film stunt double who was paralyzed on set) voices Stan in Audible!",
    "movie": {
      "actor": "Lee Ingleby",
      "wiki": "https://en.wikipedia.org/wiki/Lee_Ingleby",
      "img": "images/actors/movie_stan_shunpike.jpg",
      "coverage": "Movie 3 (Prisoner of Azkaban)",
      "notes": "Lee Ingleby gave Stan Cockney conductor chatter, pimply enthusiasm, and purple uniformed cheek in the Knight Bus."
    },
    "audible": {
      "actor": "David Holmes",
      "wiki": "https://en.wikipedia.org/wiki/David_Holmes_(stuntman)",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_stan_shunpike.svg",
      "coverage": "Books 3, 4, 7",
      "notes": "David Holmes\u2014Daniel Radcliffe's beloved stunt double who suffered a career-ending spinal cord injury during Deathly Hallows rehearsals\u2014triumphantly returns to the Wizarding World to voice the fast-talking conductor!"
    },
    "trivia": "PROFOUND CASTING TRIBUTE: David Holmes was a core part of the Harry Potter film family for a decade before his tragic injury. Casting him as Stan Shunpike was hailed across the fandom.",
    "characterImg": "images/characters/stan_shunpike.jpg"
  },
  {
    "id": "xenophilius_lovegood",
    "name": "Xenophilius Lovegood",
    "role": "Editor of The Quibbler / Luna's Father / Deathly Hallows Lore",
    "category": "Ministry & Civilians",
    "house": "Ravenclaw",
    "booksActive": [
      7
    ],
    "tags": [
      "Audible Star Comedy Casting"
    ],
    "shiftSummary": "Rhys Ifans played Xenophilius in Movie 7. Triple BAFTA winner Jamie Demetriou voices Xenophilius in Audible.",
    "movie": {
      "actor": "Rhys Ifans",
      "wiki": "https://en.wikipedia.org/wiki/Rhys_Ifans",
      "img": "images/actors/movie_xenophilius_lovegood.jpg",
      "coverage": "Movie 7 (Deathly Hallows: Part 1)",
      "notes": "Rhys Ifans wore canary-yellow robes and the Deathly Hallows pendant, delivering the tragic desperation of a father who betrays Harry to save his daughter."
    },
    "audible": {
      "actor": "Jamie Demetriou",
      "wiki": "https://en.wikipedia.org/wiki/Jamie_Demetriou",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_xenophilius_lovegood.jpg",
      "coverage": "Book 7 (Deathly Hallows)",
      "notes": "Jamie Demetriou (Stath Lets Flats, Fleabag, Barbie) brings extraordinary eccentric cadence and heart-rending panic to the rook-shaped Lovegood house."
    },
    "trivia": "Jamie Demetriou narrates the 'Tale of the Three Brothers' alongside Cush Jumbo in an acoustic storytelling sequence inside the Audible recording.",
    "characterImg": "images/characters/xenophilius_lovegood.jpg"
  },
  {
    "id": "bill_weasley",
    "name": "Bill Weasley",
    "role": "Curse-Breaker in Egypt / Eldest Weasley Brother",
    "category": "Order of the Phoenix",
    "house": "Gryffindor",
    "booksActive": [
      4,
      6,
      7
    ],
    "tags": [
      "Audible Breakout Star Casting"
    ],
    "shiftSummary": "Domhnall Gleeson played Bill in Movies 7 and 8. Rising star Leo Woodall voices Bill Weasley in Audible.",
    "movie": {
      "actor": "Domhnall Gleeson",
      "wiki": "https://en.wikipedia.org/wiki/Domhnall_Gleeson",
      "img": "images/actors/movie_bill_weasley.jpg",
      "coverage": "Movies 7 & 8",
      "notes": "Domhnall Gleeson brought rock-star charisma with fang earrings and cool charm, hosting the refugees at Shell Cottage."
    },
    "audible": {
      "actor": "Leo Woodall",
      "wiki": "https://en.wikipedia.org/wiki/Leo_Woodall",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_bill_weasley.jpg",
      "coverage": "Books 4, 6, 7",
      "notes": "Leo Woodall (The White Lotus, One Day) voices the dashing eldest Weasley with rugged charm, cool confidence, and battle courage."
    },
    "trivia": "Domhnall Gleeson (movie Bill) is the real-life son of Brendan Gleeson (Mad-Eye Moody)! In the audio version, Bill is voiced by Leo Woodall.",
    "characterImg": "images/characters/bill_weasley.jpg"
  },
  {
    "id": "peeves",
    "name": "Peeves the Poltergeist",
    "role": "Hogwarts Spirit of Chaos / Incorrigible Prankster",
    "category": "Ghosts & Magical Beings",
    "house": "Hogwarts",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "BOOK EXCLUSIVE",
      "Cut from Movies!",
      "Audible Complete Restoration"
    ],
    "shiftSummary": "Peeves was famously CUT from all 8 movies! Rik Mayall filmed scenes for Movie 1 that were discarded. In Audible, Peeves is gloriously restored in all 7 books, voiced by Nigel Pilkington!",
    "movie": {
      "actor": "CUT FROM ALL FILMS! (Rik Mayall unreleased)",
      "wiki": "https://en.wikipedia.org/wiki/Peeves",
      "img": "images/actors/movie_peeves.jpg",
      "coverage": "Cut from all 8 film adaptations (footage lost)",
      "notes": "Comedy genius Rik Mayall shot scenes for Chris Columbus's 2001 film, but the CGI and pacing cuts excised him completely, a legendary lament of Potter fans."
    },
    "audible": {
      "actor": "Nigel Pilkington",
      "wiki": "https://en.wikipedia.org/wiki/Nigel_Pilkington",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_peeves.jpg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Nigel Pilkington delivers pure chaotic glee: blowing raspberries, singing rude rhymes ('Oh, Potter, you rotter!'), unscrewing chandeliers on Fred and George's orders, and dropping busts of medieval wizards on Death Eaters."
    },
    "trivia": "ONE OF THE BIGGEST BOOK-TO-MOVIE DIFFERENCES: Peeves' salute to Fred and George in Book 5 ('It unscrews the other way') is one of the most famous moments in Potter history, fully voiced in Audible!",
    "characterImg": "images/characters/peeves.jpg"
  },
  {
    "id": "ludo_bagman",
    "name": "Ludo Bagman",
    "role": "Head of Magical Games and Sports / Washed-up Wasp Beater",
    "category": "Ministry & Civilians",
    "house": "Ministry",
    "booksActive": [
      4
    ],
    "tags": [
      "BOOK EXCLUSIVE",
      "Cut from Goblet of Fire Film"
    ],
    "shiftSummary": "Ludo Bagman was entirely cut from the Goblet of Fire film adaptation. In Audible, he is voiced by Danny Kirrane as a major character!",
    "movie": {
      "actor": "CUT FROM MOVIE!",
      "wiki": "https://en.wikipedia.org/wiki/Magic_in_Harry_Potter",
      "img": "images/actors/movie_ludo_bagman.svg",
      "coverage": "Entirely omitted from Movie 4",
      "notes": "To condense Goblet of Fire into a single film, Mike Newell cut Bagman entirely, transferring basic commentary duties to Cornelius Fudge."
    },
    "audible": {
      "actor": "Danny Kirrane",
      "wiki": "https://en.wikipedia.org/wiki/Danny_Kirrane",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_ludo_bagman.svg",
      "coverage": "Book 4 (Goblet of Fire)",
      "notes": "Danny Kirrane (Pirates of the Caribbean: Dead Men Tell No Tales, The Serpent Queen) voices the booming, jovial, hopelessly indebted gambler in his tight Wimbourne Wasps robes with infectious energy."
    },
    "trivia": "BOOK EXCLUSIVE PLOT: Bagman's secret betting with goblins using leprechaun gold that vanishes is what leaves Fred and George broke until Harry gives them his 1,000 Galleon Triwizard winnings!",
    "characterImg": "images/characters/ludo_bagman.jpg"
  },
  {
    "id": "winky",
    "name": "Winky the House-Elf",
    "role": "Crouch Family House-Elf / Key to the Dark Mark Mystery",
    "category": "Ghosts & Magical Beings",
    "house": "House of Crouch",
    "booksActive": [
      4
    ],
    "tags": [
      "BOOK EXCLUSIVE",
      "Cut from Goblet of Fire Film"
    ],
    "shiftSummary": "Winky was entirely omitted from the movies. Clare Corbett voices Winky in Audible for Goblet of Fire.",
    "movie": {
      "actor": "CUT FROM MOVIE!",
      "wiki": "https://en.wikipedia.org/wiki/House-elf#Winky",
      "img": "images/actors/movie_winky.svg",
      "coverage": "Entirely omitted from Movie 4",
      "notes": "Winky's role guarding Barty Crouch Jr. in the Top Box and her butterbeer spiral in the Hogwarts kitchens were removed from the film adaptation."
    },
    "audible": {
      "actor": "Clare Corbett",
      "wiki": "https://en.wikipedia.org/wiki/House-elf",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_winky.svg",
      "coverage": "Book 4 (Goblet of Fire)",
      "notes": "Clare Corbett gives a tear-jerking, squeaking performance of Crouch's terrified house-elf, sobbing into her skirts and drunkenly clutching butterbeer bottles."
    },
    "trivia": "Winky's tragic dismissal by Mr. Crouch at the Quidditch World Cup is what inspires Hermione to found S.P.E.W.",
    "characterImg": "images/characters/winky.jpg"
  },
  {
    "id": "sir_cadogan",
    "name": "Sir Cadogan",
    "role": "Eccentric Knight in the Portrait / Gryffindor Tower Guardian",
    "category": "Ghosts & Magical Beings",
    "house": "Hogwarts",
    "booksActive": [
      3,
      5,
      7
    ],
    "tags": [
      "Comedy Voice Royalty",
      "Matt Berry Masterpiece"
    ],
    "shiftSummary": "Only a fleeting background cameo in Movie 3. In Audible, comedy legend Matt Berry plays Sir Cadogan across Books 3, 5, and 7!",
    "movie": {
      "actor": "Paul Whitehouse (Deleted Scene / Cameo)",
      "wiki": "https://en.wikipedia.org/wiki/Hogwarts_staff",
      "img": "images/actors/movie_sir_cadogan.jpg",
      "coverage": "Movie 3 (Cut / Background Portrait Cameo)",
      "notes": "Paul Whitehouse filmed scenes as Sir Cadogan for Prisoner of Azkaban, but they were cut down to background set dressing."
    },
    "audible": {
      "actor": "Matt Berry",
      "wiki": "https://en.wikipedia.org/wiki/Matt_Berry",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_sir_cadogan.jpg",
      "coverage": "Books 3, 5, 7",
      "notes": "Cult comedy icon Matt Berry (What We Do in the Shadows' Laszlo Cravensworth, The IT Crowd) delivers a hilarious, booming tour-de-force: 'STAND AND FIGHT, YE DOGS! HULLO, SCURVY KNAVES!'"
    },
    "trivia": "Matt Berry's Sir Cadogan challenges students to duels every time they try to enter Gryffindor Tower while substituting for the slashed Fat Lady portrait.",
    "characterImg": "images/characters/sir_cadogan.jpg"
  },
  {
    "id": "sorting_hat",
    "name": "The Sorting Hat",
    "role": "Ancient Relic of Godric Gryffindor / Singer of Warning Songs",
    "category": "Ghosts & Magical Beings",
    "house": "Hogwarts",
    "booksActive": [
      1,
      2,
      4,
      5,
      7
    ],
    "tags": [
      "Audible Star Casting"
    ],
    "shiftSummary": "Leslie Phillips voiced the Sorting Hat in Movies 1, 2, and 8. Lennie James voices the Hat in Audible across Books 1, 2, 4, 5, and 7.",
    "movie": {
      "actor": "Leslie Phillips",
      "wiki": "https://en.wikipedia.org/wiki/Leslie_Phillips",
      "img": "images/actors/movie_sorting_hat.jpg",
      "coverage": "Movies 1, 2, 8",
      "notes": "Leslie Phillips gave the Hat a deep, theatrical rumble with famous crescendos: 'GRYFFINDOR!'"
    },
    "audible": {
      "actor": "Lennie James",
      "wiki": "https://en.wikipedia.org/wiki/Lennie_James",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_sorting_hat.jpg",
      "coverage": "Books 1, 2, 4, 5, 7",
      "notes": "Lennie James (The Walking Dead's Morgan, Save Me, Line of Duty) brings rich lyrical poetry, ancient wisdom, and ominous musical cadences to the Sorting Hat's yearly warning songs."
    },
    "trivia": "In Book 5, the Sorting Hat sings an extended ballad warning the houses to unite against outside enemies\u2014a song fully musicalized in the Audible edition.",
    "characterImg": "images/characters/sorting_hat.jpg"
  },
  {
    "id": "nearly_headless_nick",
    "name": "Nearly Headless Nick",
    "role": "Gryffindor Resident Ghost / Sir Nicholas de Mimsy-Porpington",
    "category": "Ghosts & Magical Beings",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      7
    ],
    "tags": [
      "Comedy Star Casting"
    ],
    "shiftSummary": "Monty Python legend John Cleese played Nick in Movies 1 and 2. Stephen Mangan voices Nick in Audible across Books 1\u20135 and 7.",
    "movie": {
      "actor": "John Cleese",
      "wiki": "https://en.wikipedia.org/wiki/John_Cleese",
      "img": "images/actors/movie_nearly_headless_nick.jpg",
      "coverage": "Movies 1 & 2",
      "notes": "John Cleese brought pompous British gentry humor and famously pulled his head sideways on its hinge of skin and sinew."
    },
    "audible": {
      "actor": "Stephen Mangan",
      "wiki": "https://en.wikipedia.org/wiki/Stephen_Mangan",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_nearly_headless_nick.jpg",
      "coverage": "Books 1, 2, 3, 4, 5, 7",
      "notes": "Stephen Mangan (Episodes, The Split, Green Wing) voices Sir Nicholas with exquisite aristocratic dignity, comic snobbery, and touching poignancy when Harry questions him about death in Book 5."
    },
    "trivia": "The Deathday Party from Chamber of Secrets (with rancid haggis, rotten fish, and the headless hunt) is fully restored in the Audible production.",
    "characterImg": "images/characters/nearly_headless_nick.jpg"
  },
  {
    "id": "charlie_weasley",
    "name": "Charlie Weasley",
    "role": "Dragon Keeper in Romania / Order Member",
    "category": "Order of the Phoenix",
    "house": "Gryffindor",
    "booksActive": [
      4,
      7
    ],
    "tags": [
      "BOOK EXCLUSIVE IN PERSON",
      "Cut from Movies"
    ],
    "shiftSummary": "Charlie only ever appeared in a moving family photo in Movie 3; he had zero speaking lines on screen. In Audible, he is voiced in person by Joel Fry for Goblet of Fire and Deathly Hallows!",
    "movie": {
      "actor": "CUT! (Alex Crockford photo cameo only)",
      "wiki": "https://en.wikipedia.org/wiki/Weasley_family#Charlie_Weasley",
      "img": "images/actors/movie_charlie_weasley.jpg",
      "coverage": "Never featured in person with dialogue across 8 movies",
      "notes": "Despite being an essential character in the books, Charlie Weasley was notoriously excluded from all films."
    },
    "audible": {
      "actor": "Joel Fry",
      "wiki": "https://en.wikipedia.org/wiki/Joel_Fry_(actor)",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_charlie_weasley.jpg",
      "coverage": "Books 4 & 7",
      "notes": "Joel Fry (Our Flag Means Death, Cruella, Game of Thrones' Hizdahr zo Loraq) brings rugged, cheerful enthusiasm to the second Weasley son handling nesting Hungarian Horntails in the Forbidden Forest."
    },
    "trivia": "BOOK EXCLUSIVE SCENE: In Book 4, Charlie sneaks Harry a look at the dragons before the first task with Hagrid; Joel Fry's dragon-trainer swagger shines.",
    "characterImg": "images/characters/charlie_weasley.jpg"
  },
  {
    "id": "lavender_brown",
    "name": "Lavender Brown",
    "role": "Gryffindor Student / Ron's Clingy Girlfriend ('Won-Won')",
    "category": "Hogwarts Students",
    "house": "Gryffindor",
    "booksActive": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "tags": [
      "Movie Recast Controversy",
      "Audible Consistency"
    ],
    "shiftSummary": "Famous Movie Recast: Kathleen Cauley (M2) and Jennifer Smith (M3) played Lavender as background extras, before Jessie Cave was cast in Movie 6 for the romantic subplot. In Audible, Ruby-May Martinwood voices Lavender consistently across all 7 books.",
    "movie": {
      "actor": "Kathleen Cauley (M2) / Jennifer Smith (M3) / Jessie Cave (M6\u20138)",
      "wiki": "https://en.wikipedia.org/wiki/Jessie_Cave",
      "img": "images/actors/movie_lavender_brown.jpg",
      "coverage": "M2 (Cauley) | M3 (Smith) | M6\u20138 (Cave)",
      "notes": "Jessie Cave brought hilarious clingy infatuation, heart-shaped necklaces, and shrill possessiveness to 'Won-Won'."
    },
    "audible": {
      "actor": "Ruby-May Martinwood",
      "wiki": "https://en.wikipedia.org/wiki/Jessie_Cave",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_lavender_brown.svg",
      "coverage": "All 7 Audiobooks (Books 1\u20137)",
      "notes": "Ruby-May Martinwood provides smooth continuity from Divination class giggles in Book 3 to full romantic turbulence in Book 6 and her tragic wolf attack in Book 7."
    },
    "trivia": "The film recasting sparked major fan debate in 2008 when the character was recast from Black background actresses to white actress Jessie Cave when dialogue was introduced.",
    "characterImg": "images/characters/lavender_brown.jpg"
  },
  {
    "id": "celestina_warbeck",
    "name": "Celestina Warbeck",
    "role": "The Singing Sorceress / Wizarding Wireless Star",
    "category": "Ministry & Civilians",
    "house": "Gryffindor",
    "booksActive": [
      2,
      6
    ],
    "tags": [
      "LEGENDARY CAMEO",
      "Dame Shirley Bassey!"
    ],
    "shiftSummary": "Never seen in movies. In an astonishing luxury casting moment, world music legend Dame Shirley Bassey voices Celestina Warbeck for the Audible edition!",
    "movie": {
      "actor": "CUT / MENTIONED ONLY",
      "wiki": "https://en.wikipedia.org/wiki/Shirley_Bassey",
      "img": "images/actors/movie_celestina_warbeck.jpg",
      "coverage": "Not featured in the film series",
      "notes": "Molly Weasley's favorite singer was only ever mentioned in passing on screen."
    },
    "audible": {
      "actor": "Dame Shirley Bassey",
      "wiki": "https://en.wikipedia.org/wiki/Shirley_Bassey",
      "audibleWiki": "https://harrypotter.fandom.com/wiki/Harry_Potter:_The_Full-Cast_Audio_Editions",
      "img": "images/actors/audible_celestina_warbeck.jpg",
      "coverage": "Books 2 & 6",
      "notes": "Global superstar Dame Shirley Bassey (Goldfinger, Diamonds Are Forever) makes an unbelievable cameo singing 'A Cauldron Full of Hot, Strong Love' over the wireless at Christmas!"
    },
    "trivia": "Having Dame Shirley Bassey perform Celestina Warbeck's hit single on the wizarding wireless at the Burrow in Book 6 is one of Audible's most delightful surprises.",
    "characterImg": "images/characters/celestina_warbeck.jpg"
  }
];
