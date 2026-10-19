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
    title: 'Initialisation du processus',
    start: '1990',
  },
  {
    branch: 'formation' as const,
    title: 'Classes preparatoires - PTSI / PT',
    location: 'ECAM Lyon',
    start: '2007',
    end: '2009',
  },
  {
    branch: 'formation' as const,
    title: 'DUT informatique année spéciale',
    location: 'IUT Lyon 1',
    start: '2009',
    end: '2010',
  },
  {
    branch: 'job' as const,
    title: 'Developpeur web',
    location: 'SYTRAL',
    missions: [`Refonte de l'intranet`, `Creation de modules Joomla!`, 'Assistance utilisateurs'],
    stack: ['PHP', 'Joomla!'],
    start: '2010',
    duration: '5 mois',
  },
  {
    branch: 'formation' as const,
    title: 'Licence informatique, 3<sup>e</sup> année',
    location: 'Université Claude Bernard Lyon 1',
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
    title: `Formation d'ingénieur, filière informatique`,
    location: 'Polytech Lyon',
    start: '2012',
    end: '2016',
  },
  {
    branch: 'job' as const,
    title: 'Développeur full-stack et chef de projet',
    location: 'Sifoee Innovation',
    missions: ['Développement web', 'Administration serveur', 'Mise en place de workflows de développement', 'Accompagnement des stagiaires'],
    stack: ['PHP', 'Symfony', 'HTML', 'CSS', 'MariaDB', 'C++', 'Qt'],
    start: '2016',
    end: '2017',
  },
  {
    branch: 'job' as const,
    title: 'Développeur backend',
    location: 'digiSchool Group',
    missions: ['Création et maintien des microservices de paiements, contenus pédagogiques et données utilisateurs pour les sites et apps mobiles', `Maintien de l'API GraphQL et mise en place de bonnes pratiques`, `Évolution du back-office pour le microservice de contenus péagogique`],
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
  'Jeux de société',
  'Dessin',
  'Streaming',
];

interface Contact {
  phone: string;
  email: string;
  address: string;
  addressMap: string;
}

export const contact: Contact = {
  phone: '<not disclosed online>',
  email: 'thomas.richard.pro@gmail.com',
  address: 'Vaise, Lyon 9<sup>e</sup>',
  addressMap: 'https://maps.app.goo.gl/7n4wcj5NeooDkhR18',
};

interface Metadata {
  source: string;
  web: string;
}

export const metadata: Metadata = {
  source: 'github.com/prShadoko/cv',
  web: 'thori.fr/cv',
};

export const readme: string[] = [
  `J'ai 36 ans. Je suis curieux, méthodique, exigeant quant à la qualité du code et je n'hésite pas à poser des questions en cas de doute.`,
  `J'ai fait ma première expérience de la programmation vers mes 9 ans via l'interpreteur BASIC d'un ordinateur VTech pour enfants. J'ai passé les années qui ont suivi à écumer la bibliothèque et le Site du Zéro pour apprendre le C et les langages du Web 1.0. En Terminale, la majeure partie de mes cours de philo aura servi à ce que je code des jeux sur ma TI-89 pour mes camarades.`,
  `Je me déplace essentiellement à vélo, et sur mon temps libre j'organise des journées jeux de société, je cours, je grimpe, je saute d'un projet craft/DIY/bricolage à l'autre et je suis l'heureux beau-père (et portier) de deux chats. Et je fais des jeux de mots nuls.`,
  `Je cherche actuellement un CDI en tant que développeur full-stack ou backend sur Lyon, dans l'idéal à portée de pédalier.`,
];