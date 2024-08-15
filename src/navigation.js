import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: "L'escapade",
      links: [
        {
          text: 'Quoi ?',
          href: getPermalink(),
        },
        {
          text: 'Qui ?',
          href: getPermalink('/accueil/qui'),
        },
        {
          text: 'Pourquoi ?',
          href: getPermalink('/accueil/pourquoi'),
        },
        {
          text: 'Presse',
          href: getPermalink('/accueil/presse'),
        },
      ],
    },
    {
      text: 'Itinéraires',
      links: [
        {
          text: 'Le Mans > Lyon',
          href: getPermalink('/itineraires/itineraire1'),
        },
        {
          text: 'Lyon > Marseille',
          href: getPermalink('/itineraires/itineraire2'),
        },
        {
          text: 'Marseille > Toulouse',
          href: getPermalink('/itineraires/itineraire3'),
        },
        {
          text: 'Toulouse > Bordeaux',
          href: getPermalink('/itineraires/itineraire4'),
        },
        {
          text: 'Bordeaux > Le Mans',
          href: getPermalink('/itineraires/itineraire5'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Accueil',
          href: getBlogPermalink(),
        },
        {
          text: 'Naissance du projet',
          href: getPermalink('post-0', 'post'),
        },
        {
          text: 'Financement participatif',
          href: getPermalink('post-1', 'post'),
        },
        {
          text: 'Préparation avant le départ',
          href: getPermalink('post-2', 'post'),
        },
        {
          text: 'Le premier jour vers Ecommoy !',
          href: getPermalink('post-3', 'post'),
        },
        {
          text: "Brass'vie à Jupilles !",
          href: getPermalink('post-4', 'post'),
        },
        {
          text: "Inondations entre Jupilles et Tours !",
          href: getPermalink('post-5', 'post'),
        },
        {
          text: "Internet associatif à Tours !",
          href: getPermalink('post-6', 'post'),
        },
      ],
    },
  ],
  actions: [{ text: 'Vidéos', variant: 'primary', href: 'https://www.youtube.com/@Transiscapade', target: '_blank' }, 
  { variant: 'primary', text: 'Soutenez le projet', href: 'https://fr.tipeee.com/transiscapade/', target: '_blank' }
],
};

export const footerData = {
  links: [
    {
      title: 'Transiscopade',
      links: [
        { text: 'Financement participatif', href: 'https://fr.tipeee.com/transiscapade/' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Projets transis-portés',
      links: [
        { text: 'Transiscope', href: 'https://transiscope.org/' },
        { text: 'Assemblée virtuelle', href: 'https://virtual-assembly.org/' },
        { text: 'Vhélio', href: 'https://vhelio.org' },
        { text: 'Les chemins de la transition', href: 'https://lescheminsdelatransition.org' },
        { text: 'Low-tech lab', href: 'https://lowtechlab.org/' },
        { text: 'Hameaux légers', href: 'https://hameaux-legers.org/' },
        { text: 'Monnaie libre', href: 'https://monnaie-libre.fr/' },
      ],
    },
    {
      title: 'Autes projets proches',
      links: [
        { text: 'Le périple de Barnabé Chaillot en vhélio', href: 'https://vhelio.org/suivez-le-periple-de-barnabe/' },
        { text: 'Jérome Zindy - vélo-reporter', href: 'https://www.jeromezindy.fr/' },
        { text: 'Jacob Kharu - Voyage en europe en vélo solaire', href: 'https://www.youtube.com/@JacobKarhu' },
        { text: 'La Sun Trip', href: 'https://www.thesuntrip.com/' },
        { text: 'La diagonale du plein', href: 'https://www.diagonaleduplein.fr/' },
        { text: 'Le tour alternatiba (2024)', href: 'https://alternatiba.eu/nos-actions/tour-alternatiba-2024/' },
        { text: "L'Altertour", href: 'https://www.altercampagne.net/' },
        { text: "Le PermacoolTour", href: 'https://www.kevinsimon.fr/index.php/le-permacooltour-3/' },
        { text: "Demain c'est mieux !", href: 'https://demaincestmieux.com/' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Qui suis-je ?', href: '/accueil/qui' },
        { text: 'Comment me contacter ?', href: '/accueil/qui' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@Transiscapade', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61556861211105', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/transiscapade_1/', target: '_blank' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/yannick-duthe-569a741b/', target: '_blank' },
    { ariaLabel: 'Financement participatif', icon: 'tabler:moneybag', href: 'https://fr.tipeee.com/transiscapade', target: '_blank' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
