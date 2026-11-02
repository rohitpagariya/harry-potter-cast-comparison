# download_and_optimize.py
import urllib.request
import urllib.parse
import json
import os
import ssl
import subprocess
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

BASE_DIR = "/Users/rohitpagariya/.gemini/antigravity/scratch/harry-potter-cast-comparison"
DIST_DIR = os.path.join(BASE_DIR, "dist")
IMG_CHAR_DIST = os.path.join(DIST_DIR, "images", "characters")
IMG_ACTOR_DIST = os.path.join(DIST_DIR, "images", "actors")
IMG_CHAR_SRC = os.path.join(BASE_DIR, "images", "characters")
IMG_ACTOR_SRC = os.path.join(BASE_DIR, "images", "actors")

for d in [IMG_CHAR_DIST, IMG_ACTOR_DIST, IMG_CHAR_SRC, IMG_ACTOR_SRC]:
    os.makedirs(d, exist_ok=True)

# Character Fandom Pages
CHAR_FANDOM_PAGES = {
    "harry_potter": "Harry_Potter",
    "hermione_granger": "Hermione_Granger",
    "ron_weasley": "Ronald_Weasley",
    "albus_dumbledore": "Albus_Dumbledore",
    "severus_snape": "Severus_Snape",
    "minerva_mcgonagall": "Minerva_McGonagall",
    "rubeus_hagrid": "Rubeus_Hagrid",
    "lord_voldemort": "Tom_Riddle",
    "narrator": "Hogwarts",
    "draco_malfoy": "Draco_Malfoy",
    "neville_longbottom": "Neville_Longbottom",
    "sirius_black": "Sirius_Black",
    "remus_lupin": "Remus_Lupin",
    "dolores_umbridge": "Dolores_Umbridge",
    "bellatrix_lestrange": "Bellatrix_Lestrange",
    "gilderoy_lockhart": "Gilderoy_Lockhart",
    "alastor_moody": "Alastor_Moody",
    "horace_slughorn": "Horace_Slughorn",
    "arthur_weasley": "Arthur_Weasley",
    "molly_weasley": "Molly_Weasley",
    "ginny_weasley": "Ginevra_Weasley",
    "luna_lovegood": "Luna_Lovegood",
    "lucius_malfoy": "Lucius_Malfoy",
    "narcissa_malfoy": "Narcissa_Malfoy",
    "peter_pettigrew": "Peter_Pettigrew",
    "dobby": "Dobby",
    "kreacher": "Kreacher",
    "sybill_trelawney": "Sybill_Trelawney",
    "nymphadora_tonks": "Nymphadora_Tonks",
    "kingsley_shacklebolt": "Kingsley_Shacklebolt",
    "quirinus_quirrell": "Quirinus_Quirrell",
    "vernon_dursley": "Vernon_Dursley",
    "petunia_dursley": "Petunia_Dursley",
    "dudley_dursley": "Dudley_Dursley",
    "argus_filch": "Argus_Filch",
    "cornelius_fudge": "Cornelius_Fudge",
    "rita_skeeter": "Rita_Skeeter",
    "barty_crouch_jr": "Bartemius_Crouch_Junior",
    "cedric_diggory": "Cedric_Diggory",
    "cho_chang": "Cho_Chang",
    "fleur_delacour": "Fleur_Delacour",
    "stan_shunpike": "Stanley_Shunpike",
    "xenophilius_lovegood": "Xenophilius_Lovegood",
    "bill_weasley": "William_Weasley",
    "peeves": "Peeves",
    "ludo_bagman": "Ludovic_Bagman",
    "winky": "Winky",
    "sir_cadogan": "Cadogan",
    "sorting_hat": "Sorting_Hat",
    "nearly_headless_nick": "Nicholas_de_Mimsy-Porpington",
    "charlie_weasley": "Charles_Weasley",
    "lavender_brown": "Lavender_Brown",
    "celestina_warbeck": "Celestina_Warbeck",
    "fred_george_weasley": "Fred_Weasley",
    "percy_weasley": "Percy_Weasley",
    "moaning_myrtle": "Myrtle_Warren",
    "garrick_ollivander": "Garrick_Ollivander",
    "filius_flitwick": "Filius_Flitwick",
    "pomona_sprout": "Pomona_Sprout",
    "fat_lady": "Fat_Lady",
    "rufus_scrimgeour": "Rufus_Scrimgeour",
    "gaunt_family": "Marvolo_Gaunt"
}

