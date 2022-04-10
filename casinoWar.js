console.log("Ultimate Casino War!");
// Ultimate Casino War!

console.log("---------------------------------");

// making deck of cards array

const diamonds = [
  {
    name: "2 of Diamonds",
    value: 2,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/484/large/alex-waller-2-of-diamonds.jpg?1646893207",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "3 of Diamonds",
    value: 3,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/505/large/alex-waller-3-of-diamonds.jpg?1646893293",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "4 of Diamonds",
    value: 4,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/548/large/alex-waller-4-of-diamonds.jpg?1646893399",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "5 of Diamonds",
    value: 5,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/719/large/alex-waller-5-of-diamonds.jpg?1646893906",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "6 of Diamonds",
    value: 6,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/775/large/alex-waller-6-of-diamonds.jpg?1646894158",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "7 of Diamonds",
    value: 7,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/034/large/alex-waller-7-of-diamonds.jpg?1646895029",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "8 of Diamonds",
    value: 8,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/079/large/alex-waller-8-of-diamonds.jpg?1646895297",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "9 of Diamonds",
    value: 9,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/121/large/alex-waller-9-of-diamonds.jpg?1646895409",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "10 of Diamonds",
    value: 10,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/142/large/alex-waller-10-of-diamonds.jpg?1646895474",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Jack of Diamonds",
    value: 11,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/333/large/alex-waller-jackofdiamonds2.jpg?1647385084",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Queen of Diamonds",
    value: 12,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/363/large/alex-waller-queenofdiamonds2.jpg?1647385132",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "King of Diamonds",
    value: 13,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/376/large/alex-waller-kingofdiamonds2.jpg?1647385182",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Ace",
    value: 14,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/157/large/alex-waller-ace-of-diamonds.jpg?1646895544",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  }
];

const clubs = [
  {
    name: "2 of Clubs",
    value: 2,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/173/large/alex-waller-2-of-clubs.jpg?1646895652",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "3 of Clubs",
    value: 3,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/183/large/alex-waller-3-of-clubs.jpg?1646895714",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "4 of Clubs",
    value: 4,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/201/large/alex-waller-4-of-clubs.jpg?1646895773",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "5 of Clubs",
    value: 5,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/216/large/alex-waller-5-of-clubs.jpg?1646895825",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "6 of Clubs",
    value: 6,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/242/large/alex-waller-6-of-clubs.jpg?1646895870",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "7 of Clubs",
    value: 7,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/291/large/alex-waller-7-of-clubs.jpg?1646896010",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "8 of Clubs",
    value: 8,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/308/large/alex-waller-8-of-clubs.jpg?1646896052",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "9 of Clubs",
    value: 9,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/343/large/alex-waller-9-of-clubs.jpg?1646896130",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "10 of Clubs",
    value: 10,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/654/large/alex-waller-10-of-clubs.jpg?1646897253",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Jack of Clubs",
    value: 11,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/254/large/alex-waller-jackofclubs2.jpg?1647384938",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Queen of Clubs",
    value: 12,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/276/large/alex-waller-queenofclubs2.jpg?1647384984",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "King of Clubs",
    value: 13,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/290/large/alex-waller-kingofclubs2.jpg?1647385027",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Ace",
    value: 14,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/662/large/alex-waller-ace-of-clubs.jpg?1646897292",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  }
];

const hearts = [
  {
    name: "2 of Hearts",
    value: 2,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/679/large/alex-waller-2-of-hearts.jpg?1646897367",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "3 of Hearts",
    value: 3,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/688/large/alex-waller-3-of-hearts.jpg?1646897410",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "4 of Hearts",
    value: 4,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/695/large/alex-waller-4-of-hearts.jpg?1646897448",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "5 of Hearts",
    value: 5,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/698/large/alex-waller-5-of-hearts.jpg?1646897501",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "6 of Hearts",
    value: 6,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/710/large/alex-waller-6-of-hearts.jpg?1646897546",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "7 of Hearts",
    value: 7,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/754/large/alex-waller-7-of-hearts.jpg?1646897756",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "8 of Hearts",
    value: 8,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/766/large/alex-waller-8-of-hearts.jpg?1646897792",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "9 of Hearts",
    value: 9,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/774/large/alex-waller-9-of-hearts.jpg?1646897828",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "10 of Hearts",
    value: 10,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/829/large/alex-waller-10-of-hearts.jpg?1646897953",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Jack of Hearts",
    value: 11,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/511/large/alex-waller-jackofhearts2.jpg?1647385544",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Queen of Hearts",
    value: 12,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/528/large/alex-waller-queenofhearts2.jpg?1647385600",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "King of Hearts",
    value: 13,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/537/large/alex-waller-kingofhearts2.jpg?1647385644",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Ace",
    value: 14,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/847/large/alex-waller-ace-of-hearts.jpg?1646897987",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  }
];

const spades = [
  {
    name: "2 of Spades",
    value: 2,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/013/large/alex-waller-2-of-spades.jpg?1646891490",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "3 of Spades",
    value: 3,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/075/large/alex-waller-3-of-spades.jpg?1646891699",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "4 of Spades",
    value: 4,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/094/large/alex-waller-4-of-spades.jpg?1646891746",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "5 of Spades",
    value: 5,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/108/large/alex-waller-5-of-spades.jpg?1646891837",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "6 of Spades",
    value: 6,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/131/large/alex-waller-6-of-spades.jpg?1646891950",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "7 of Spades",
    value: 7,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/149/large/alex-waller-7-of-spades.jpg?1646892024",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "8 of Spades",
    value: 8,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/177/large/alex-waller-8-of-spades.jpg?1646892180",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "9 of Spades",
    value: 9,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/188/large/alex-waller-9-of-spades.jpg?1646892216",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "10 of Spades",
    value: 10,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/221/large/alex-waller-10-of-spades.jpg?1646892325",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Jack of Spades",
    value: 11,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/406/large/alex-waller-jackofspades2.jpg?1647385268",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Queen of Spades",
    value: 12,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/457/large/alex-waller-queenofspades2.jpg?1647385424",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "King of Spades",
    value: 13,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/479/large/alex-waller-kingofspades2.jpg?1647385480",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Ace",
    value: 14,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/379/large/alex-waller-ace-of-spades.jpg?1646892835",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  }
];

console.log("Deck of Cards");

console.log("---------------------------------");
console.log("----------------------------");

console.log("6 decks of cards");

const fullDeck1 = [...diamonds, ...clubs, ...hearts, ...spades];

console.log("fullDeck", fullDeck1);

const fullDeck2 = fullDeck1;

const fullDeck3 = fullDeck1;

const fullDeck4 = fullDeck1;

const fullDeck5 = fullDeck1;

const fullDeck6 = fullDeck1;

const wholeDeck = [
  ...fullDeck1,
  ...fullDeck2,
  ...fullDeck3,
  ...fullDeck4,
  ...fullDeck5,
  ...fullDeck6
];

console.log(52 * 6);
// 312
console.log(wholeDeck.length);
// 312
console.log("wholeDeck", wholeDeck);

console.log("-----------------------------");
console.log("------------------------------");

console.log("shuffling deck");

function shuffleWarDeck(array) {
  let temp = 0;
  let j = 0;
  let i = 0;

  for (; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const warGameDeck = shuffleWarDeck(wholeDeck);

console.log(warGameDeck);
