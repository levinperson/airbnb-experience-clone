const cardData = [
  {
    id: 1,
    title: "Life lessons with Katie Zaferes",
    Description:
      'I will share with you what I call " positively impactful moments of Disappointment. " Throughout my career, many of my highest moments only came after disappointments and losses. But learning from those difficult moments is what gave me the ability to overcome them and reach my goals.',
    price: 136,
    coverImg: require("./images/swimmer.png"),
    stats: {
      rating: "5.0",
      reviewCount: 6,
    },
    location: "USA",
    openSpots: 0,
  },

  {
    id: 2,
    title: "Learn Wedding photography",
    Description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy memories that'll last a lifetime.",
    price: 125,
    coverImg: require("./images/wedding.png"),
    stats: {
      rating: "5.0",
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
  },

  {
    id: 3,
    title: "Group Mountain Biking",
    Description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg: require("./images/bike.png"),
    stats: {
      rating: "4.8",
      reviewCount: 2,
    },
    location: "Canada",
    openSpots: 20,
  },
];

export default cardData;
