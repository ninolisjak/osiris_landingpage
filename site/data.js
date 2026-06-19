// Osiris site data — edit here or via /admin.html
const OSIRIS_DATA = {
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
    {
      id: "osr001",
      catalog: "OSR·001",
      title: "Rushline I",
      label: "Self-released",
      year: "2026",
      url: "https://soundcloud.com/osiris_techno_music/rushline1?si=a80ad6fecd2c4f3e99b990fb88468b15&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      artType: "circles"
    },
    {
      id: "osr012",
      catalog: "OSR·012",
      title: "Rushline II",
      label: "Self-released",
      year: "2026",
      url: "https://soundcloud.com/osiris_techno_music/rushline2?si=ed251fb3405842d2818029bba7222a3f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      artType: "squares"
    },
    {
      id: "tresor310",
      catalog: "TRESOR·310",
      title: "Duat / Amduat",
      label: "Tresor",
      year: "2023",
      url: "",
      artType: "crosshair"
    },
    {
      id: "comp08",
      catalog: "COMP·08",
      title: "Lacuna / Void State",
      label: "Compound",
      year: "2022",
      url: "",
      artType: "hexagon"
    }
  ],
  shows: [
    {
      id: "show1",
      date: "27 JUN 26",
      venue: "X-Time",
      city: "Berlin",
      country: "DE",
      ticketUrl: "",
      soldOut: false
    },
    {
      id: "show2",
      date: "04 JUL 26",
      venue: "Publika",
      city: "London",
      country: "UK",
      ticketUrl: "",
      soldOut: false
    },
    {
      id: "show3",
      date: "12 JUL 26",
      venue: "Cvetlicarna",
      city: "Paris",
      country: "FR",
      ticketUrl: "",
      soldOut: false
    },
    {
      id: "show4",
      date: "26 JUL 26",
      venue: "Media Center",
      city: "Offenbach",
      country: "DE",
      ticketUrl: "",
      soldOut: false
    },
    {
      id: "show5",
      date: "09 AUG 26",
      venue: "Borovci",
      city: "Berlin",
      country: "DE",
      ticketUrl: "",
      soldOut: true
    },
    {
      id: "show6",
      date: "22 AUG 26",
      venue: "V picki materni",
      city: "Amsterdam",
      country: "NL",
      ticketUrl: "",
      soldOut: false
    }
  ],
  mixes: [
    {
      id: "mix1",
      title: "Subterranea Mix Vol. 3",
      platform: "Soundcloud",
      year: "2024",
      duration: "2:28:00",
      url: "",
      featured: true
    },
    {
      id: "mix2",
      title: "Fabric Presents: Osiris",
      platform: "Fabric",
      year: "2024",
      duration: "1:58:00",
      url: "",
      featured: false
    },
    {
      id: "mix3",
      title: "RA Podcast 978",
      platform: "Resident Advisor",
      year: "2023",
      duration: "1:44:00",
      url: "",
      featured: false
    },
    {
      id: "mix4",
      title: "Tresor Sessions 041",
      platform: "Tresor",
      year: "2024",
      duration: "2:06:00",
      url: "",
      featured: false
    }
  ],
  videos: [
    {
      id: "vid1",
      title: "RA Live @ Tresor Berlin",
      year: "2024",
      url: ""
    },
    {
      id: "vid2",
      title: "Boiler Room Berlin",
      year: "2023",
      url: ""
    },
    {
      id: "vid3",
      title: "Dimensions Festival Live",
      year: "2024",
      url: ""
    }
  ],
  // SoundCloud embedded players — paste any track or playlist URL.
  // These render as real SoundCloud waveform players (like the screenshot).
  spotlight: [
    {
      id: "sp1",
      url: "https://soundcloud.com/osiris_techno_music/rushline2"
    },
    {
      id: "sp2",
      url: "https://soundcloud.com/osiris_techno_music/rushline1"
    }
  ]
};

// Persist to localStorage and return merged with any saved overrides.
// Merges saved data onto the defaults so new sections/fields added to
// OSIRIS_DATA still appear for users who already have saved data.
function getOsirisData() {
  try {
    const saved = localStorage.getItem('osiris_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        config: Object.assign({}, OSIRIS_DATA.config, parsed.config, {
          socialLinks: Object.assign({}, OSIRIS_DATA.config.socialLinks, (parsed.config || {}).socialLinks)
        }),
        releases: parsed.releases || OSIRIS_DATA.releases,
        shows:    parsed.shows    || OSIRIS_DATA.shows,
        mixes:    parsed.mixes    || OSIRIS_DATA.mixes,
        videos:   parsed.videos   || OSIRIS_DATA.videos,
        spotlight: parsed.spotlight || OSIRIS_DATA.spotlight
      };
    }
  } catch(e) {}
  return OSIRIS_DATA;
}

function saveOsirisData(data) {
  try {
    localStorage.setItem('osiris_data', JSON.stringify(data));
  } catch(e) {}
}

function resetOsirisData() {
  localStorage.removeItem('osiris_data');
  return OSIRIS_DATA;
}
