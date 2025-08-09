// const WIH = document.getElementById("W.I.H");
let j = 0;

const ChanceCards = [
  {
    text: "Advance to Go (Collect $200)",
    effect: (player) => {
      player.position = 0; // Advance to Go
      if (bank.money >= 200) {
        player.money += 200;
        console.log(`${player.name} lands on Chance and receives $200.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} lands on Chance and receives $200 and Advances to Go.</p>`;
        bank.money -= 200; // Bank pays the player
      } else {
        player.money += bank.money;
        console.log(
          `${player.name} lands on Chance and receives $${bank.money}.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} lands on Chance and receives $${bank.money} and Advances to Go.</p>`;
        bank.money = 0;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Go to Jail",
    effect: (player) => {
      player.position = 10; // Go to jail
      player.dobleroll = 0;
      console.log(`${player.name} goes to jail.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} goes to jail.</p>`;
      player.inJail = 1; // Set player in jail
    },
  },
  {
    text: "Advance to Illinois Avenue. If you pass Go, collect $200.",
    effect: (player) => {
      if (player.position < 24) {
        player.position = 24; // Advance to Illinois Avenue
      } else {
        if (bank.money <= 200) {
          player.money += bank.money;
          console.log(`${player.name} collects $${bank.money} for passing GO.`);
          document.getElementById(
            "WIHIG"
          ).innerHTML += `<p>${player.name} collects $${bank.money} for passing GO.</p>`;

          bank.money = 0;
        } else {
          player.money += 200;
          bank.money -= 200;
          console.log(`${player.name} collects $200 for passing GO.`);
          document.getElementById(
            "WIHIG"
          ).innerHTML += `<p>${player.name} collects $200 for passing GO.</p>`;
        }
        player.position = 24;
        console.log(`${player.name} Advances to Illinois Avenue`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} Advances to Illinois Avenue</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Advance to St. Charles Place. If you pass Go, collect $200.",
    effect: (player) => {
      if (player.position < 11) {
        player.position = 11; // Advance to St. Charles Place
      } else {
        if (bank.money <= 200) {
          player.money += bank.money;
          console.log(`${player.name} collects $${bank.money} for passing GO.`);
          document.getElementById(
            "WIHIG"
          ).innerHTML += `<p>${player.name} collects $${bank.money} for passing GO.</p>`;

          bank.money = 0;
        } else {
          player.money += 200;
          bank.money -= 200;
          player.position = 11;
          console.log(`${player.name} collects $200 for passing GO.`);
          document.getElementById(
            "WIHIG"
          ).innerHTML += `<p>${player.name} collects $200 for passing GO.</p>`;
        }
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Get Out of Jail Free",
    effect: (player) => {
      player.getOutOfJailFreeCard += 1;
      console.log(`${player.name} receives a Get Out of Jail Free card.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} receives a Get Out of Jail Free card.</p>`;
    },
  },
  {
    text: "Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.",
    effect: (player) => {
      if (player.position < 4) {
        player.position = 5; // Advance to nearest Railroad
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.</p>`;
        player.doblerent = true;
      } else if (player.position < 14) {
        player.position = 15; // Advance to nearest Railroad
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.</p>`;
        player.doblerent = true;
      } else if (player.position < 24) {
        player.position = 25; // Advance to nearest Railroad
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.</p>`;
        player.doblerent = true;
      } else if (player.position < 34) {
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.</p>`;
        player.position = 35; // Advance to nearest Railroad
        player.doblerent = true;
      }
    },
  },
  {
    text: "Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner rent equal to 10 times the amount shown on the dice.",
    effect: (player) => {
      if (player.position < 4) {
        player.position = 5; // Advance to nearest Railroad
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.</p>`;
        player.doblerent = true;
      } else if (player.position < 14) {
        player.position = 15; // Advance to nearest Railroad
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.</p>`;
        player.doblerent = true;
      } else if (player.position < 24) {
        player.position = 25; // Advance to nearest Railroad
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.</p>`;
        player.doblerent = true;
      } else if (player.position < 34) {
        player.position = 35; // Advance to nearest Railroad
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled.</p>`;
        player.doblerent = true;
      }
    },
  },
  {
    text: "Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, pay owner rent equal to 10 times the amount shown on the dice.",
    effect: (player) => {
      if (player.position < 20) {
        player.position = 12; // Advance to nearest Utility
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, pay owner rent equal to 10 times the amount shown on the dice.</p>`;
        player.doblerent = true;
      } else if (player.position < 40) {
        player.position = 28; // Advance to nearest Utility
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, pay owner rent equal to 10 times the amount shown on the dice.</p>`;
        player.doblerent = true;
      } else {
        player.position = 12; // Wrap around to the first Utility
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>Advance to the nearest Utility. If unowned, you may buy it from the Bank. If owned, pay owner rent equal to 10 times the amount shown on the dice.</p>`;
        player.doblerent = true;
      }
    },
  },
  {
    text: "Bank pays you dividend of $50",
    effect: (player) => {
      if (bank.money <= 50) {
        player.money += bank.money;
        console.log(
          `${player.name} receives a $${bank.money} dividend from the bank.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} receives a ${bank.money} dividend from the bank.</p>`;
        bank.money = 0;
      } else {
        player.money += 50;
        console.log(`${player.name} receives a $50 dividend from the bank.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} receives a $50 dividend from the bank.</p>`;
        bank.money -= 50; // Bank pays the player
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Pay speed tax of $15",
    effect: (player) => {
      bank.money += 15; // Bank receives the tax
      player.money -= 15;
      console.log(`${player.name} pays a speed tax of $15.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} pays a speed tax of $15.</p>`;
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Go Back 3 Spaces",
    effect: (player) => {
      player.position -= 3;
      if (player.position < 0) {
        player.position = 39;
      }
      console.log(`${player.name} goes back 3 spaces.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} goes back 3 spaces.</p>`;
    },
  },
  {
    text: "Make general repairs on all your property. For each house pay $25. For each hotel pay $100.",
    effect: (player) => {
      let totalCost = 0;
      properties.forEach((property) => {
        if (
          property !== null &&
          property.owned === player &&
          property.houseHotels > 0 &&
          property.constructor.name === "Property"
        ) {
          if (property.houseHotels > 4) {
            totalCost += property.houseHotels * 25;
          } else {
            totalCost += 100;
          }
        }
      });
      if (player.money >= totalCost) {
        player.money -= totalCost;
        console.log(
          `${player.name} pays $${totalCost} for general repairs on all properties.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} pays $${totalCost} for general repairs on all properties.</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: " Take a trip to Reading Railroad. If you pass Go, collect $200.",
    effect: (player) => {
      if (player.position > 5) {
        player.money += 200;
        console.log(`${player.name} collects $200 for passing Go.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} collects $200 for passing Go.</p>`;
        bank.money -= 200; // Bank pays the player
      }
      console.log(`${player.name} takes a trip to Reading Railroad.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} takes a trip to Reading Railroad.</p>`;
      player.position = 5;
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "You have been elected Chairman of the Board. Pay each player $50.",
    effect: (player) => {
      players.forEach((p) => {
        if (p !== player) {
          p.money += 50;
          player.money -= 50;
          console.log(`${player.name} pays $50 to ${p.name}.`);
          document.getElementById(
            "WIHIG"
          ).innerHTML += `<p>${player.name} pays $50 to ${p.name}.</p>`;
        }
      });
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Your building loan matures. Collect $150.",
    effect: (player) => {
      if (bank.money <= 150) {
        player.money += bank.money;
        console.log(
          `${player.name} collects $${bank.money} from their building loan.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} collects $${bank.money} from their building loan.</p>`;
        bank.money = 0;
      } else {
        player.money += 150;
        console.log(`${player.name} collects $150 from their building loan.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} collects $150 from their building loan.</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Advance to Boardwalk.",
    effect: (player) => {
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player} Advances to Boardwalk.</p>`;
      player.position = 39;
    },
  },
  // Add more Chance cards as needed
];
const CommunityChestCards = [
  {
    text: "Advance to Go (Collect $200)",
    effect: (player) => {
      player.position = 0;
      if (bank.money >= 200) {
        player.money += 200;
        bank.money -= 200;
        console.log(`${player.name} advances to Go and collects $200.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} advances to Go and collects $200.</p>`;
      } else {
        player.money += bank.money;
        console.log(
          `${player.name} advances to Go and collects $${bank.money}.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} advances to Go and collects $${bank.money}.</p>`;
        bank.money = 0;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Bank error in your favor. Collect $200",
    effect: (player) => {
      if (bank.money <= 200) {
        player.money += bank.money;
        console.log(
          `${player.name} collects $${bank.money} due to bank error.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} collects $${bank.money} due to bank error.</p>`;
        bank.money = 0;
      } else {
        player.money += 200;
        bank.money -= 200;
        console.log(`${player.name} collects $200 due to bank error.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} collects $200 due to bank error.</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Doctors fee. Pay $50",
    effect: (player) => {
      player.money -= 50;
      bank.money += 50;
      console.log(`${player.name} pays $50 doctors fee.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} pays $50 doctors fee</p>`;
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "From sale of stock you get $50",
    effect: (player) => {
      if (bank.money <= 50) {
        player.money += bank.money;
        console.log(`${player.name} gets $${bank.money} from sale of stock.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} gets $${bank.money} from sale of stock.</p>`;
        bank.money = 0;
      } else {
        player.money += 50;
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} gets $50 from sale of stock.</p>`;
        console.log(`${player.name} gets $50 from sale of stock.`);
        bank.money -= 50;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Get Out of Jail Free",
    effect: (player) => {
      player.getOutOfJailFreeCard += 1;
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} receives a Get Out of Jail Free card.</p>`;
      console.log(`${player.name} receives a Get Out of Jail Free card.`);
    },
  },
  {
    text: "Go to Jail. Go directly to jail, do not pass Go, do not collect $200",
    effect: (player) => {
      player.position = 10;
      player.inJail = 1;
      player.dobleroll = 0;
      console.log(`${player.name} goes directly to jail.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} goes directly to jail.</p>`;
    },
  },
  {
    text: "Holiday fund matures. Receive $100",
    effect: (player) => {
      if (bank.money <= 100) {
        player.money += bank.money;
        console.log(
          `${player.name} receives $${bank.money} from holiday fund.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} receives $${bank.money} from holiday fund.</p>`;
        bank.money = 0;
      } else {
        player.money += 100;
        bank.money -= 100;
        console.log(`${player.name} receives $100 from holiday fund.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} receives $100 from holiday fund.</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Income tax refund. Collect $20",
    effect: (player) => {
      if (bank.money <= 20) {
        player.money += bank.money;
        console.log(
          `${player.name} collects $${bank.money} income tax refund.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>collects $${bank.money} income tax refund.</p>`;
        bank.money = 0;
      } else {
        player.money += 20;
        bank.money -= 20;
        console.log(`${player.name} collects $20 income tax refund.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} collects $20 income tax refund.</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "It is your birthday. Collect $10 from every player",
    effect: (player) => {
      players.forEach((p) => {
        if (p !== player) {
          p.money -= 10;
          player.money += 10;
          console.log(
            `${player.name} collects $10 from ${p.name} for birthday.`
          );
          document.getElementById(
            "WIHIG"
          ).innerHTML += `<p>${player.name} collects $10 from ${p.name} for birthday.</p>`;
        }
      });
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Life insurance matures. Collect $100",
    effect: (player) => {
      if (bank.money <= 100) {
        player.money += bank.money;
        console.log(
          `${player.name} collects $${bank.money} from life insurance.`
        );
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} collects $${bank.money} from life insurance.</p>`;
        bank.money = 0;
      } else {
        player.money += 100;
        bank.money -= 100;
        console.log(`${player.name} collects $100 from life insurance.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} collects $100 from life insurance.</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Pay hospital fees of $100",
    effect: (player) => {
      player.money -= 100;
      bank.money += 100;
      console.log(`${player.name} pays $100 hospital fees.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} pays $100 hospital fees.</p>`;
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Pay school fees of $50",
    effect: (player) => {
      player.money -= 50;
      bank.money += 50;
      console.log(`${player.name} pays $50 school fees.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} pays $50 school fees.</p>`;
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "Receive $25 consultancy fee",
    effect: (player) => {
      player.money += 25;
      bank.money -= 25;
      console.log(`${player.name} receives $25 consultancy fee.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} receives $25 consultancy fee.</p>`;
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "You are assessed for street repair. $40 per house. $115 per hotel",
    effect: (player) => {
      let totalCost = 0;
      properties.forEach((property) => {
        if (
          property !== null &&
          property.owned === player &&
          property.constructor.name === "Property"
        ) {
          if (property.houseHotels > 4) {
            totalCost += 115; // hotel
          } else if (property.houseHotels > 0) {
            totalCost += property.houseHotels * 40; // houses
          }
        }
      });
      player.money -= totalCost;
      bank.money += totalCost;
      console.log(`${player.name} pays $${totalCost} for street repairs.`);
      document.getElementById(
        "WIHIG"
      ).innerHTML += `<p>${player.name} pays $${totalCost} for street repairs.</p>`;
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "You have won second prize in a beauty contest. Collect $10",
    effect: (player) => {
      if (bank.money <= 10) {
        player.money += bank.money;
        console.log(`${player.name} wins $${bank.money} in beauty contest.`);
        bank.money = 0;
      } else {
        player.money += 10;
        bank.money -= 10;
        console.log(`${player.name} wins $10 in beauty contest.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} wins $10 in beauty contest.</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
  {
    text: "You inherit $100",
    effect: (player) => {
      if (bank.money <= 100) {
        player.money += bank.money;
        console.log(`${player.name} inherits $${bank.money}.`);
        bank.money = 0;
      } else {
        player.money += 100;
        bank.money -= 100;
        console.log(`${player.name} inherits $100.`);
        document.getElementById(
          "WIHIG"
        ).innerHTML += `<p>${player.name} inherits $100.</p>`;
      }
      document.getElementById(
        `${player.name}Money`
      ).innerText = `Money: ${player.money}`;
    },
  },
];

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.playerInitial = name[0]; // Initial of the player
    this.position = 0;
    this.money = 1500; // Starting money
    this.getOutOfJailFreeCard = 0;
    this.propertiesOwned = Array.from({ length: 8 }, () => []);
    // [['mediterian','baltic',], [], [], [], [], [], [], []]
    this.RailRoadsOwned = [];
    this.UtilitiesOwned = [];
    this.doblerent = false;
    this.inJail = 0;
    this.dobleroll = 0;
  }
}

function move(player, spaces) {
  console.log(`Rolling the dice: ${spaces}`);

  // Update player position
  let newPosition = player.position + spaces;
  player.position = newPosition;
  spaces = 0;

  // If player passes GO
  if (player.position >= 40) {
    player.position -= 40;

    console.log(`${player.name} collects $200 for passing GO.`);
    document.getElementById(
      `${player.name}Money`
    ).innerHTML = `Money: ${player.money}`;
    if (bank.money >= 200) {
      bank.money -= 200; // Bank pays the player
      player.money += 200; // Collect $200 salary as you pass GO
    } else if (bank.money < 0) {
      player.money += bank.money; // If bank has no money, player gets whatever is left
      bank.money = 0; // Bank money cannot go below 0
      alert("bank has no money");
    } else {
      alert("bank has no money");
    }
  }

  // Handle special spaces
  if (player.position === 30) {
    player.position = 10; // Go to jail
    console.log(`${player.name} goes to jail.`);
  } else if (
    player.position === 7 ||
    player.position === 22 ||
    player.position === 36
  ) {
    // Chance
    chance(player);
  } else if (
    player.position === 2 ||
    player.position === 17 ||
    player.position === 33
  ) {
    // Community Chest
    CommunityChest(player);
  } else if (player.position === 4) {
    // Income Tax
    player.money -= 200;
    console.log(`${player.name} pays $200 Income Tax.`);
    document.getElementById(
      `${player.name}Money`
    ).innerHTML = `Money: ${player.money}`;
    bank.money += 200; // Bank receives the tax
  } else if (player.position === 38) {
    // Luxury Tax
    player.money -= 100;
    console.log(`${player.name} pays $100 Luxury Tax.`);
    document.getElementById(
      `${player.name}Money`
    ).innerHTML = `Money: ${player.money}`;
    bank.money += 100; // Bank receives the tax
  }

  console.log(
    `${player.name} moves to position ${player.position} with $${player.money}`
  );
}

function chance() {
  const currentPlayer = players[j];
  const card = ChanceCards[0];
  card.effect(currentPlayer);
  ChanceCards.push(card);
  ChanceCards.shift();
}
function CommunityChest() {
  const currentPlayer = players[j];
  const card = CommunityChestCards[0];
  card.effect(currentPlayer);
  CommunityChestCards.push(card);
  CommunityChestCards.shift();
}

class Property {
  constructor(
    name,
    color,
    price,
    rent,
    placement,
    houseHotelsPrice,
    owned = 0
  ) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.rent = rent;
    this.placement = placement; // Position on the board
    this.owned = owned;
    this.mortgaged = 0;
    this.houseHotels = 0;
    this.houseHotelsPrice = houseHotelsPrice; // Price for houses/hotels
  }
}
// Railroad class
class Railroad {
  constructor(name, price, rentadder, placement) {
    this.name = name;
    this.price = price;
    this.rentadder = rentadder; // Array of rent values depending on the number of railroads owned
    this.placement = placement; // Position on the board
    this.owned = 0;
  }
}

function calculateRailroadRent(railroad, numberOfRailRoadsOwned) {
  railroad.rentadder[numberOfRailRoadsOwned - 1] * 25;
}

// Utility class
class Utility {
  constructor(name, price, rentMultiplier, placement) {
    this.name = name;
    this.price = price;
    this.rentMultiplier = rentMultiplier; // Multiplier to calculate rent based on dice roll
    this.placement = placement; // Position on the board
    this.owned = 0;
  }
}

function calculateUtilityRent(utility, diceRoll, numberOfUtilitiesOwned) {
  diceRoll * utility.rentMultiplier[numberOfUtilitiesOwned - 1];
}

const properties = [
  null, //0
  new Property(
    "Mediterranean Avenue",
    "SaddleBrown",
    60,
    [2, 4, 10, 30, 90, 160, 250],
    1,
    50
  ),
  null, // 2
  new Property(
    "Baltic Avenue",
    "SaddleBrown",
    60,
    [4, 8, 20, 60, 180, 320, 450],
    3,
    50
  ),
  null, //4
  new Railroad("Reading Railroad", 200, [25, 50, 100, 200], 5),
  new Property(
    "Oriental Avenue",
    "SkyBlue",
    100,
    [6, 12, 30, 90, 270, 400, 550],
    6,
    50
  ),
  null, //7
  new Property(
    "Vermont Avenue",
    "SkyBlue",
    100,
    [6, 12, 30, 90, 270, 400, 550],
    8,
    50
  ),
  new Property(
    "Connecticut Avenue",
    "SkyBlue",
    120,
    [8, 16, 40, 100, 300, 450, 600],
    9,
    50
  ),
  null, //10
  new Property(
    "St. Charles Place",
    "DarkOrchid",
    140,
    [10, 20, 50, 150, 450, 625, 750],
    11,
    100
  ),
  new Utility("Electric Company", 150, [4, 10], 12),
  new Property(
    "States Avenue",
    "DarkOrchid",
    140,
    [10, 20, 50, 150, 450, 625, 750],
    13,
    100
  ),
  new Property(
    "Virginia Avenue",
    "DarkOrchid",
    160,
    [12, 24, 60, 180, 500, 700, 900],
    14,
    100
  ),
  new Railroad("Pennsylvania Railroad", 200, [25, 50, 100, 200], 15),
  new Property(
    "St. James Place",
    "Orange",
    180,
    [14, 28, 70, 200, 550, 750, 950],
    16,
    100
  ),
  null, // 17
  new Property(
    "Tennessee Avenue",
    "Orange",
    180,
    [14, 28, 70, 200, 550, 750, 950],
    18,
    100
  ),
  new Property(
    "New York Avenue",
    "Orange",
    200,
    [16, 32, 80, 220, 600, 800, 1000],
    19,
    100
  ),
  null, //20
  new Property(
    "Kentucky Avenue",
    "Red",
    220,
    [18, 36, 90, 250, 700, 875, 1050],
    21,
    150
  ),
  null, //22
  new Property(
    "Indiana Avenue",
    "Red",
    220,
    [18, 36, 90, 250, 700, 875, 1050],
    23,
    150
  ),
  new Property(
    "Illinois Avenue",
    "Red",
    240,
    [20, 40, 100, 300, 750, 925, 1100],
    24,
    150
  ),
  new Railroad("B&O Railroad", 200, [25, 50, 100, 200], 25),
  new Property(
    "Atlantic Avenue",
    "Yellow",
    260,
    [22, 44, 110, 330, 800, 975, 1150],
    26,
    150
  ),
  new Property(
    "Ventnor Avenue",
    "Yellow",
    260,
    [22, 44, 110, 330, 800, 975, 1150],
    27,
    150
  ),
  new Utility("Water Works", 150, [4, 10], 28),
  new Property(
    "Marvin Gardens",
    "Yellow",
    280,
    [24, 48, 120, 360, 850, 1025, 1200],
    29,
    150
  ),
  null, //30
  new Property(
    "Pacific Avenue",
    "Green",
    300,
    [26, 52, 130, 390, 900, 1100, 1275],
    31,
    200
  ),
  new Property(
    "North Carolina Avenue",
    "Green",
    300,
    [26, 52, 130, 390, 900, 1100, 1275],
    32,
    200
  ),
  null, //33
  new Property(
    "Pennsylvania Avenue",
    "Green",
    320,
    [28, 56, 150, 450, 1000, 1200, 1400],
    34,
    200
  ),
  new Railroad("Short Line", 200, [25, 50, 100, 200], 35),
  null, // 36
  new Property(
    "Park Place",
    "Blue",
    350,
    [35, 70, 175, 500, 1100, 1300, 1500],
    37,
    200
  ),
  null, //38
  new Property(
    "Boardwalk",
    "Blue",
    400,
    [50, 100, 200, 600, 1400, 1700, 2000],
    39,
    200
  ),
];
let playerCount = 2;
const players = [];
let bank = { money: 20580, Houses: 32, Hotels: 12 };

function addPlayer() {
  if (playerCount === 13) {
    alert("Max players reached");
    return;
  } else {
    const playerForm = document.getElementById("player-form");
    const playerInput = document.createElement("div");
    playerInput.classList.add("player-input");
    playerInput.innerHTML = `
    <label for="player-name-${playerCount}">Player ${
      playerCount + 1
    } Name:</label>
    <input type="text" id="player-name-${playerCount}" name="player-name-${playerCount}" value="Player ${
      playerCount + 1
    }">
    <label for="player-color-${playerCount}">Color:</label>
    <input type="color" id="player-color-${playerCount}" name="player-color-${playerCount}" value="#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}">
  `;
    playerForm.insertBefore(playerInput, playerForm.children[playerCount]);
    playerCount++;
  }
}
function startGame() {
  let WIHIG = document.getElementById("WIHIG");
  for (let i = ChanceCards.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [ChanceCards[i], ChanceCards[k]] = [ChanceCards[k], ChanceCards[i]];
  }
  for (let i = CommunityChestCards.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [CommunityChestCards[i], CommunityChestCards[k]] = [
      CommunityChestCards[k],
      CommunityChestCards[i],
    ];
  }
  const playerlist = document.getElementById("playerlist");
  for (let i = 0; i < playerCount; i++) {
    const playerName = document.getElementById(`player-name-${i}`).value;
    const playerColor = document.getElementById(`player-color-${i}`).value;
    players.push(new Player(playerName, playerColor));
    playerlist.innerHTML += `
    <div class="player">
    <h3 >${players[i].name}</h3>
    <p id="${players[i].name}Money">Money: ${players[i].money}</p>
    <p>Properties:</p>
    <ul id = "${players[i].name}properties">
      
    </ul>
    </div>`;
    bank.money -= players[i].money; // Deduct initial money from the bank
    document.getElementById("tradeplayer").innerHTML += `
   <option id="${players[i].name}">${players[i].name}</option>`;
    document.getElementById("tradeplayer2").innerHTML += `
   <option id="${players[i].name}">${players[i].name}</option>`;
  }
  // for (let i = 0; i < players.lenght; i++) {}
  const board = document.getElementById("board");
  players.forEach((player) => {
    if (player.name === "") {
      alert("Please enter a name for all players");
      location.reload();
    }

    const playerElement = document.createElement("div");
    playerElement.classList.add("player");
    playerElement.id = player.name.replace(" ", "");

    playerElement.style.backgroundColor = player.color;
    playerElement.innerText = player.name[0]; // Initial of the player
    board.children[player.position].appendChild(playerElement);
  });

  document.getElementById("player-selection").style.display = "none";
  rollDice = document.getElementById("dice");
  document.getElementById("Pay50").onclick = function () {
    if (players[j].money >= 50) {
      players[j].money -= 50;
      bank.money += 50;
      players[j].inJail = 0;
      document.getElementById("Pay50").style.display = "none";
      document.getElementById("UseGOFJRC").style.display = "none";
    } else {
      alert(`${players[j].name} can't pay the fee`);
    }
  };
  document.getElementById("UseGOFJRC").onclick = function () {
    if (players[j].getOutOfJailFreeCard > 0) {
      players[j].getOutOfJailFreeCard -= 1;
      players[j].inJail = 0;
      document.getElementById("Pay50").style.display = "none";
      document.getElementById("UseGOFJRC").style.display = "none";
    } else {
      alert("don't have any get out of jail free cards");
    }
  };

  document.getElementById("dice").addEventListener("click", function () {
    if (properties[players[j].position] !== null) {
      if (properties[players[j].position].owned === 0) {
        auction(properties[players[j].position]);
      }
    }
    document.getElementById("dice").style.display = "none";
    document.getElementById("NextTurn").style.display = "inline-block";

    //move player
    console.log("players.length", players.length);
    console.log("beforej", j);
    console.log("beforej", players[j]);
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    rolldice = dice1 + dice2;
    if (dice1 === dice2) {
      if (players[j].inJail === 0) {
        players[j].dobleroll += 1;
      } else {
        players[j].inJail = 0;
        players[j].dobleroll = 0;
      }
    } else {
      players[j].dobleroll = 0;
    }
    if (players[j].dobleroll === 3) {
      players[j].dobleroll = 0;
      players[j].inJail = 1;
      players[j].position = 10;
      document.getElementById("dice").style.display = "none";
      document.getElementById("NextTurn").style.display = "inline-block";
    }
    if (players[j].inJail === 4 && dice1 !== dice2) {
      alert("you have to pay the $50 fee");
      WIHIG.innerHTML += `<p>${players[j].name} paid the 50$ fee to get out of jail</p>`;
    }
    WIHIG.innerHTML += `<p>${players[j].name} rolled a ${dice1} and a ${dice2} with $${players[j].money}</p>`;
    console.log(
      `${players[j].name} rolled a ${dice1} and a ${dice2} with $${players[j].money}`
    );
    if (players[j].inJail === 0) {
      move(players[j], rolldice);
    } else {
      players[j].inJail += 1;
    }

    const newPosition = players[j].position;
    board.children[newPosition].appendChild(
      document.querySelector("#" + players[j].name.replace(" ", ""))
    );

    // buy property/pay rent
    if (properties[newPosition] !== null) {
      let propertyName = document.getElementById("propertyName");
      let propertyPrice = document.getElementById("propertyPrice");
      let propertyRent = document.getElementById("propertyRent");
      let propertyHouse1 = document.getElementById("propertyHouse1");
      let propertyHouse2 = document.getElementById("propertyHouse2");
      let propertyHouse3 = document.getElementById("propertyHouse3");
      let propertyHouse4 = document.getElementById("propertyHouse4");
      let propertyHotel = document.getElementById("propertyHotel");
      // Property details
      if (properties[newPosition].constructor.name === "Property") {
        propertyName.innerHTML = properties[newPosition].name;
        propertyPrice.innerHTML = "Price: " + properties[newPosition].price;
        propertyRent.innerHTML = "Rent: " + properties[newPosition].rent[0];
        propertyHouse1.innerHTML =
          "House 1: " + properties[newPosition].rent[1];
        propertyHouse2.innerHTML =
          "House 2: " + properties[newPosition].rent[2];
        propertyHouse3.innerHTML =
          "House 3: " + properties[newPosition].rent[3];
        propertyHouse4.innerHTML =
          "House 4: " + properties[newPosition].rent[4];
        propertyHotel.innerHTML = "Hotel: " + properties[newPosition].rent[5];
      } else if (properties[newPosition].constructor.name === "Utility") {
        propertyName.innerHTML = properties[newPosition].name;
        propertyPrice.innerHTML = "Price: " + properties[newPosition].price;
        propertyHouse1.innerHTML =
          "Multiplier: " + properties[newPosition].rentMultiplier[0];
        propertyHouse2.innerHTML =
          "Multiplier: " + properties[newPosition].rentMultiplier[1];
      } else if (properties[newPosition].constructor.name === "Railroad") {
        propertyName.innerHTML = properties[newPosition].name;
        propertyPrice.innerHTML = "Price: " + properties[newPosition].price;
        propertyHouse1.innerHTML =
          "Rent: " + properties[newPosition].rentadder[0];
        propertyHouse2.innerHTML =
          "Rent: " + properties[newPosition].rentadder[1];
        propertyHouse3.innerHTML =
          "Rent: " + properties[newPosition].rentadder[2];
        propertyHouse4.innerHTML =
          "Rent: " + properties[newPosition].rentadder[3];
      }
      // buy property
      if (properties[newPosition].owned === 0) {
        document.getElementById("NextTurn").style.display = "none";

        if (players[j].money >= properties[newPosition].price) {
          enablebuy(newPosition);
        } else {
          document.getElementById("NextTurn").style.display = "none";
        }

        //pay rent
      } else {
        if (properties[newPosition].owned === players[j]) {
          return;
        } else if (properties[newPosition].mortgaged === 1) {
          return;
        } else {
          if (properties[newPosition].constructor.name === "Property") {
            const colorGroups = [
              "SaddleBrown",
              "SkyBlue",
              "DarkOrchid",
              "Orange",
              "Red",
              "Yellow",
              "Green",
              "Blue",
            ];
            if ((properties[newPosition].houseHotels = 0)) {
              // no houses or hotel rent
              for (let m = 0; m < 9; m++) {
                if (properties[newPosition].color === colorGroups[m]) {
                  if (
                    colorGroups[m] === "SaddleBrown" ||
                    colorGroups[m] === "Blue"
                  ) {
                    if (
                      properties[newPosition].owned.propertiesOwned[m]
                        .lenght === 2
                    ) {
                      players[j].money -= properties[newPosition].rent[1];
                      properties[newPosition].owned.money +=
                        properties[newPosition].rent[1];
                      WIHIG.innerHTML += `<p>${players[j].name} pays ${properties[newPosition].rent[1]} of rent to ${properties[newPosition].owned.name} </p>`;
                    } else {
                      players[j].money -= properties[newPosition].rent[0];
                      properties[newPosition].owned.money +=
                        properties[newPosition].rent[0];
                      WIHIG.innerHTML += `<p>${players[j].name} pays ${properties[newPosition].rent[0]} of rent to ${properties[newPosition].owned.name} </p>`;
                    }
                  } else {
                    if (
                      properties[newPosition].owned.propertiesOwned[m]
                        .lenght === 3
                    ) {
                      players[j].money -= properties[newPosition].rent[1];
                      properties[newPosition].owned.money +=
                        properties[newPosition].rent[1];
                      WIHIG.innerHTML += `<p>${players[j].name} pays ${properties[newPosition].rent[1]} of rent to ${properties[newPosition].owned.name} </p>`;
                    } else {
                      players[j].money -= properties[newPosition].rent[0];
                      properties[newPosition].owned.money +=
                        properties[newPosition].rent[0];
                      WIHIG.innerHTML += `<p>${players[j].name} pays ${properties[newPosition].rent[0]} of rent to ${properties[newPosition].owned.name} </p>`;
                    }
                  }
                  break; // Exit the loop after finding the color group
                }
              }
              // houses or hotel rent
            } else if (properties[newPosition].houseHotels > 0) {
              for (let m = 2; m < 7; m++) {
                if (properties[newPosition].houseHotels === m - 1) {
                  players[j].money -= properties[newPosition].rent[m];
                  properties[newPosition].owned.money +=
                    properties[newPosition].rent[m + 1];
                  console.log(
                    `${players[j].name} pays $${properties[newPosition].rent[m]} of rent to ${properties[newPosition].owned.name}`
                  );
                  WIHIG.innerHTML += `<p>${players[j].name} pays ${properties[newPosition].rent[m]} of rent to ${properties[newPosition].owned.name} </p>`;
                  break; // Exit the loop after finding the rent
                }
              }
            }
          } else if (properties[newPosition].constructor.name === "Railroad") {
            pay = calculateRailroadRent(
              properties[newPosition],
              properties[newPosition].owned.RailRoadsOwned.length
            );
            if (players[j].doblerent === true) {
              pay *= 2;
            }
            players[j].money -= pay;
            properties[newPosition].owned.money += pay;
            WIHIG.innerHTML += `<p>${players[j].name} paid ${pay} to ${properties[newPosition].owned}</p>`;
          } else if (properties[newPosition].constructor.name === "Utility") {
            pay = calculateUtilityRent(
              properties[newPosition],
              rolldice,
              properties[newPosition].owned.UtilitiesOwned.length
            );
            if (players[j].doblerent === true) {
              pay *= 10;
            }
            players[j].money -= pay;
            properties[newPosition].owned.money += pay;
            WIHIG.innerHTML += `<p>${players[j].name} pays ${pay} of rent to ${properties[newPosition].owned}</p>`;
          }
          players[j].doblerent = false;
        }
      }
    }
    if (players[j].dobleroll > 0) {
      document.getElementById("dice").style.display = "inline-block";
      document.getElementById("NextTurn").style.display = "none";
    }
  });

  let NextTurn = document.getElementById("NextTurn");
  NextTurn.addEventListener("click", function () {
    if (properties[players[j].position] !== null) {
      if (properties[players[j].position].owned === 0) {
        auction(properties[players[j].position]);
      }
    }
    if (players[j].money < 0) {
      removePlayer();
    }
    //move on to next player
    if (players.length === 1) {
      alert(`${players[j].name} wins`);
      return;
    }
    nexturn();
    WIHIG.innerHTML += `${players[j].name} turn`;
    if (players[j].inJail >= 1) {
      document.getElementById("Pay50").style.display = "inline-block";
      document.getElementById("UseGOFJRC").style.display = "inline-block";
    } else {
      document.getElementById("Pay50").style.display = "none";
      document.getElementById("UseGOFJRC").style.display = "none";
    }

    document.getElementById("dice").style.display = "inline-block";
    NextTurn.style.display = "none";
  });
}
function removePlayer() {
  p = 1;
  properties.forEach(() => {
    if (
      (p = 0 || 2 || 4 || 7 || 10 || 18 || 20 || 22 || 30 || 33 || 36 || 38)
    ) {
      p++;
    }

    console.log(properties[p].owned);
    //putting properties in bank
    if (properties[p].owned === players[j].name) {
      properties.owned = 0;
      console.log(properties.name, "Is back with the bank");
    }
    p++;
  });

  players[j].propertiesOwned.length = 0;
  console.log(players[j].name, "has gone bankrupt");
  document.getElementById(
    "WIHIG"
  ).innerHTML += `<p>${players[j].name} has gone bankrupt</p>`;
  players.splice(j, 1);

  console.log(players);
  document.querySelector(".player").style.display = "none";
}

function nexturn() {
  if (j >= players.length - 1) {
    j = 0;
    console.log("1 turn cycle has finshed");
    console.log(`${players[j].name}'s turn`);
  } else {
    j++;
    console.log(`${players[j].name}'s turn`);
  }
  console.log("afterj", j);
}
async function auction(property) {
  let bid = document.getElementById("bid");
  let bidInput = document.getElementById("bidButton");
  let exit = document.getElementById("exit");
  let Pass = document.getElementById("Pass");
  let highestbiddershow = document.getElementById("highestbidder");
  let currentbidder = document.getElementById("currentbidder");
  document.getElementById("auctioncontainer").style.display = "inline-block";
  document.getElementById("Buy").style.display = "none";
  document.getElementById("Auction").style.display = "none";
  document.getElementById("currentproperty").innerHTML = property.name;

  let highestBid = 0;
  let highestBidder = null;
  let activePlayers = players.slice(); // Copy of players array
  while (activePlayers.length > 1) {
    for (let i = 0; i < activePlayers.length; i++) {
      let player = activePlayers[i];
      console.log(`${player.name}'s turn to bid`);
      currentbidder.innerHTML = `${player.name}`;

      async function waitUntil(condition) {
        while (!condition()) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }

      let actionTaken = false;
      bidInput.onclick = function () {
        bidOffered = parseInt(bid.value);
        if (bidOffered > highestBid) {
          highestBid = bidOffered;
          highestBidder = player;
          highestbiddershow.innerHTML = `${player.name} is the highest bidder with $${highestBid}`;
        } else {
          console.log(
            `${player.name} bid $${bidOffered}, which is lower than the current highest bid of $${highestBid}.`
          );
          alert(
            `${player.name} bid $${bidOffered}, which is lower than the current highest bid of $${highestBid}. ${player.name} is skiped`
          );
        }
        actionTaken = true;
      };
      exit.onclick = function () {
        activePlayers.splice(i, 1);
        i--; // Adjust index after removal
        actionTaken = true;
      };
      Pass.onclick = function () {
        actionTaken = true;
      };

      await waitUntil(() => actionTaken);
    }
  }

  if (highestBidder) {
    let list = document.getElementById(`${highestBidder.name}properties`);
    highestBidder.money -= highestBid;
    bank.money += highestBid;
    property.owned = highestBidder;
    if (property.constructor.name === "Property") {
      if (property.color === "SaddleBrown") {
        highestBidder.propertiesOwned[0].push(property);
        list.innerHTML += `<li>${property.name}</li>`;
      } else if (property.color === "SkyBlue") {
        list.innerHTML += `<li>${property.name}</li>`;
        highestBidder.propertiesOwned[1].push(property);
      } else if (property.color === "DarkOrchid") {
        list.innerHTML += `<li>${property.name}</li>`;
        highestBidder.propertiesOwned[2].push(property);
      } else if (property.color === "Orange") {
        list.innerHTML += `<li>${property.name}</li>`;
        highestBidder.propertiesOwned[3].push(property);
      } else if (property.color === "Yellow") {
        list.innerHTML += `<li>${property.name}</li>`;
        highestBidder.propertiesOwned[4].push(property);
      } else if (property.color === "Green") {
        list.innerHTML += `<li>${property.name}</li>`;
        highestBidder.propertiesOwned[5].push(property);
      } else if (property.color === "Blue") {
        list.innerHTML += `<li>${property.name}</li>`;
        highestBidder.propertiesOwned[6].push(property);
      }
    } else if (property.constructor.name === "Utility") {
      list.innerHTML += `<li>${property.name}</li>`;
      highestBidder.UtilitiesOwned.push(property);
    } else if (property.constructor.name === "Railroad") {
      list.innerHTML += `<li>${property.name}</li>`;
      highestBidder.RailRoadsOwned.push(property);
    }
    updateOwnerBanner(property);
    console.log(
      `${highestBidder.name} won the auction for ${property.name} with a bid of $${highestBid}`
    );
    alert(
      `${highestBidder.name} won the auction for ${property.name} with a bid of $${highestBid}`
    );
    document.getElementById(
      `${highestBidder.name}Money`
    ).innerHTML = `Money: ${highestBidder.money}`;
  } else {
    console.log(`No one bid on ${property.name}.`);
  }
  document.getElementById("auctioncontainer").style.display = "none";
}

function enablebuy(newPosition) {
  let Buy = document.getElementById("Buy");
  let Auction = document.getElementById("Auction");
  Buy.style.display = "inline-block";
  Auction.style.display = "inline-block";

  Buy.onclick = function () {
    buy(newPosition);
  };
  Auction.onclick = function () {
    auction(properties[newPosition]);
  };
}
function buy(newPosition) {
  document.getElementById("NextTurn").style.display = "inline-block";
  let list = document.getElementById(`${players[j].name}properties`);
  players[j].money -= properties[newPosition].price;
  bank.money += properties[newPosition].price;
  properties[newPosition].owned = players[j];
  if (properties[newPosition].constructor.name === "Property") {
    if (properties[newPosition].color === "SaddleBrown") {
      players[j].propertiesOwned[0].push(properties[newPosition]);
      list.innerHTML += `<li>${properties[newPosition].name}</li>`;
    } else if (properties[newPosition].color === "SkyBlue") {
      list.innerHTML += `<li>${properties[newPosition].name}</li>`;
      players[j].propertiesOwned[1].push(properties[newPosition]);
    } else if (properties[newPosition].color === "DarkOrchid") {
      list.innerHTML += `<li>${properties[newPosition].name}</li>`;
      players[j].propertiesOwned[2].push(properties[newPosition]);
    } else if (properties[newPosition].color === "Orange") {
      list.innerHTML += `<li>${properties[newPosition].name}</li>`;
      players[j].propertiesOwned[3].push(properties[newPosition]);
    } else if (properties[newPosition].color === "Red") {
      list.innerHTML += `<li>${properties[newPosition].name}</li>`;
      players[j].propertiesOwned[4].push(properties[newPosition]);
    } else if (properties[newPosition].color === "Yellow") {
      list.innerHTML += `<li>${properties[newPosition].name}</li>`;
      players[j].propertiesOwned[5].push(properties[newPosition]);
    } else if (properties[newPosition].color === "Green") {
      list.innerHTML += `<li>${properties[newPosition].name}</li>`;
      players[j].propertiesOwned[6].push(properties[newPosition]);
    } else if (properties[newPosition].color === "Blue") {
      list.innerHTML += `<li>${properties[newPosition].name}</li>`;
      players[j].propertiesOwned[7].push(properties[newPosition]);
    }
  } else if (properties[newPosition].constructor.name === "Utility") {
    list.innerHTML += `<li>${properties[newPosition].name}</li>`;
    players[j].UtilitiesOwned.push(properties[newPosition]);
  } else if (properties[newPosition].constructor.name === "Railroad") {
    list.innerHTML += `<li>${properties[newPosition].name}</li>`;
    players[j].RailRoadsOwned.push(properties[newPosition]);
  }
  updateOwnerBanner(properties[newPosition]);

  propertyName.innerHTML = "";
  propertyPrice.innerHTML = "Price: ";
  propertyRent.innerHTML = "Rent: ";
  propertyHouse1.innerHTML = "House 1: ";
  propertyHouse2.innerHTML = "House 2: ";
  propertyHouse3.innerHTML = "House 3: ";
  propertyHouse4.innerHTML = "House 4: ";
  propertyHotel.innerHTML = "Hotel: ";
  document.getElementById(
    `${players[j].name}Money`
  ).innerHTML = `Money: ${players[j].money}`;

  console.log(
    `${players[j].name} bought ${properties[newPosition].name} for ${properties[newPosition].price}`
  );
  document.getElementById(
    "WIHIG"
  ).innerHTML += `<p>${players[j].name} bought ${properties[newPosition].name} for ${properties[newPosition].price}</p>`;
  let Buy = document.getElementById("Buy");
  let Auction = document.getElementById("Auction");
  Buy.style.display = "none";
  Auction.style.display = "none";
}
function buyHouse() {
  // Logic for buying a house
  let currentPlayer = players[j];
  const propertySpaces = Array.from(document.querySelectorAll("#space"));
  propertySpaces.forEach((space) => {
    if (space.style.backgroundColor === "darkgreen") {
      properties.forEach((property) => {
        if (property !== null) {
          if (property.constructor.name === "Property") {
            if (property.owned === currentPlayer) {
              if (property.placement === Number(space.getAttribute("place"))) {
                if (bank.Houses > 0) {
                  console.log("passed basic checks");
                  const colorGroups = [
                    "SaddleBrown",
                    "SkyBlue",
                    "DarkOrchid",
                    "Orange",
                    "Red",
                    "Yellow",
                    "Green",
                    "Blue",
                  ];
                  for (let m = 0; m < 9; m++) {
                    if (property.color === colorGroups[m]) {
                      if (
                        colorGroups[m] === "SaddleBrown" ||
                        colorGroups[m] === "Blue"
                      ) {
                        if (property.owned.propertiesOwned[m].length === 2) {
                          if (property.houseHotels < 4) {
                            if (
                              currentPlayer.money >= property.houseHotelsPrice
                            ) {
                              currentPlayer.money -= property.houseHotelsPrice;
                              property.houseHotels++;
                              bank.Houses--;
                              updateHouseDisplay(property);
                              console.log(
                                `${currentPlayer.name} bought a house on ${property.name}.`
                              );
                              document.getElementById(
                                `${currentPlayer.name}Money`
                              ).innerHTML = `Money: ${currentPlayer.money}`;
                            } else {
                              console.log(
                                `${currentPlayer.name} does not have enough money to buy a house.`
                              );
                            }
                          } else {
                            console.log(
                              `${currentPlayer.name} cannot buy more than 4 houses on ${property.name}.`
                            );
                          }
                        } else {
                          alert(
                            `You need to own all properties in the color group to buy a house on ${property.name}.`
                          );
                        }
                      } else {
                        if (property.owned.propertiesOwned[m].length === 3) {
                          if (property.houseHotels < 4) {
                            if (
                              currentPlayer.money >= property.houseHotelsPrice
                            ) {
                              currentPlayer.money -= property.houseHotelsPrice;
                              property.houseHotels++;
                              bank.Houses--;
                              updateHouseDisplay(property);
                              console.log(
                                `${currentPlayer.name} bought a house on ${property.name}.`
                              );
                              document.getElementById(
                                `${currentPlayer.name}Money`
                              ).innerHTML = `Money: ${currentPlayer.money}`;
                            } else {
                              console.log(
                                `${currentPlayer.name} does not have enough money to buy a house.`
                              );
                            }
                          } else {
                            console.log(
                              `${currentPlayer.name} cannot buy more than 4 houses on ${property.name}.`
                            );
                          }
                        } else {
                          alert(
                            `You need to own all properties in the color group to buy a house on ${property.name}.`
                          );
                        }
                      }
                      break; // Exit the loop after finding the color group
                    }
                  }
                } else {
                  console.log("No houses available in the bank.");
                  alert("No houses available in the bank.");
                }
              } else {
                console.log("property name does not match the space name.");
              }
            } else {
              console.log(
                `${currentPlayer.name} does not own ${property.name}.`
              );
            }
          } else {
            console.log("This space is not a property.");
          }
        }
      });
    } else {
      console.log("not a selected space");
    }
    space.style.backgroundColor = "white"; // Reset the background color
  });
}

function buyHotel() {
  // Logic for buying a hotel
  let currentPlayer = players[j];
  const propertySpaces = Array.from(document.querySelectorAll("#space"));
  propertySpaces.forEach((space) => {
    if (space.style.backgroundColor === "darkgreen") {
      properties.forEach((property) => {
        if (property !== null && property.constructor.name === "Property") {
          if (property.owned === currentPlayer) {
            if (property.placement === Number(space.getAttribute("place"))) {
              if (property.houseHotels === 4) {
                if (currentPlayer.money >= property.houseHotelsPrice) {
                  if (bank.Hotels > 0) {
                    currentPlayer.money -= property.houseHotelsPrice;
                    property.houseHotels++;
                    updateHouseDisplay(property);
                    bank.Hotels--;
                    bank.Houses += 4; // Return the 4 houses to the bank
                    console.log(
                      `${currentPlayer.name} bought a hotel on ${property.name}.`
                    );
                    document.getElementById(
                      `${currentPlayer.name}Money`
                    ).innerHTML = `Money: ${currentPlayer.money}`;
                  } else {
                    console.log("No hotels available in the bank.");
                    alert("No hotels available in the bank.");
                  }
                } else {
                  console.log(
                    `${currentPlayer.name} does not have enough money to buy a hotel.`
                  );
                }
              } else {
                console.log(
                  `${currentPlayer.name} needs to have 4 houses on ${property.name} before buying a hotel.`
                );
              }
            } else {
              console.log(
                `${currentPlayer.name} does not own ${property.name}.`
              );
            }
          }
        }
      });
    }
    space.style.backgroundColor = "white"; // Reset the background color
  });
}
function sellHouseandHotel() {
  // Logic for selling a hotel
  let currentPlayer = players[j];
  const propertySpaces = Array.from(document.querySelectorAll("#space"));
  propertySpaces.forEach((space) => {
    if (space.style.backgroundColor === "darkgreen") {
      properties.forEach((property) => {
        if (property !== null && property.constructor.name === "Property") {
          if (property.owned === currentPlayer) {
            if (property.placement === Number(space.getAttribute("place"))) {
              if (property.houseHotels > 4) {
                currentPlayer.money += property.houseHotelsPrice / 2; // Sell value is half the price
                property.houseHotels--;
                bank.Hotels++;
                updateHouseDisplay(property);
                console.log(
                  `${currentPlayer.name} sold a hotel on ${property.name}.`
                );
                document.getElementById(
                  `${currentPlayer.name}Money`
                ).innerHTML = `Money: ${currentPlayer.money}`;
              } else {
                console.log(
                  `${currentPlayer.name} does not have any hotels to sell on ${property.name}.`
                );
              }
            }
          }
        }
      });
    }
    space.style.backgroundColor = "white"; // Reset the background color
  });
}
function updateHouseDisplay(property) {
  const houseSpan = document.getElementById(`house-${property.placement}`);
  if (houseSpan) {
    houseSpan.innerHTML = ""; // Clear previous houses
    if (property.houseHotels < 5) {
      for (let i = 0; i < property.houseHotels && i < 4; i++) {
        houseSpan.innerHTML += '<span class="house-icon"></span>';
      }
    } else if (property.houseHotels === 5) {
      houseSpan.innerHTML += '<span class="hotel-icon"></span>';
    }
  }
}
function mortgageProperty() {
  // Logic for mortgaging a property
  let currentPlayer = players[j];
  const propertySpaces = Array.from(document.querySelectorAll("#space"));
  propertySpaces.forEach((space) => {
    if (space.style.backgroundColor === "darkgreen") {
      properties.forEach((property) => {
        if (property !== null) {
          if (property.mortgaged === 0) {
            if (property.placement === Number(space.getAttribute("place"))) {
              if (property.owned === currentPlayer) {
                currentPlayer.money += property.price / 2; // Mortgage value is half the price
                property.mortgaged = 1; // Mark the property as mortgaged
                bank.money -= property.price / 2; // Bank receives the mortgage value
                updateMortgageBanner(property);
                console.log(
                  `${currentPlayer.name} mortgaged ${property.name} for ${
                    property.price / 2
                  }.`
                );
                document.getElementById(
                  `${currentPlayer.name}Money`
                ).innerHTML = `Money: ${currentPlayer.money}`;
              } else {
                console.log(
                  `${currentPlayer.name} does not own ${property.name}.`
                );
              }
            }
          }
        }
      });
    }
    space.style.backgroundColor = "white"; // Reset the background color
  });
}
function unmortgageProperty() {
  // Logic for unmortgaging a property
  let currentPlayer = players[j];
  const propertySpaces = Array.from(document.querySelectorAll("#space"));
  propertySpaces.forEach((space) => {
    if (space.style.backgroundColor === "darkgreen") {
      properties.forEach((property) => {
        if (property !== null) {
          if (property.placement === Number(space.getAttribute("place"))) {
            if (property.owned === currentPlayer && property.mortgaged === 1) {
              if (
                currentPlayer.money >=
                property.price / 2 + (property.price / 2) * 0.1
              ) {
                currentPlayer.money -=
                  property.price / 2 + (property.price / 2) * 0.1; // Unmortgage cost is half the price
                bank.money += property.price / 2 + (property.price / 2) * 0.1;
                property.mortgaged = 0; // Mark the property as unmortgaged
                updateMortgageBanner(property);
                console.log(
                  `${currentPlayer.name} unmortgaged ${property.name} for ${
                    property.price / 2 + (property.price / 2) * 0.1
                  }.`
                );
                document.getElementById(
                  `${currentPlayer.name}Money`
                ).innerHTML = `Money: ${currentPlayer.money}`;
              } else {
                console.log(
                  `${currentPlayer.name} does not have enough money to unmortgage ${property.name}.`
                );
              }
            } else {
              console.log(
                `${currentPlayer.name} does not own or mortgage ${property.name}.`
              );
            }
          }
        }
      });
    }
    space.style.backgroundColor = "white"; // Reset the background color
  });
}
let dropdown1 = document.getElementById("tradeplayer");
let dropdown2 = document.getElementById("tradeplayer2");
function updateDropdown1(dropdown1) {
  document.getElementById("offer-trade").style.display = "inline-block";
  document.getElementById("accept-trade").style.display = "none";
  document.getElementById("trade-properties").innerHTML = "";
  for (let i = 0; i < players.length; i++) {
    if (dropdown1.selectedOptions[0].innerText === players[i].name) {
      for (let m = 0; m < players[i].propertiesOwned.length; m++) {
        for (let n = 0; n < players[i].propertiesOwned[m].length; n++) {
          document.getElementById("trade-properties").innerHTML += `<label>
                <input type="checkbox" id="${players[i].propertiesOwned[m][
                  n
                ].name.replace(" ", "")}" name="myCheckbox">
                ${players[i].propertiesOwned[m][n].name}
              </label>`;
        }
      }
      for (let m = 0; m < players[i].RailRoadsOwned.length; m++) {
        document.getElementById("trade-properties").innerHTML += `<label>
                <input type="checkbox" id="${players[i].RailRoadsOwned[
                  m
                ].name.replace(" ", "")}" name="myCheckbox">
                ${players[i].RailRoadsOwned[m].name}
              </label>`;
      }
      for (let m = 0; m < players[i].UtilitiesOwned.length; m++) {
        document.getElementById("trade-properties").innerHTML += `<label>
                <input type="checkbox" id="${players[i].UtilitiesOwned[
                  m
                ].name.replace(" ", "")}" name="myCheckbox">
                ${players[i].UtilitiesOwned[m].name}
              </label>`;
      }
    }
  }
}

function updateDropdown2(dropdown2) {
  document.getElementById("offer-trade").style.display = "inline-block";
  document.getElementById("accept-trade").style.display = "none";
  document.getElementById("trade-properties2").innerHTML = "";
  for (let i = 0; i < players.length; i++) {
    if (dropdown2.selectedOptions[0].innerText === players[i].name) {
      for (let m = 0; m < players[i].propertiesOwned.length; m++) {
        for (let n = 0; n < players[i].propertiesOwned[m].length; n++) {
          document.getElementById("trade-properties2").innerHTML += `<label>
                <input type="checkbox" id="${players[i].propertiesOwned[m][
                  n
                ].name.replace(" ", "")}" name="myCheckbox2">
                ${players[i].propertiesOwned[m][n].name}
              </label>`;
        }
      }
      for (let m = 0; m < players[i].RailRoadsOwned.length; m++) {
        document.getElementById("trade-properties2").innerHTML += `<label>
                <input type="checkbox" id="${players[i].RailRoadsOwned[
                  m
                ].name.replace(" ", "")}" name="myCheckbox2">
                ${players[i].RailRoadsOwned[m].name}
              </label>`;
      }
      for (let m = 0; m < players[i].UtilitiesOwned.length; m++) {
        document.getElementById("trade-properties2").innerHTML += `<label>
                <input type="checkbox" id="${players[i].UtilitiesOwned[
                  m
                ].name.replace(" ", "")}" name="myCheckbox2">
                ${players[i].UtilitiesOwned[m].name}
              </label>`;
      }
    }
  }
}
function offerTrade() {
  document.getElementById("offer-trade").style.display = "none";
  document.getElementById("accept-trade").style.display = "inline-block";
}
function acceptTrade() {
  document.getElementById("accept-trade").style.display = "none";
  let player1Name =
    document.getElementById("tradeplayer").selectedOptions[0].id;

  let player2Name =
    document.getElementById("tradeplayer2").selectedOptions[0].id;
  p1Trademoney = document.getElementById("trade-money").value;
  p2Trademoney = document.getElementById("trade-money2").value;
  let player1 = players.find((p) => p.name === player1Name);
  let player2 = players.find((p) => p.name === player2Name);
  let list = document.getElementById(`${player1.name}properties`);
  let list2 = document.getElementById(`${player2.name}properties`);
  let propertycolors = [
    "SaddleBrown",
    "SkyBlue",
    "DarkOrchid",
    "Orange",
    "Red",
    "Yellow",
    "Green",
    "Blue",
  ];
  player1.money += p2Trademoney;
  player2.money += p1Trademoney;

  player1.money -= p1Trademoney;
  player2.money -= p2Trademoney;
  document.getElementById(
    `${player1.name}Money`
  ).innerText = `Money: ${player1.money}`;
  document.getElementById(
    `${player2.name}Money`
  ).innerText = `Money: ${player2.money}`;
  console.log(`${player1.name} traded $${p1Trademoney} to ${player2.name}`);
  console.log(`${player2.name} traded $${p2Trademoney} to ${player1.name}`);
  properties.forEach((property) => {
    if (property !== null) {
      // Skip null properties
      if (property.owned === player1 || property.owned === player2) {
        const isChecked = document.getElementById(
          `${property.name.replace(" ", "")}`
        );
        if (isChecked.checked === true) {
          if (property.owned === player1) {
            let Pcolor = propertycolors.indexOf(property.color);
            player1.propertiesOwned[Pcolor].splice(
              player1.propertiesOwned[Pcolor].indexOf(`${property.name}`),
              1
            );
            propertycolors.forEach((color) => {
              if (property.color === color) {
                player2.propertiesOwned[propertycolors.indexOf(color)].push(
                  property
                );
              }
            });

            property.owned = player2;
            updateOwnerBanner(property);
            console.log(
              `${player1.name} traded ${property.name} to ${player2.name}.`
            );
          } else if (property.owned === player2) {
            let Pcolor = propertycolors.indexOf(property.color);
            player2.propertiesOwned[Pcolor].splice(
              player2.propertiesOwned[Pcolor].indexOf(`${property.name}`),
              1
            );

            propertycolors.forEach((color) => {
              if (property.color === color) {
                player1.propertiesOwned[propertycolors.indexOf(color)].push(
                  property
                );
              }
            });

            property.owned = player1;
            updateOwnerBanner(property);
            console.log(
              `${player2.name} traded ${property.name} to ${player1.name}.`
            );
          }
        }
      }
    }
  });
  updateList(player2, list2);
  updateList(player1, list);

  document.getElementById("offer-trade").style.display = "inline-block";
}
function updateList(player, list) {
  list.innerHTML = ""; // Clear the list
  for (let i = 0; i < player.propertiesOwned.length; i++) {
    for (let j = 0; j < player.propertiesOwned[i].length; j++) {
      let property = player.propertiesOwned[i][j];

      list.innerHTML += `<li onmouseover=''>${property.name}</li>`;
    }
  }
}

function updateTradeMoneyLimit(playerName) {
  document.getElementById("offer-trade").style.display = "inline-block";
  document.getElementById("accept-trade").style.display = "none";
  const player = players.find((p) => p.name === playerName);
  if (player) {
    if (document.getElementById("trade-money").value > player.money) {
      console.log("Trade money exceeds player's money limit.");
      document.getElementById("trade-money").value = player.money;
    }
  }
}
function updateTradeMoneyLimit2(playerName) {
  document.getElementById("offer-trade").style.display = "inline-block";
  document.getElementById("accept-trade").style.display = "none";
  const player = players.find((p) => p.name === playerName);
  if (player) {
    if (document.getElementById("trade-money2").value > player.money) {
      console.log("Trade money exceeds player's money limit.");
      document.getElementById("trade-money2").value = player.money;
    }
  }
}
function updateOwnerBanner(property) {
  const ownerDiv = document.getElementById(`owner-${property.placement}`);
  if (ownerDiv) {
    ownerDiv.textContent = property.owned.name;
    // Optionally, set background to player color:
    ownerDiv.style.background = property.owned.color;
  }
}

function updateMortgageBanner(property) {
  const mortgageDiv = document.getElementById(`mortgage-${property.placement}`);
  if (mortgageDiv) {
    if (property.mortgaged) {
      mortgageDiv.textContent = "Mortgaged";
      mortgageDiv.classList.add("mortgaged");
    } else {
      mortgageDiv.textContent = "Not Mortgaged";
      mortgageDiv.classList.remove("mortgaged");
    }
  }
}
