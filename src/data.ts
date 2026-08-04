// Archive No. 001 — Lemon Pickle
export const archiveOne = {
  number: 'No. 001',
  catalogId: 'MGNL-001',
  title: 'Lemon Pickle',
  subtitle: 'sun-brined, salt-cured, patiently waiting',
  accent: '#9C3427', // madder — pulled from the warm ochre/amber of the painting
  date: 'Spring 2025',
  description:
    'The first archive opens with the thing in the corner of every South Asian kitchen — a jar of lemon pickle, quietly improving. Before it was a condiment, it was the only way to keep a lemon past its season. This issue traces brine from clay pots to glass jars, across monsoons and migrations, and asks why something so humble has survived every revolution in how we eat.',
  heroImage:
    'https://images.pexels.com/photos/7494618/pexels-photo-7494618.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
  heroImageAlt: 'Oil painting study of lemons with art supplies',
};

// What's inside the envelope — five archival pieces
export const envelopeContents = [
  {
    id: 'print',
    label: 'Fine Art Print',
    fig: 'Plate I',
    catalog: 'MGNL-001-PL',
    note: 'An oil-painted portrait of the ingredient, reproduced on archival cotton paper and hand-signed.',
    image:
      'https://images.pexels.com/photos/32369411/pexels-photo-32369411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'recipe',
    label: 'Recipe',
    fig: 'Card II',
    catalog: 'MGNL-001-RC',
    note: 'The method, written the way you would write it for a friend — measurements, timings, and the things nobody bothers to tell you.',
    image:
      'https://images.pexels.com/photos/28921200/pexels-photo-28921200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'science',
    label: 'Illustrated Science Card',
    fig: 'Fig. III',
    catalog: 'MGNL-001-SC',
    note: 'What salt actually does to a lemon over eleven days — osmosis, fermentation, and the quiet chemistry of preservation.',
    image:
      'https://images.pexels.com/photos/28921194/pexels-photo-28921194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'history',
    label: 'History & Geography Card',
    fig: 'Map IV',
    catalog: 'MGNL-001-HG',
    note: 'A fold-out card tracing the ingredient across borders — where it came from, how it travelled, and what it meant to the people who carried it.',
    image:
      'https://images.pexels.com/photos/20067918/pexels-photo-20067918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'letter',
    label: 'Personal Letter',
    fig: 'Letter V',
    catalog: 'MGNL-001-PL',
    note: 'A handwritten note from the studio — the memory or question that started the whole investigation, signed in ink.',
    image:
      'https://images.pexels.com/photos/51343/old-letters-old-letter-handwriting-51343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

// Archive index — past and future
export const archiveIndex = [
  {
    number: '001',
    title: 'Lemon Pickle',
    status: 'available',
    catalog: 'MGNL-001',
    accent: '#9C3427',
    date: 'Spring 2025',
    image:
      'https://images.pexels.com/photos/35267279/pexels-photo-35267279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'sun-brined · south asia',
  },
  {
    number: '002',
    title: 'Mustard Seeds',
    status: 'coming-soon',
    catalog: 'MGNL-002',
    accent: '#A9812E',
    date: 'Spring 2025',
    image:
      'https://images.pexels.com/photos/18346906/pexels-photo-18346906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'tempered · bengal',
  },
  {
    number: '003',
    title: 'Tamarind',
    status: 'coming-soon',
    catalog: 'MGNL-003',
    accent: '#6B4226',
    date: 'Summer 2025',
    image:
      'https://images.pexels.com/photos/20737581/pexels-photo-20737581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'souring agent · tropical belt',
  },
  {
    number: '004',
    title: 'Khichdi',
    status: 'coming-soon',
    catalog: 'MGNL-004',
    accent: '#4A5A34',
    date: 'Monsoon 2025',
    image:
      'https://images.pexels.com/photos/6363498/pexels-photo-6363498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'rice & lentils · subcontinent',
  },
  {
    number: '005',
    title: 'Curry Leaves',
    status: 'coming-soon',
    catalog: 'MGNL-005',
    accent: '#2E4057',
    date: 'Autumn 2025',
    image:
      'https://images.pexels.com/photos/1334149/pexels-photo-1334149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    note: 'tempering · western ghats',
  },
];

// Reading Room — featured article preview
export const readingRoomArticle = {
  title: 'Why Salt Is the Oldest Story We Tell',
  excerpt:
    'Before vinegar, before sugar, before refrigeration, there was salt. It preserved not just food but entire ways of life — the winter that would have been hungry, the journey that would have been impossible, the flavour that would have been forgotten. A short essay on the most ordinary and most extraordinary ingredient in every kitchen.',
  readTime: '6 min read',
  catalog: 'MGNL-ESS-001',
  date: 'March 2025',
  image:
    'https://images.pexels.com/photos/15833106/pexels-photo-15833106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

// From the Sketchbook — works in progress
export const sketchbook = [
  {
    id: 'sketch-1',
    catalog: 'SKB-01',
    caption: 'first sketch — the jar, before the painting',
    image:
      'https://images.pexels.com/photos/9385558/pexels-photo-9385558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'sketch-2',
    catalog: 'SKB-02',
    caption: 'painting process — layer three, the skins',
    image:
      'https://images.pexels.com/photos/35466720/pexels-photo-35466720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'sketch-3',
    catalog: 'SKB-03',
    caption: 'recipe testing — batch four, day eleven',
    image:
      'https://images.pexels.com/photos/29737184/pexels-photo-29737184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'sketch-4',
    catalog: 'SKB-04',
    caption: 'science illustration — osmosis, first draft',
    image:
      'https://images.pexels.com/photos/28921194/pexels-photo-28921194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

// About — studio images
export const studioImages = [
  'https://images.pexels.com/photos/7302127/pexels-photo-7302127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/4406712/pexels-photo-4406712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://contents2.v101.phobos.apple.com/ugc/36766784/2F9C1F1C-5C5E-4F3E-9F2A-7B1C1D1E1F1F.jpg',
];

export const aboutPortrait =
  'https://images.pexels.com/photos/5033998/pexels-photo-5033998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
