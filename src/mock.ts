import { Category, Notebook, ProfileInterface } from './constants';

export const profileData: ProfileInterface = {
  firstname: 'Zhangnu',
  lastname: 'Daruk',
  address: 'France Parist Drongjang.St No.24',
  email: 'zhangnudaruk@gmail.com',
  company: 'BLOCKSTO',
  siren: 'Siren',
  avatar: null,
};

export const notebooksData: Notebook[] = [
  {
    id: '1',
    title: 'Carnet du 63 bis rue Damrémont',
    location: { lat: 35.5496939, lng: -120.7060049 },
    to: 'xyz.abc@gmail.com',
  },
  {
    id: '2',
    title: 'Carnet du 2 rue Saint Antoine',
    location: { lat: 35.5496939, lng: -10.7060049 },
    to: 'xyz.abc@gmail.com',
  },
  {
    id: '3',
    title: 'Carnet du 5 place de la révolution',
    location: { lat: 35.5496939, lng: 10.7060049 },
    to: 'xyz.abc@gmail.com',
  },
  {
    id: '4',
    title: 'Carnet du 6 avenue Kleber',
    location: { lat: 35.5496939, lng: 120.7060049 },
    to: 'xyz.abc@gmail.com',
  },
];

export const categoryData: Category[] = [
  {
    id: '12321232131',
    title: 'Informations générales',
  },
  {
    id: '13890783888',
    title: 'Plans, coupes etsurfaces',
  },
  {
    id: '109328247783',
    title: 'Dossier des ouvrages exécutés - DOE',
  },
  {
    id: '192302843322',
    title: 'Schémas réseaux : eaux, électricité, gaz',
  },
  {
    id: '1023837593930',
    title: 'Diagnostics techniques',
  },
  {
    id: '1920498537783',
    title: 'Certifications et labels',
  },
  {
    id: '1589387839903',
    title: 'Dossier permis deconstruire',
  },
  {
    id: '1999284838377',
    title: 'Devis et factures travaux',
  },
  {
    id: '1998493857489',
    title: 'Autres',
  },
];

export const booksGeneralInfoData: { [key: string]: any } = {
  '1': {
    address: 'Groute 29 St.90, Bolantang',
    type: 'house',
    surface: '2345',
    corp: 'Hello',
    construction_date: new Date(1992, 10, 6),
    dpe: 'hello',
    information: 'This is my real estate',
  },
  '2': {
    address: 'Groute 00 St.00, Bolantang',
    type: 'apartment',
    surface: '5432',
    corp: 'Word',
    construction_date: new Date(1992, 10, 6),
    dpe: 'world',
    information: 'This is my real estate',
  },
};
