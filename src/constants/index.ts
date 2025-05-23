// src/i18n/data.ts
import { t } from './index'

export interface Service {
  id: number
  title: string
  description: string
  image: string
}

export interface Temple {
  id: number
  name: string
  god: string
  chant: string
  description: string
  visitOrder: string
  image: string
  link: string
}

export interface QuickLink {
  id: number
  title: string
  image: string
  link: string
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: t('services.pipelineConstruction.title'),
    description: t('services.pipelineConstruction.description'),
    image: 'image/pipecon.jpg',
  },
  {
    id: 2,
    title: t('services.pipelineMaintenance.title'),
    description: t('services.pipelineMaintenance.description'),
    image: 'image/pipema.jpg',
  },
  {
    id: 3,
    title: t('services.pipelineInspection.title'),
    description: t('services.pipelineInspection.description'),
    image: 'image/pipein.jpg',
  },
]

export const TEMPLES: Temple[] = [
  {
    id: 0,
    name: t('temples.siddhivinayak.name'),
    god: t('temples.siddhivinayak.god'),
    chant: t('temples.siddhivinayak.chant'),
    description: t('temples.siddhivinayak.description'),
    visitOrder: t('temples.siddhivinayak.visitOrder'),
    image: '/image/ganesh.png',
    link: 'https://www.siddhivinayak.org/',
  },
  {
    id: 1,
    name: t('temples.tirumala.name'),
    god: t('temples.tirumala.god'),
    chant: t('temples.tirumala.chant'),
    description: t('temples.tirumala.description'),
    visitOrder: t('temples.tirumala.visitOrder'),
    image: 'image/tirumala.png',
    link: 'https://www.tirumala.org',
  },
  {
    id: 2,
    name: t('temples.kasi.name'),
    god: t('temples.kasi.god'),
    chant: t('temples.kasi.chant'),
    description: t('temples.kasi.description'),
    visitOrder: t('temples.kasi.visitOrder'),
    image: 'image/kasi.png',
    link: 'https://www.shrikashivishwanath.org',
  },
  {
    id: 3,
    name: t('temples.rameswaram.name'),
    god: t('temples.rameswaram.god'),
    chant: t('temples.rameswaram.chant'),
    description: t('temples.rameswaram.description'),
    visitOrder: t('temples.rameswaram.visitOrder'),
    image: 'image/rame.png',
    link: 'https://ramanathatemple.tnhrce.in',
  },
  {
    id: 4,
    name: t('temples.jagannathPuri.name'),
    god: t('temples.jagannathPuri.god'),
    chant: t('temples.jagannathPuri.chant'),
    description: t('temples.jagannathPuri.description'),
    visitOrder: t('temples.jagannathPuri.visitOrder'),
    image: 'image/jagannath.png',
    link: 'https://jagannath.nic.in',
  },
  {
    id: 5,
    name: t('temples.meenakshiAmman.name'),
    god: t('temples.meenakshiAmman.god'),
    chant: t('temples.meenakshiAmman.chant'),
    description: t('temples.meenakshiAmman.description'),
    visitOrder: t('temples.meenakshiAmman.visitOrder'),
    image: 'image/meenakshi.png',
    link: 'https://maduraimeenakshi.hrce.tn.gov.in',
  },
  {
    id: 6,
    name: t('temples.somnath.name'),
    god: t('temples.somnath.god'),
    chant: t('temples.somnath.chant'),
    description: t('temples.somnath.description'),
    visitOrder: t('temples.somnath.visitOrder'),
    image: 'image/somnath.png',
    link: 'https://somnath.org',
  },
  {
    id: 7,
    name: t('temples.vaishnoDevi.name'),
    god: t('temples.vaishnoDevi.god'),
    chant: t('temples.vaishnoDevi.chant'),
    description: t('temples.vaishnoDevi.description'),
    visitOrder: t('temples.vaishnoDevi.visitOrder'),
    image: 'image/vaishnodevi.png',
    link: 'https://www.maavaishnodevi.org',
  },
  {
    id: 8,
    name: t('temples.sabarimala.name'),
    god: t('temples.sabarimala.god'),
    chant: t('temples.sabarimala.chant'),
    description: t('temples.sabarimala.description'),
    visitOrder: t('temples.sabarimala.visitOrder'),
    image: 'image/sabarimala.png',
    link: 'https://sabarimala.kerala.gov.in',
  },
  {
    id: 9,
    name: t('temples.goldenTemple.name'),
    god: t('temples.goldenTemple.god'),
    chant: t('temples.goldenTemple.chant'),
    description: t('temples.goldenTemple.description'),
    visitOrder: t('temples.goldenTemple.visitOrder'),
    image: 'image/goldentemple.png',
    link: 'https://sgpc.net',
  },
  {
    id: 10,
    name: t('temples.kedarnath.name'),
    god: t('temples.kedarnath.god'),
    chant: t('temples.kedarnath.chant'),
    description: t('temples.kedarnath.description'),
    visitOrder: t('temples.kedarnath.visitOrder'),
    image: 'image/kedarnath.png',
    link: 'https://badrinath-kedarnath.gov.in',
  },
  {
    id: 12,
    name: t('temples.hanumanGarhi.name'),
    god: t('temples.hanumanGarhi.god'),
    chant: t('temples.hanumanGarhi.chant'),
    description: t('temples.hanumanGarhi.description'),
    visitOrder: t('temples.hanumanGarhi.visitOrder'),
    image: 'image/hanumangarhi.png',
    link: 'https://uttarakhandtourism.gov.in',
  },
  {
    id: 13,
    name: t('temples.dwarkadhishTemple.name'),
    god: t('temples.dwarkadhishTemple.god'),
    chant: t('temples.dwarkadhishTemple.chant'),
    description: t('temples.dwarkadhishTemple.description'),
    visitOrder: t('temples.dwarkadhishTemple.visitOrder'),
    image: 'image/dwarkadhish.png',
    link: 'https://dwarkadhish.org',
  },
  {
    id: 14,
    name: t('temples.shaniShingnapur.name'),
    god: t('temples.shaniShingnapur.god'),
    chant: t('temples.shaniShingnapur.chant'),
    description: t('temples.shaniShingnapur.description'),
    visitOrder: t('temples.shaniShingnapur.visitOrder'),
    image: 'image/shanishingnapur.png',
    link: 'https://shanishingnapur.com',
  },
  {
    id: 15,
    name: t('temples.mahalakshmiTemple.name'),
    god: t('temples.mahalakshmiTemple.god'),
    chant: t('temples.mahalakshmiTemple.chant'),
    description: t('temples.mahalakshmiTemple.description'),
    visitOrder: t('temples.mahalakshmiTemple.visitOrder'),
    image: 'image/mahalakshmi.png',
    link: 'https://mummahalakshmi.in',
  },
  {
    id: 16,
    name: t('temples.konarkSunTemple.name'),
    god: t('temples.konarkSunTemple.god'),
    chant: t('temples.konarkSunTemple.chant'),
    description: t('temples.konarkSunTemple.description'),
    visitOrder: t('temples.konarkSunTemple.visitOrder'),
    image: 'image/konark.png',
    link: 'https://konark.nic.in',
  },
  {
    id: 17,
    name: t('temples.shirdiSaiBabaTemple.name'),
    god: t('temples.shirdiSaiBabaTemple.god'),
    chant: t('temples.shirdiSaiBabaTemple.chant'),
    description: t('temples.shirdiSaiBabaTemple.description'),
    visitOrder: t('temples.shirdiSaiBabaTemple.visitOrder'),
    image: 'image/shirdi.png',
    link: 'https://sai.org.in',
  },
]

