export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  originalPrice: number;
  insanePrice: number;
  stock: number;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "NetRunner X9 Tactical",
    image: "/cyberdeck1.jpg",
    description: "TOP-TIER infiltration deck! Military-grade encryption & firewall-busting capabilities that'll make corps CRY! Comes with custom hardware overrides.",
    originalPrice: 15999,
    insanePrice: 8799,
    stock: 2,
    featured: true
  },
  {
    id: 2,
    name: "Neon Dream DX",
    image: "/cyberdeck2.jpg",
    description: "The ultimate entertainment & hacking combo! Holographic interface, ultra-fast processing cores, and embedded neural link compatibility!",
    originalPrice: 12499,
    insanePrice: 6299,
    stock: 7,
    featured: true
  },
  {
    id: 3,
    name: "StreetWolf Compact",
    image: "/cyberdeck3.jpg",
    description: "Sleek, discrete & LETHAL! Perfect for quick jobs and street runners who need mobility. Built-in security bypasser might be slightly illegal!",
    originalPrice: 8999,
    insanePrice: 4299,
    stock: 3,
    featured: true
  },
  {
    id: 4,
    name: "HexCore Command Console",
    image: "/cyberdeck4.jpg",
    description: "When you need to control EVERYTHING. Multi-system management, drone override capacity, and custom LED lighting that'll make your enemies jealous!",
    originalPrice: 19999,
    insanePrice: 10999,
    stock: 1,
    featured: false
  },
  {
    id: 5,
    name: "Phantom Edge Pro",
    image: "/cyberdeck2.jpg",
    description: "Ghost through corporate firewalls like they don't exist! Quantum processing core with stealth protocols. Might have fallen off a BlackOps transport!",
    originalPrice: 22999,
    insanePrice: 12499,
    stock: 2,
    featured: false
  },
  {
    id: 6,
    name: "DataKraken Ultimate",
    image: "/cyberdeck3.jpg",
    description: "The beast that devours data! Multi-threaded neural interface with experimental consciousness transfer capabilities. Use at your own risk!",
    originalPrice: 25999,
    insanePrice: 14999,
    stock: 1,
    featured: false
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "WHY CORPS HATE ME",
    date: "2077-03-15",
    excerpt: "The TRUTH about why MegaCorps are trying to shut down honest businessmen like yours truly! Their security is LAUGHABLE!",
    featured: true
  },
  {
    id: 2,
    title: "TOP 5 CYBERDECK MODS (NUMBER 3 IS ILLEGAL IN 12 DISTRICTS!)",
    date: "2077-03-10",
    excerpt: "Boost your deck's performance with these INSANE mods! Warning: Some assembly required. No refunds if you fry your neural ports!",
    featured: false
  },
  {
    id: 3,
    title: "CUSTOMER SPOTLIGHT: 'EDDIE'S DECK SAVED MY LIFE!'",
    date: "2077-03-05",
    excerpt: "Read the SHOCKING story of how one of my custom-modded decks helped a client escape a corp raid with all their limbs intact!",
    featured: false
  }
];