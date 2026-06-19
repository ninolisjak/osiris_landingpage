// Osiris site data — edit via /admin.html (saved to Supabase)
const SUPABASE_URL = 'https://xtrpefrpntpekpfunfuj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_0STPXY3oSs3Kb6kMQLgOOQ_5_w0grJ3';

const OSIRIS_DEFAULTS = {
  config: {
    artistName: "Osiris",
    tagline: "Techno · SCHRANZ",
    estYear: "2026",
    coordinates: "52.5°N / 13.4°E",
    bio: "Osiris is a techno artist navigating the space between ancient mythology and the modern dancefloor. His sets are cyclical and relentless built on layered percussion, submerged frequencies, and hypnotic repetition.",
    bioSecondary: "More <strong>lore</strong> coming soon!",
    photoCreditLine: "Ph. — / Berlin 2024",
    bookingEmail: "techno.osiris@gmail.com",
    bookingRegion: "Worldwide",
    footerCopyright: "© 2026 Osiris — All Rites Reserved",
    pressKitUrl: "",
    socialLinks: {
      soundcloud: "https://soundcloud.com/osiris_techno_music",
      instagram: "https://www.instagram.com/osiris_techno?igsh=MWpuZzh1NHNyODBmNQ==",
      ra: "",
      bandcamp: ""
    }
  },
  releases: [
    { id: "osr001", catalog: "OSR·001", title: "Rushline I", label: "Self-released", year: "2026", url: "https://soundcloud.com/osiris_techno_music/rushline1?si=a80ad6fecd2c4f3e99b990fb88468b15&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", artType: "circles" },
    { id: "osr012", catalog: "OSR·012", title: "Rushline II", label: "Self-released", year: "2026", url: "https://soundcloud.com/osiris_techno_music/rushline2?si=ed251fb3405842d2818029bba7222a3f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", artType: "squares" },
    { id: "tresor310", catalog: "TRESOR·310", title: "Duat / Amduat", label: "Tresor", year: "2023", url: "", artType: "crosshair" },
    { id: "comp08", catalog: "COMP·08", title: "Lacuna / Void State", label: "Compound", year: "2022", url: "", artType: "hexagon" }
  ],
  shows: [
    { id: "show1", date: "27 JUN 26", venue: "X-Time", city: "Berlin", country: "DE", ticketUrl: "", soldOut: false },
    { id: "show2", date: "04 JUL 26", venue: "Publika", city: "London", country: "UK", ticketUrl: "", soldOut: false },
    { id: "show3", date: "12 JUL 26", venue: "Cvetlicarna", city: "Paris", country: "FR", ticketUrl: "", soldOut: false },
    { id: "show4", date: "26 JUL 26", venue: "Media Center", city: "Offenbach", country: "DE", ticketUrl: "", soldOut: false },
    { id: "show5", date: "09 AUG 26", venue: "Borovci", city: "Berlin", country: "DE", ticketUrl: "", soldOut: true },
    { id: "show6", date: "22 AUG 26", venue: "V picki materni", city: "Amsterdam", country: "NL", ticketUrl: "", soldOut: false }
  ],
  mixes: [
    { id: "mix1", title: "Subterranea Mix Vol. 3", platform: "Soundcloud", year: "2024", duration: "2:28:00", url: "", featured: true },
    { id: "mix2", title: "Fabric Presents: Osiris", platform: "Fabric", year: "2024", duration: "1:58:00", url: "", featured: false },
    { id: "mix3", title: "RA Podcast 978", platform: "Resident Advisor", year: "2023", duration: "1:44:00", url: "", featured: false },
    { id: "mix4", title: "Tresor Sessions 041", platform: "Tresor", year: "2024", duration: "2:06:00", url: "", featured: false }
  ],
  videos: [
    { id: "vid1", title: "RA Live @ Tresor Berlin", year: "2024", url: "" },
    { id: "vid2", title: "Boiler Room Berlin", year: "2023", url: "" },
    { id: "vid3", title: "Dimensions Festival Live", year: "2024", url: "" }
  ],
  spotlight: [
    { id: "sp1", url: "https://soundcloud.com/osiris_techno_music/rushline2" },
    { id: "sp2", url: "https://soundcloud.com/osiris_techno_music/rushline1" }
  ]
};

async function getOsirisData() {
  try {
    const res = await fetch(SUPABASE_URL + '/rest/v1/site_data?id=eq.main&select=data', {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY
      }
    });
    if (res.ok) {
      const rows = await res.json();
      if (rows.length && rows[0].data && Object.keys(rows[0].data).length > 0) {
        const saved = rows[0].data;
        return {
          config: Object.assign({}, OSIRIS_DEFAULTS.config, saved.config, {
            socialLinks: Object.assign({}, OSIRIS_DEFAULTS.config.socialLinks, (saved.config || {}).socialLinks)
          }),
          releases: saved.releases || OSIRIS_DEFAULTS.releases,
          shows:    saved.shows    || OSIRIS_DEFAULTS.shows,
          mixes:    saved.mixes    || OSIRIS_DEFAULTS.mixes,
          videos:   saved.videos   || OSIRIS_DEFAULTS.videos,
          spotlight: saved.spotlight || OSIRIS_DEFAULTS.spotlight
        };
      }
    }
  } catch(e) {}
  return OSIRIS_DEFAULTS;
}

async function saveOsirisData(data) {
  const res = await fetch(SUPABASE_URL + '/rest/v1/site_data?id=eq.main', {
    method: 'PATCH',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ data })
  });
  if (!res.ok) throw new Error('Save failed: ' + res.status);
}

function resetOsirisData() {
  return saveOsirisData(OSIRIS_DEFAULTS).then(() => OSIRIS_DEFAULTS);
}
