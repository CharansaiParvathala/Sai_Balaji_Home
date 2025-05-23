export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Temple {
  id: number;
  name: string;
  god: string;
  chant: string;
  description: string;
  visitOrder: string;
  image: string;
  link: string;
}

export interface QuickLink {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Pipeline Construction',
    description: 'Building strong pipelines.',
    image: 'image/pipecon.jpg'
  },
  {
    id: 2,
    title: 'Pipeline Maintenance',
    description: 'Keeping pipelines safe with pipeline coating.',
    image: 'image/pipema.jpg'
  },
  {
    id: 3,
    title: 'Pipeline Inspection',
    description: 'Checking pipelines for quality.',
    image: 'image/pipein.jpg'
  }
];

export const TEMPLES: Temple[] = [
  {
    id: 0,
    name: 'Siddhivinayak',
    god: 'Lord Ganesha',
    chant: 'Om Ganeshaya Namah',
    description: 'Iconic temple in Mumbai dedicated to Lord Ganesha, known for fulfilling devotees’ wishes.',
    visitOrder: 'Main Entrance → Darshan Queue → Ganesha Idol → Circumambulation → Prasad Counter',
    image: '/image/ganesh.png',
    link: 'https://www.siddhivinayak.org/'
  },
  {
    id: 1,
    name: 'Tirumala',
    god: 'Sri Venkateswara Swamy',
    chant: 'Om Namo Venkatesaya',
    description: 'Famous hill temple in Andhra Pradesh.',
    visitOrder: 'Koneti Snanum → Varaha Swamy → Lord Sri Venkateswara → Prasadam → Alivelu Mangapuram',
    image: 'image/tirumala.png',
    link: 'https://www.tirumala.org'
  },
  {
    id: 2,
    name: 'Kasi',
    god: 'Lord Shiva',
    chant: 'Om Namah Shivaya',
    description: 'Holy city on the Ganges.',
    visitOrder: 'Ganga Aarti → Kasi Vishwanath → Annapurna',
    image: 'image/kasi.png',
    link: 'https://www.shrikashivishwanath.org'
  },
  {
    id: 3,
    name: 'Rameswaram',
    god: 'Lord Rama',
    chant: 'Jai Shri Ram',
    description: 'Island temple in Tamil Nadu.',
    visitOrder: 'Agni Theertham → Ramanathaswamy → Dhanushkodi',
    image: 'image/rame.png',
    link: 'https://ramanathatemple.tnhrce.in'
  },
  {
    id: 4,
    name: 'Jagannath Puri',
    god: 'Lord Jagannath',
    chant: 'Jai Jagannath',
    description: 'Sacred temple in Odisha, part of Char Dham pilgrimage.',
    visitOrder: 'Bada Danda → Jagannath Temple → Gundicha Temple',
    image: 'image/jagannath.png',
    link: 'https://jagannath.nic.in'
  },
  {
    id: 5,
    name: 'Meenakshi Amman',
    god: 'Goddess Meenakshi',
    chant: 'Om Sri Meenakshi Amman',
    description: 'Historic temple in Madurai, Tamil Nadu, known for its architecture.',
    visitOrder: 'Meenakshi Sundareswarar → Golden Lotus Tank → Thousand Pillar Hall',
    image: 'image/meenakshi.png',
    link: 'https://maduraimeenakshi.hrce.tn.gov.in'
  },
  {
    id: 6,
    name: 'Somnath',
    god: 'Lord Shiva',
    chant: 'Om Namah Shivaya',
    description: 'Ancient Jyotirlinga temple in Gujarat.',
    visitOrder: 'Triveni Sangam → Somnath Temple → Bhalka Tirtha',
    image: 'image/somnath.png',
    link: 'https://somnath.org'
  },
  {
    id: 7,
    name: 'Vaishno Devi',
    god: 'Goddess Vaishno Devi',
    chant: 'Jai Mata Di',
    description: 'Holy cave shrine in Jammu and Kashmir.',
    visitOrder: 'Katra → Ban Ganga → Vaishno Devi Cave → Bhairon Temple',
    image: 'image/vaishnodevi.png',
    link: 'https://www.maavaishnodevi.org'
  },
  {
    id: 8,
    name: 'Sabarimala',
    god: 'Lord Ayyappa',
    chant: 'Swamiye Saranam Ayyappa',
    description: 'Hill temple in Kerala, known for its strict pilgrimage rituals.',
    visitOrder: 'Pamba River → Malikappuram → Ayyappa Temple',
    image: 'image/sabarimala.png',
    link: 'https://sabarimala.kerala.gov.in'
  },
  {
    id: 9,
    name: 'Golden Temple',
    god: 'Guru Granth Sahib',
    chant: 'Waheguru Ji Ka Khalsa',
    description: 'Sikh spiritual center in Amritsar, Punjab.',
    visitOrder: 'Amrit Sarovar → Harmandir Sahib → Langar Hall',
    image: 'image/goldentemple.png',
    link: 'https://sgpc.net'
  },
  {
    id: 10,
    name: 'Kedarnath',
    god: 'Lord Shiva',
    chant: 'Om Namah Shivaya',
    description: 'Jyotirlinga temple in the Himalayas, Uttarakhand.',
    visitOrder: 'Gaurikund → Kedarnath Temple → Bhairavnath Temple',
    image: 'image/kedarnath.png',
    link: 'https://badrinath-kedarnath.gov.in'
  },
  {
    id: 12,
    name: 'Hanuman Garhi (Tuesday Special)',
    god: 'Lord Hanuman',
    chant: 'Jai Bajrang Bali',
    description: 'Tuesday is dedicated to Hanuman for strength and protection.',
    visitOrder: 'Main Gate → Hanuman Idol → Circumambulation',
    image: 'image/hanumangarhi.png',
    link: 'https://uttarakhandtourism.gov.in'
  },
  {
    id: 13,
    name: 'Dwarkadhish Temple (Wednesday Special)',
    god: 'Lord Krishna',
    chant: 'Om Namo Bhagavate Vasudevaya',
    description: 'Wednesday is ideal for Krishna worship, for knowledge and peace.',
    visitOrder: 'Gomti Ghat → Dwarka Darshan → Rukmini Temple',
    image: 'image/dwarkadhish.png',
    link: 'https://dwarkadhish.org'
  },
  {
    id: 14,
    name: 'Shani Shingnapur (Saturday Special)',
    god: 'Shani Dev',
    chant: 'Om Sham Shanicharaya Namah',
    description: 'Saturday is for Shani Dev – remover of karmic obstacles.',
    visitOrder: 'Main Idol → Oil Offering → Circumambulation',
    image: 'image/shanishingnapur.png',
    link: 'https://shanishingnapur.com'
  },
  {
    id: 15,
    name: 'Mahalakshmi Temple (Friday Special)',
    god: 'Goddess Lakshmi',
    chant: 'Om Shreem Mahalakshmyai Namah',
    description: 'Friday is best to seek blessings of wealth and harmony.',
    visitOrder: 'Main Shrine → Lakshmi Idol → Prasad Counter',
    image: 'image/mahalakshmi.png',
    link: 'https://mummahalakshmi.in'
  },
  {
    id: 16,
    name: 'Konark Sun Temple (Sunday Special)',
    god: 'Surya',
    chant: '',
    description: 'Sunday is the day of Sun God, best for vitality and health.',
    visitOrder: 'Chariot View → Natya Mandap → Surya Idol',
    image: 'image/konark.png',
    link: 'https://konark.nic.in'
  },
  {
    id: 17,
    name: 'Shirdi Sai Baba Temple (Thursday Special)',
    god: 'Sai Baba',
    chant: 'Om Sai Namo Namah',
    description: 'Thursday is Guru\'s day, best for visiting Sai Baba temples.',
    visitOrder: 'Samadhi Mandir → Dwarkamai → Chavadi',
    image: 'image/tirumala.png',
    link: 'https://sai.org.in'
  }
];