# Movie Actor Wikipedia Titles
MOVIE_ACTOR_WIKI = {
    "harry_potter": "Daniel_Radcliffe",
    "hermione_granger": "Emma_Watson",
    "ron_weasley": "Rupert_Grint",
    "albus_dumbledore": "Michael_Gambon",
    "severus_snape": "Alan_Rickman",
    "minerva_mcgonagall": "Maggie_Smith",
    "rubeus_hagrid": "Robbie_Coltrane",
    "lord_voldemort": "Ralph_Fiennes",
    "narrator": "Cush_Jumbo",
    "draco_malfoy": "Tom_Felton",
    "neville_longbottom": "Matthew_Lewis_(actor)",
    "sirius_black": "Gary_Oldman",
    "remus_lupin": "David_Thewlis",
    "dolores_umbridge": "Imelda_Staunton",
    "bellatrix_lestrange": "Helena_Bonham_Carter",
    "gilderoy_lockhart": "Kenneth_Branagh",
    "alastor_moody": "Brendan_Gleeson",
    "horace_slughorn": "Jim_Broadbent",
    "arthur_weasley": "Mark_Williams_(actor)",
    "molly_weasley": "Julie_Walters",
    "ginny_weasley": "Bonnie_Wright",
    "luna_lovegood": "Evanna_Lynch",
    "lucius_malfoy": "Jason_Isaacs",
    "narcissa_malfoy": "Helen_McCrory",
    "peter_pettigrew": "Timothy_Spall",
    "dobby": "Toby_Jones",
    "kreacher": "Timothy_Bateson",
    "sybill_trelawney": "Emma_Thompson",
    "nymphadora_tonks": "Natalia_Tena",
    "kingsley_shacklebolt": "George_Harris_(actor)",
    "quirinus_quirrell": "Ian_Hart",
    "vernon_dursley": "Richard_Griffiths",
    "petunia_dursley": "Fiona_Shaw",
    "dudley_dursley": "Harry_Melling",
    "argus_filch": "David_Bradley_(actor)",
    "cornelius_fudge": "Robert_Hardy",
    "rita_skeeter": "Miranda_Richardson",
    "barty_crouch_jr": "David_Tennant",
    "cedric_diggory": "Robert_Pattinson",
    "cho_chang": "Katie_Leung",
    "fleur_delacour": "Clémence_Poésy",
    "stan_shunpike": "Lee_Ingleby",
    "xenophilius_lovegood": "Rhys_Ifans",
    "bill_weasley": "Domhnall_Gleeson",
    "peeves": "Rik_Mayall",
    "ludo_bagman": "Danny_Kirrane",
    "winky": "Clare_Corbett",
    "sir_cadogan": "Paul_Whitehouse",
    "sorting_hat": "Leslie_Phillips",
    "nearly_headless_nick": "John_Cleese",
    "charlie_weasley": "Joel_Fry_(actor)",
    "lavender_brown": "Jessie_Cave",
    "celestina_warbeck": "Shirley_Bassey",
    "fred_george_weasley": "James_and_Oliver_Phelps",
    "percy_weasley": "Chris_Rankin",
    "moaning_myrtle": "Shirley_Henderson",
    "garrick_ollivander": "John_Hurt",
    "filius_flitwick": "Warwick_Davis",
    "pomona_sprout": "Miriam_Margolyes",
    "fat_lady": "Dawn_French",
    "rufus_scrimgeour": "Bill_Nighy",
    "gaunt_family": "Finbar_Lynch"
}

