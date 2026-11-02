# download_characters_clean.py
import urllib.request
import urllib.parse
import json
import os
import subprocess
import time

BASE_DIR = "/Users/rohitpagariya/.gemini/antigravity/scratch/harry-potter-cast-comparison"
DIST_DIR = os.path.join(BASE_DIR, "dist")
IMG_CHAR_DIST = os.path.join(DIST_DIR, "images", "characters")
IMG_CHAR_SRC = os.path.join(BASE_DIR, "images", "characters")
IMG_ACTOR_DIST = os.path.join(DIST_DIR, "images", "actors")
IMG_ACTOR_SRC = os.path.join(BASE_DIR, "images", "actors")

for d in [IMG_CHAR_DIST, IMG_CHAR_SRC, IMG_ACTOR_DIST, IMG_ACTOR_SRC]:
    os.makedirs(d, exist_ok=True)

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

def fetch_fandom_image_urls():
    results = {}
    titles = list(set(CHAR_FANDOM_PAGES.values()))
    chunk_size = 20
    for i in range(0, len(titles), chunk_size):
        chunk = titles[i:i+chunk_size]
        url = f"https://harrypotter.fandom.com/api.php?action=query&titles={'|'.join(chunk)}&prop=pageimages&format=json&pithumbsize=320"
        cmd = [
            'curl', '-s', '-L',
            '-H', 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
            url
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        try:
            data = json.loads(res.stdout)
            for pid, p in data.get('query', {}).get('pages', {}).items():
                title = p.get('title')
                thumb = p.get('thumbnail', {}).get('source')
                if title and thumb:
                    results[title] = thumb
        except Exception as e:
            print(f"Error fetching chunk: {e}")
    return results

def download_image(url, out_paths, referer=None):
    if not url:
        return False
    primary = out_paths[0]
    headers = [
        '-H', 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    ]
    if referer:
        headers.extend(['-H', f'Referer: {referer}'])
    
    cmd = ['curl', '-s', '-L'] + headers + ['-o', primary, url]
    subprocess.run(cmd)
    
    if os.path.exists(primary) and os.path.getsize(primary) > 1000:
        # Copy to secondary destinations
        for sec in out_paths[1:]:
            with open(primary, 'rb') as f_src, open(sec, 'wb') as f_dst:
                f_dst.write(f_src.read())
        return True
    return False

def main():
    print("Fetching Fandom image URLs...")
    fandom_map = fetch_fandom_image_urls()
    print(f"Found {len(fandom_map)} character image URLs.")
    
    success_count = 0
    fail_count = 0
    
    for char_id, wiki_page in CHAR_FANDOM_PAGES.items():
        norm_title = wiki_page.replace('_', ' ')
        img_url = fandom_map.get(norm_title)
        
        # Paths
        paths = [
            os.path.join(IMG_CHAR_DIST, f"{char_id}.jpg"),
            os.path.join(IMG_CHAR_SRC, f"{char_id}.jpg")
        ]
        
        ok = download_image(img_url, paths, referer="https://harrypotter.fandom.com/")
        if ok:
            sz = os.path.getsize(paths[0])
            print(f"[OK] {char_id} ({sz} bytes)")
            success_count += 1
        else:
            print(f"[FAIL] {char_id} (url: {img_url})")
            fail_count += 1
            
    print(f"\nDone: {success_count} succeeded, {fail_count} failed.")

if __name__ == "__main__":
    main()