export const QUICK_LINKS: QuickLink[] = [
  {
    id: 1,
    title: 'Services',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
    link: '#services'
  },
  {
    id: 2,
    title: 'Projects',
    image: 'image/pipecon.png',
    link: '#projects'
  },
  {
    id: 3,
    title: 'Temples',
    image: 'https://images.pexels.com/photos/6957679/pexels-photo-6957679.jpeg',
    link: '#temples'
  },
  {
    id: 4,
    title: 'Contact',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    link: '#contact'
  }
];

export const DEITIES = [
  {
    id: 0, // Sunday
    name: 'Lord Surya',
    audio: '/audio/surya.mp3',
    backgroundImage: '/image/konark.png',
  },
  {
    id: 1, // Monday
    name: 'Lord Shiva',
    audio: '/audio/shiva.mp3',
    backgroundImage: '/image/kasi.png',
  },
  {
    id: 2, // Tuesday
    name: 'Lord Hanuman',
    audio: '/audio/hanuman.mp3',
    backgroundImage: 'image/hanumangarhi.png',
  },
  {
    id: 3, // Wednesday
    name: 'Lord Ganesha',
    audio: '/audio/ganesha.mp3',
    backgroundImage: '/image/ganesh.png',
  },
  {
    id: 4, // Thursday
    name: 'Lord Vishnu',
    audio: '/audio/vishnu.mp3',
    backgroundImage: '/image/dwarkadhish.png',
  },
  {
    id: 5, // Friday
    name: 'Goddess Lakshmi',
    audio: '/audio/lakshmi.mp3',
    backgroundImage: '/image/mahalakshmi.png',
  },
  {
    id: 6, // Saturday
    name: 'Lord Shani',
    audio: '/audio/shani.mp3',
    backgroundImage: 'image/shanishingnapur.png',
  },
];

export const GLOSSARY = {
  'pipeline coating': 'Protective layer to prevent corrosion',
  'Prasadam': 'Food offered to the deity'
};