export type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type Temple = {
  id: number;
  name: string;
  god: string;
  chant: string;
  description: string;
  visitOrder: string;
  image: string;
  link: string;
  donationLink: string;
};

export type QuickLink = {
  id: number;
  title: string;
  image: string;
  link: string;
};