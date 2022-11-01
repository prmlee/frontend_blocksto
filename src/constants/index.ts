export interface ProfileInterface {
  [key: string]: string | null;
}

export interface ProfileElementInterface {
  title: string;
  label: string;
  required: boolean;
}

export type Notebook = {
  title: string;
  location: string;
  to: string;
};

export const profileElements: ProfileElementInterface[] = [
  { title: 'company', label: 'Entreprise', required: true },
  { title: 'siren', label: 'Siren', required: true },
  { title: 'lastname', label: 'Nom', required: false },
  { title: 'firstname', label: 'Prénom', required: false },
  { title: 'address', label: 'Adresse', required: false },
  { title: 'email', label: 'Email', required: false },
];

export const notebooksData: Notebook[] = [
  {
    title: 'Carnet du 63 bis rue Damrémont',
    location: 'Street 06',
    to: 'xyz.abc@gmail.com',
  },
  {
    title: 'Carnet du 2 rue Saint Antoine',
    location: 'Street 06',
    to: 'xyz.abc@gmail.com',
  },
  {
    title: 'Carnet du 5 place de la révolution',
    location: 'Street 06',
    to: 'xyz.abc@gmail.com',
  },
  {
    title: 'Carnet du 6 avenue Kleber',
    location: 'Street 06',
    to: 'xyz.abc@gmail.com',
  },
];
