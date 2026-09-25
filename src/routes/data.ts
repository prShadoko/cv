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
    branch: 'main',
    title: 'Init',
    start: '1990',
  },
  {
    branch: 'formation',
    title: 'Classes preparatoires - PTSI / PT',
    location: 'ECAM Lyon, Lyon 5<sup>e</sup>',
    start: '2007',
    end: '2009',
  },
  {
    branch: 'formation',
    title: 'DUT informatique année spéciale',
    location: 'IUT Lyon 1, Villeurbanne',
    start: '2009',
    end: '2010',
  },
  {
    branch: 'job',
    title: 'Developpeur web',
    location: 'SYTRAL',
    missions: ['Refonte de l\'intranet ; Creation de modules Joomla!', 'Assistance utilisateurs'],
    stack: ['PHP', 'Joomla!'],
    start: '2010',
    duration: '5 mois',
  },
  {
    branch: 'formation',
    title: 'Licence informatique, 3<sup>e</sup> année',
    location: 'Université Claude Bernard Lyon 1, Villeurbanne',
    start: '2011',
  },
  {
    branch: 'job',
    title: 'Développeur web mobile & Android',
    location: 'AEON Creative Studio',
    missions: ['Intersticiels publicitaires', 'Application collaborative géolocalisée'],
    stack: ['HTML', 'CSS', 'JS', 'Java', 'Android'],
    start: '2013',
    duration: '5 mois',
  },
  {
    branch: 'job',
    title: 'Étudiant-Entrepreneur',
    missions: ['Application mobile pour les métiers du transport'],
    stack: ['Java', 'Android'],
    start: '2015',
    duration: '6 mois',
  },
  {
    branch: 'formation',
    title: 'Développeur Android',
    location: 'Apps Panel',
    missions: ['Création et maintien d\'applications Android'],
    stack: ['Java', 'Android'],
    start: '2016',
    duration: '6 mois',
  },
  {
    branch: 'formation',
    title: 'Formation d\'ingénieur, filière informatique',
    location: 'Polytech Lyon, Villeurbanne',
    start: '2012',
    end: '2016',
  },
  {
    branch: 'job',
    title: 'Développeur full-stack et chef de projet',
    location: 'Sifoee Innovation',
    missions: ['Développement web', 'Mise en place de workflow de développement', 'Administration serveur', 'Accompagnement des stagiaires'],
    stack: ['PHP', 'Symfony', 'HTML', 'CSS', 'MariaDB'],
    start: '2016',
    end: '2017',
  },
  {
    branch: 'job',
    title: 'Développeur backend',
    location: 'digiSchool Group',
    missions: ['Création et maintien des microservices de paiement et de contenus pour les sites et apps'],
    stack: ['TypeScript', 'NestJS', 'NextJS', 'React', 'GraphQL', 'MongoDB', 'PostgreSQL'],
    start: '2018',
    end: '2025',
    // duration: '7 ans 3 mois',
  },
].reverse();