# Audible Voice Artist Wikipedia Titles
AUDIBLE_ACTOR_WIKI = {
    "harry_potter": "Jaxon_Knopf",
    "hermione_granger": "Nina_Barker-Francis",
    "ron_weasley": "Rhys_Mulligan",
    "albus_dumbledore": "Hugh_Laurie",
    "severus_snape": "Riz_Ahmed",
    "minerva_mcgonagall": "Michelle_Gomez",
    "rubeus_hagrid": "Mark_Addy",
    "lord_voldemort": "Matthew_Macfadyen",
    "narrator": "Cush_Jumbo",
    "draco_malfoy": "Maximus_Evans",
    "neville_longbottom": "Archie_Mountain",
    "sirius_black": "Sope_Dirisu",
    "remus_lupin": "Iwan_Rheon",
    "dolores_umbridge": "Keira_Knightley",
    "bellatrix_lestrange": "Ruth_Wilson",
    "gilderoy_lockhart": "Kit_Harington",
    "alastor_moody": "James_McAvoy",
    "horace_slughorn": "Bill_Nighy",
    "arthur_weasley": "Simon_Pegg",
    "molly_weasley": "Nina_Wadia",
    "ginny_weasley": "Shreya_Lallu",
    "luna_lovegood": "Millie_Gubby",
    "lucius_malfoy": "Alex_Hassell",
    "narcissa_malfoy": "Jessica_Henwick",
    "peter_pettigrew": "Blake_Harrison",
    "dobby": "Daniel_Mays",
    "kreacher": "Mackenzie_Crook",
    "sybill_trelawney": "Saoirse-Monica_Jackson",
    "nymphadora_tonks": "Ambika_Mod",
    "kingsley_shacklebolt": "Abraham_Popoola",
    "quirinus_quirrell": "Sacha_Dhawan",
    "vernon_dursley": "Jeremy_Swift",
    "petunia_dursley": "Indira_Varma",
    "dudley_dursley": "Isaac_Howard",
    "argus_filch": "Adeel_Akhtar",
    "cornelius_fudge": "Miles_Jupp",
    "rita_skeeter": "Anna_Maxwell_Martin",
    "barty_crouch_jr": "Michael_Ahomka-Lindsay",
    "cedric_diggory": "Ryan_Cresswell",
    "cho_chang": "Lisa_He",
    "fleur_delacour": "Tara_Salma",
    "stan_shunpike": "David_Holmes_(stuntman)",
    "xenophilius_lovegood": "Jamie_Demetriou",
    "bill_weasley": "Leo_Woodall",
    "peeves": "Nigel_Pilkington",
    "ludo_bagman": "Danny_Kirrane",
    "winky": "Clare_Corbett",
    "sir_cadogan": "Matt_Berry",
    "sorting_hat": "Lennie_James",
    "nearly_headless_nick": "Stephen_Mangan",
    "charlie_weasley": "Joel_Fry_(actor)",
    "lavender_brown": "Ruby-May_Martinwood",
    "celestina_warbeck": "Shirley_Bassey",
    "fred_george_weasley": "Hamish_Lloyd_Barnes",
    "percy_weasley": "Tom_Royal",
    "moaning_myrtle": "Megan_Richards",
    "garrick_ollivander": "Hugh_Ross_(actor)",
    "filius_flitwick": "Fergus_Rattigan",
    "pomona_sprout": "Gemma_Whelan",
    "fat_lady": "Sarah_Whitehouse",
    "rufus_scrimgeour": "Nicholas_Boulton",
    "gaunt_family": "Finbar_Lynch"
}

def fetch_fandom_image_urls():
    results = {}
    titles = list(set(CHAR_FANDOM_PAGES.values()))
    chunk_size = 20
    for i in range(0, len(titles), chunk_size):
        chunk = titles[i:i+chunk_size]
        url = f"https://harrypotter.fandom.com/api.php?action=query&titles={'|'.join(chunk)}&prop=pageimages&format=json&pithumbsize=400"
        req = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                for pid, p in data.get('query', {}).get('pages', {}).items():
                    title = p.get('title')
                    thumb = p.get('thumbnail', {}).get('source')
                    if title and thumb:
                        results[title] = thumb
        except Exception as e:
            print(f"Error fetching fandom API: {e}")
    return results

def fetch_wikipedia_image_urls():
    results = {}
    all_titles = list(set(list(MOVIE_ACTOR_WIKI.values()) + list(AUDIBLE_ACTOR_WIKI.values())))
    chunk_size = 20
    for i in range(0, len(all_titles), chunk_size):
        chunk = all_titles[i:i+chunk_size]
        encoded_chunk = [urllib.parse.quote(t) for t in chunk]
        url = f"https://en.wikipedia.org/w/api.php?action=query&titles={'|'.join(encoded_chunk)}&prop=pageimages&format=json&pithumbsize=330"
        req = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                for pid, p in data.get('query', {}).get('pages', {}).items():
                    title = p.get('title')
                    thumb = p.get('thumbnail', {}).get('source')
                    if title and thumb:
                        results[title] = thumb
        except Exception as e:
            print(f"Error fetching wiki API: {e}")
    return results