export const QUICK_LINKS: QuickLink[] = [
  {
    id: 1,
    title: t('quickLinks.services'),
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
    link: '#services',
  },
  {
    id: 2,
    title: t('quickLinks.projects'),
    image: 'image/pipecon.png',
    link: '#projects',
  },
  {
    id: 3,
    title: t('quickLinks.temples'),
    image: 'https://images.pexels.com/photos/6957679/pexels-photo-6957679.jpeg',
    link: '#temples',
  },
  {
    id: 4,
    title: t('quickLinks.contact'),
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    link: '#contact',
  },
]

export const DEITIES = [
  { id: 0, name: t('deities.surya.name'), audio: '/audio/surya.mp3', backgroundImage: '/image/konark.png' },
  { id: 1, name: t('deities.shiva.name'), audio: '/audio/shiva.mp3', backgroundImage: '/image/kasi.png' },
  { id: 2, name: t('deities.hanuman.name'), audio: '/audio/hanuman.mp3', backgroundImage: 'image/hanumangarhi.png' },
  { id: 3, name: t('deities.ganesha.name'), audio: '/audio/ganesha.mp3', backgroundImage: '/image/ganesh.png' },
  { id: 4, name: t('deities.vishnu.name'), audio: '/audio/vishnu.mp3', backgroundImage: '/image/dwarkadhish.png' },
  { id: 5, name: t('deities.lakshmi.name'), audio: '/audio/lakshmi.mp3', backgroundImage: '/image/mahalakshmi.png' },
  { id: 6, name: t('deities.shani.name'), audio: '/audio/shani.mp3', backgroundImage: 'image/shanishingnapur.png' },
]

export const GLOSSARY: Record<string, string> = {
  'pipeline coating': t('glossary.pipelineCoating'),
  Prasadam: t('glossary.prasadam'),
}
