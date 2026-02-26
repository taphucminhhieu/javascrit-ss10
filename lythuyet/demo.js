let arr = [];//thông qua index
console.log(typeof array);

//object: Thuộc tính (key - Tên của thuộc tính  : value - giá trị của thuộc tính )

//Khởi tạo object 
let person ={};

let person_v2 = {
    id: 0,
    fullName: "Đạt bé bỏng",
    age: "18",
    sex: "Male",
};

console.log(person_v2);

//CRUD: Creat - Read - Update - Delete

//Read
console.log(`Tên của bạn là : ${person_v2.fullName}`);

//Dot nocation  vs Bracket notation 
//cách 1: Dot nocation 
console.log(`Tên của bạn là: ${person_v2.fullName}`);

//cách 2:Braket nocation
console.log(`Tên của bạn là: ${person_v2["fullName"]}`);

//Creat
person_v2.emal = "datdz@gmail.com";
person_v2.handleSay = () => {
    console.log("xin chào các bạn mình là dạt bé bỏng");
};

console.log(person_v2.handleSay());

//Update
person_v2.age = 20;

//Delete
delete person_v2["fullName"];
console.log(person_v2);

let animalDog = {
    name: "Join",
    age: "2",
};

let person_v3 ={
    emal :"cute@gmail.com",
};

let animalCat = {
    ...person_v3,
    ...animalDog,
    age: 3,
    id: 0,
};

console.log(animalCat);

//Array  Object
const playes = [
    {id: 0 , names: "Đạt bé bỏng" , age: 19, goal: -1},
    {id: 1 , names: "Đạt bé bỏng" , age: 13, goal: 0},
];

//in ra màn hình các cầu thủ ghi bàn phản lưới nhà (goal < 0 )
//Hiển thị râ theo format Tên - số bàn phản lưới
let listPlayer = player.filter =((player) => {
    return player.goals < 0;
});

listPlayer.forEach((Player) => {
    console.log(`${player.name} - ${player.goals}`);
});


console.log(listPlayer);

//object lồng
let person_max ={
    id: 1,
    fullName :{
        firtsName: "Đạt",
        lastName: "Bé Bỏng", 
    },
};
console.log(person_max.fullName)

//Duyệt qua object
Object.keys(person_v2);
console.log(Object.keys(person_v2));
console.log(Object.value(person_v2));
console.log(Object.entries(person_v2));

for(const [key, value] of Object.entries(person_v2)) {
}

let arrayList = ["id", 0];

//let nameList 
