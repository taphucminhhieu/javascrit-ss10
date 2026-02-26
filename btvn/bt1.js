const player = {
  name: "Messi",
  position: "Forward",
  age: 36,
  goals: 25,
  assists: 15,
};
const total = player.goals + player.assists;
console.log(`Tổng đóng góp: ${player.goals} + ${player.assists} = ${total}`);

const showPlayerInfo = {
    "Tên" : "Messi",
    "Vị trí": "Forward",
    "Tuổi": "36",
    "Bàn thắng mùa này": "25",
    "Kiến tạo mùa này": "15",
    "Tổng đóng góp ": total,
};

console.log(showPlayerInfo);