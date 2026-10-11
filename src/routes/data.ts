export interface Experience {
    branch: 'main' | 'formation' | 'job';
    title: string;
    location?: string;
    missions?: string[];
    stack?: string[];

    start: string;
    end?: string;
    duration?: string;
}

export const experiences: Experience[] = [
  {
    branch: 'main' as const,
    title: 'Init',
    start: '1990',
  },
  {
    branch: 'formation' as const,
    title: 'Classes preparatoires - PTSI / PT',
    location: 'ECAM Lyon, Lyon 5<sup>e</sup>',
    start: '2007',
    end: '2009',
  },
  {
    branch: 'formation' as const,
    title: 'DUT informatique année spéciale',
    location: 'IUT Lyon 1, Villeurbanne',
    start: '2009',
    end: '2010',
  },
  {
    branch: 'job' as const,
    title: 'Developpeur web',
    location: 'SYTRAL',
    missions: ['Refonte de l\'intranet ; Creation de modules Joomla!', 'Assistance utilisateurs'],
    stack: ['PHP', 'Joomla!'],
    start: '2010',
    duration: '5 mois',
  },
  {
    branch: 'formation' as const,
    title: 'Licence informatique, 3<sup>e</sup> année',
    location: 'Université Claude Bernard Lyon 1, Villeurbanne',
    start: '2011',
  },
  {
    branch: 'job' as const,
    title: 'Développeur web mobile & Android',
    location: 'AEON Creative Studio',
    missions: ['Intersticiels publicitaires', 'Application collaborative géolocalisée'],
    stack: ['HTML', 'CSS', 'JS', 'Java', 'Android'],
    start: '2013',
    duration: '5 mois',
  },
  {
    branch: 'job' as const,
    title: 'Étudiant-Entrepreneur',
    missions: ['Application mobile pour les métiers du transport'],
    stack: ['Java', 'Android'],
    start: '2015',
    duration: '6 mois',
  },
  {
    branch: 'formation' as const,
    title: 'Développeur Android',
    location: 'Apps Panel',
    missions: [`Création et maintien d'applications Android`],
    stack: ['Java', 'Android'],
    start: '2016',
    duration: '6 mois',
  },
  {
    branch: 'formation' as const,
    title: 'Formation d\'ingénieur, filière informatique',
    location: 'Polytech Lyon, Villeurbanne',
    start: '2012',
    end: '2016',
  },
  {
    branch: 'job' as const,
    title: 'Développeur full-stack et chef de projet',
    location: 'Sifoee Innovation',
    missions: ['Développement web', 'Mise en place de workflow de développement', 'Administration serveur', 'Accompagnement des stagiaires'],
    stack: ['PHP', 'Symfony', 'HTML', 'CSS', 'MariaDB'],
    start: '2016',
    end: '2017',
  },
  {
    branch: 'job' as const,
    title: 'Développeur backend',
    location: 'digiSchool Group',
    missions: ['Création et maintien des microservices paiements et contenus pour les sites et apps'],
    stack: ['TypeScript', 'NestJS', 'NextJS', 'React', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Docker'],
    start: '2018',
    end: '2025',
    // duration: '7 ans 3 mois',
  },
].reverse();


interface Ability {
  ability: string;
  category: 'langages' | 'frameworks' | 'frontend' | 'backend' | 'BDD' | 'déploiement';
  level: number;
}

export const abilities: Ability[] = [
  {
    ability: 'TypeScript',
    category: 'langages' as const,
    level: 5,
  },
  {
    ability: 'Rust',
    category: 'langages' as const,
    level: 3,
  },
  {
    ability: 'GraphQL',
    category: 'langages' as const,
    level: 5,
  },
  {
    ability: 'NestJS',
    category: 'frameworks' as const,
    level: 5,
  },
  {
    ability: 'Next.js',
    category: 'frameworks' as const,
    level: 4,
  },
  {
    ability: 'SvelteKit',
    category: 'frameworks' as const,
    level: 4,
  },
  {
    ability: 'React',
    category: 'frontend' as const,
    level: 3,
  },
  {
    ability: 'Vue.js',
    category: 'frontend' as const,
    level: 4,
  },
  {
    ability: 'MongoDB',
    category: 'BDD' as const,
    level: 5,
  },
  {
    ability: 'PostgreSQL',
    category: 'BDD' as const,
    level: 4,
  },
  {
    ability: 'Docker',
    category: 'déploiement' as const,
    level: 4,
  },
];

interface Language {
  lang: string;
  level: string;
  certificates: Array<{
    name: string;
    year: number;
    score: string;
  }>,
}

export const languages: Language[] = [
  {
    lang: 'anglais',
    level: 'B2',
    certificates: [{ name: 'TOEIC', year: 2016, score: '975/990' }],
  },
];

export const hobbies: string[] = [
  'Escalade',
  'Course à pied',
  'Dessin',
  'Streaming',
  'Jeux de société',
];

interface Contact {
  phone: string;
  email: string;
  address: string;
}

export const contact: Contact = {
  phone: '06 00 00 00 00',
  email: 'thomas.richard.pro@gmail.com',
  address: 'Vaise, Lyon 9<sup>e</sup>',
};

export const readme: string[] = [
  `J'ai 36 ans, dont 20 passés à coder dans divers langages. Je suis curieux, méthodique et exigeant quant à la qualité du code.`,
  `J'ai le permis mais me déplace essentiellement à vélo, j'organise des journées jeux de société, je cours, je grimpe, j'habite chez mes chats et je fais des jeux de mots nuls`,
];