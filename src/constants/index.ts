export interface ProfileInterface {
  [key: string]: string | null;
}

export interface ProfileElementInterface {
  title: string;
  label: string;
  required: boolean;
}

export type Notebook = {
  id: string;
  title: string;
  location: LocInfo;
  to: string;
};

export type LocInfo = {
  lat: number;
  lng: number;
};

export type Category = {
  id: string;
  title: string;
};

export type Document = {
  id: string;
  title: string;
  notebook: Notebook;
  created_date: Date;
  storage: number;
  to: string;
}

export const profileElements: ProfileElementInterface[] = [
  { title: 'company', label: 'Entreprise', required: true },
  { title: 'siren', label: 'Siren', required: true },
  { title: 'lastname', label: 'Nom', required: false },
  { title: 'firstname', label: 'Prénom', required: false },
  { title: 'address', label: 'Adresse', required: false },
  { title: 'email', label: 'Email', required: false },
];
