const players = [
  { name: "Messi",    years: 18, salary: 100 },
  { name: "Ronaldo",  years: 20, salary: 95  },
  { name: "Neymar",   years: 12, salary: 90  },
  { name: "Mbappe",   years: 7,  salary: 85  },
  { name: "Haaland",  years: 5,  salary: 80  },
  { name: "Modric",   years: 22, salary: 70  },
  { name: "Benzema",  years: 19, salary: 75  }
];

const analyzeSalary = (minYears, teamPlayers) => {
  const qualified = teamPlayers.filter(player => player.years >= minYears);

  if (qualified.length === 0) {
    return {
      totalSalary: 0,
      highestPaid: null,
      lowestPaid: null
    };
  }

  const totalSalary = qualified.reduce((sum, player) => sum + player.salary, 0);

  const highestPaid = qualified.reduce((max, player) => {
    if (player.salary > max.salary) {
      return player;
    }
    return max;
  });

  const lowestPaid = qualified.reduce((min, player) => {
    if (player.salary < min.salary) {
      return player;
    }
    return min;
  });

  return {
    totalSalary,
    highestPaid,
    lowestPaid
  };
};

console.log(analyzeSalary(10, players));

console.log(analyzeSalary(30, players));