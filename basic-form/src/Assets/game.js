import eldenRing_img1 from "../Assets/eldenRingSOTET1.png";
import eldenRing_img2 from "../Assets/eldenRingSOTET2.jpg";
import eldenRing_img3 from "../Assets/eldenRingSOTET3.jpg";
import zelda_img1 from "../Assets/ZeldaTOTK1.jpg";
import zelda_img2 from "../Assets/ZeldaTOTK2.png";
import zelda_img3 from "../Assets/ZeldaTOTK3.jpeg";
import bioshock_img1 from "../Assets/Bioshock1.webp";
import bioshock_img2 from "../Assets/Bioshock2.jpg";
import bioshock_img3 from "../Assets/Bioshock3.jpg";
import haloCEA_img1 from "../Assets/HaloCEAnniversary1.jpg";
import haloCEA_img2 from "../Assets/HaloCEAnniversary2.jpg";
import haloCEA_img3 from "../Assets/HaloCEAnniversary3.webp";


let data_game = [
  {
    id: 1,
    name: "Elden Ring: Shadow of the Erd Tree DLC",
    slug: "Elden-Ring-SOET",
    image: [eldenRing_img1,eldenRing_img2,eldenRing_img3],
    price: 2399,
    genre: ["Open World", "Action RPG"],
    platform: ["PC", "PlayStation"],
    description: `Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.`,
    quantity: 1,
  },

  {
    id: 2,
    name: "The Legend of Zelda: Tears of the Kingdom",
    slug: "Zelda-TOTK",
    image: [zelda_img1,zelda_img2,zelda_img3],
    price: 4960,
    genre: ["Open World", "Action RPG"],
    platform: ["Nintendo Switch"],
    description: `In this sequel to the Legend of Zelda: Breath of the Wild game, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?`,
    quantity: 1,
  },

  {
    id: 3,
    name: "Bioshock",
    slug: "Bioshok",
    image: [bioshock_img1,bioshock_img2,bioshock_img3],
    price: 249,
    genre: ["Neo Noir", "Action RPG"],
    platform: ["PC", "XBox", "PlayStation"],
    description: `Explore the undersea city of Rapture, a haven for society's greatest minds that has devolved into a dystopian nightmare wrought by one man's hubris. Amidst the waterlogged ruins, a new ecosystem has emerged, where deranged Splicers hunt down the Little Sisters who would be helpless without their hulking Big Daddy guardians. Your only hopes for survival are quick thinking, reclaimed weaponry, and superhuman powers granted by DNA-altering Plasmids. To defeat Rapture's mutated monsters, you must become one.`,
    quantity: 1,
  },

  {
    id: 4,
    name: "Halo Combat Evolved Anniversary",
    slug: "Halo-CEA",
    image: [haloCEA_img1, haloCEA_img2, haloCEA_img3],
    price: 829,
    genre: ["First Person", "Shooter"],
    platform: ["PC", "XBox"],
    description: `Halo: Combat Evolved Anniversary comes to PC as the second installment of Halo: The Master Chief Collection. Now optimized for PC, relive the spectacularly remastered edition of the original Halo campaign, created in celebration of the 10th anniversary of one of the most beloved franchises in gaming history. After crash-landing on a mysterious ringworld known as Halo, the Master Chief is tasked with helping the remaining humans survive against the overwhelming Covenant forces. While doing so, he and Cortana uncover Halo's dark secret and fight to protect all life in the galaxy. `,
    quantity: 1,
  },
];

export default data_game;