def download_with_curl(url, target_paths, referer=None):
    if not url:
        return False
    primary = target_paths[0]
    
    headers = [
        '-H', 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    ]
    if referer:
        headers.extend(['-H', f'Referer: {referer}'])
    
    cmd = ['curl', '-s', '-L'] + headers + ['-o', primary, url]
    subprocess.run(cmd)
    
    if os.path.exists(primary) and os.path.getsize(primary) > 1000:
        # Resize using sips if larger than 320px
        subprocess.run(['sips', '-Z', '320', primary], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        # Copy to secondary paths
        for sec in target_paths[1:]:
            with open(primary, 'rb') as f_src, open(sec, 'wb') as f_dst:
                f_dst.write(f_src.read())
        return True
    return False

print("1. Fetching Fandom character URLs...")
fandom_thumbs = fetch_fandom_image_urls()
print(f"-> Got {len(fandom_thumbs)} Fandom URLs.")

print("2. Fetching Wikipedia actor URLs...")
wiki_thumbs = fetch_wikipedia_image_urls()
print(f"-> Got {len(wiki_thumbs)} Wikipedia URLs.")

# Download Characters with Fandom Referer
char_map = {}
for char_id, fandom_page in CHAR_FANDOM_PAGES.items():
    normal_page = fandom_page.replace('_', ' ')
    thumb_url = fandom_thumbs.get(normal_page)
    filename = f"{char_id}.jpg"
    paths = [os.path.join(IMG_CHAR_DIST, filename), os.path.join(IMG_CHAR_SRC, filename)]
    
    ok = download_with_curl(thumb_url, paths, referer="https://harrypotter.fandom.com/")
    char_map[char_id] = {
        "local": f"images/characters/{filename}" if ok else None,
        "remote": thumb_url
    }
    print(f"Char {'[OK]' if ok else '[FAILED]'}: {char_id}")

# Download Movie Actors with Wikipedia Referer
movie_actor_map = {}
for char_id, actor_wiki in MOVIE_ACTOR_WIKI.items():
    normal_title = actor_wiki.replace('_', ' ')
    thumb_url = wiki_thumbs.get(normal_title)
    filename = f"movie_{char_id}.jpg"
    paths = [os.path.join(IMG_ACTOR_DIST, filename), os.path.join(IMG_ACTOR_SRC, filename)]
    
    ok = download_with_curl(thumb_url, paths, referer="https://en.wikipedia.org/")
    movie_actor_map[char_id] = {
        "local": f"images/actors/{filename}" if ok else None,
        "remote": thumb_url
    }
    print(f"Movie {'[OK]' if ok else '[FAILED]'}: {char_id} ({actor_wiki})")

# Download Audible Actors with Wikipedia Referer
audible_actor_map = {}
for char_id, actor_wiki in AUDIBLE_ACTOR_WIKI.items():
    normal_title = actor_wiki.replace('_', ' ')
    thumb_url = wiki_thumbs.get(normal_title)
    filename = f"audible_{char_id}.jpg"
    paths = [os.path.join(IMG_ACTOR_DIST, filename), os.path.join(IMG_ACTOR_SRC, filename)]
    
    ok = download_with_curl(thumb_url, paths, referer="https://en.wikipedia.org/")
    audible_actor_map[char_id] = {
        "local": f"images/actors/{filename}" if ok else None,
        "remote": thumb_url
    }
    print(f"Audible {'[OK]' if ok else '[FAILED]'}: {char_id} ({actor_wiki})")

mapping_path = os.path.join(BASE_DIR, "media_mapping.json")
with open(mapping_path, "w", encoding="utf-8") as f:
    json.dump({
        "characters": char_map,
        "movie_actors": movie_actor_map,
        "audible_actors": audible_actor_map
    }, f, indent=2)

print(f"\nAll operations complete! Saved mapping to {mapping_path}")
