let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }

];

let choice

const displayerMenu = () => {

    choice =+ prompt(`
        --- FOOTBALL MANAGER PRO ---

    1. Xem đội hình
    2. Thêm cầu thủ
    3. Tìm kiếm (theo ID)
    4. Cập nhật bàn thắng
    5. Xóa cầu thủ (Chuyển nhượng)
    0. Thoát`
    );
};
//case 1: Danh sách đội bóng
//gọi tên value bằng dot nocation
const displayRead = () => {
    squad.forEach((element,index) => {
        const id = element.id;
        const name = element.name;
        const goals = element.goals;
        const position = element.position;
        console.log(`Mã: ${id} - ${name} - ${goals} - ${position}`);
    });
}; 

//case 2: Thêm cầu thủ mới 
//thêm object mới 
//Đẩy vào object cu
const Creat = () => {
    const idUp = +prompt(`Nhập ID mới: `);
    const nameUP = prompt(`Nhập tên mới: `);
    const goalsUp = +prompt(`Nhập số bóng vào: `);
    const positionUp = prompt(`Nhập vị trí mới: `);
    const newPlayer =  {
        id: idUp,
        name: nameUP,
        goals: goalsUp,
        position: positionUp
    };
    squad.push( Creat);
    alert(`Thêm cầu thủ mới thành công 
        ID :${newPlayer.id} 
        TÊN :${newPlayer.name}
        SỐ BÓNG VÀO :${newPlayer.goals}
        VỊ TRÍ :${newPlayer.position}`)
};

//case 3:Tìm cầu thủ theo ID
//dùng find để đúng thì lọc nó ra và dùng toLowerCase() để biến chữ hoa thành chữ thg cho dễ lọc.
//Không thể dùng length
const readFind = () => {
    const findName = prompt(`Tìm kiếm tên người dùng: `);
    const ReadName = squad.find((element,index) => {
        return element.name.toLocaleLowerCase() === findName.toLocaleLowerCase();
    });
    if(ReadName){
        alert(`Tìm thấy cầu thủ: 
           - ID: ${ReadName.id} 
           - Tên: ${ReadName.name} 
           - Số bóng vào: ${ReadName.goals}
           - Vị trí: ${ReadName.position}`);
    }else {
        alert(`Không tìm thấy Cầu thủ.`)
    }
};

//case 4: Cập nhật thành tích
const upAchievements = () => {
    const findNames = +prompt(`Nhập Id cầu thủ ghi bàn : `);
    const seacrhName = squad.find((element,index) => {
        return element.id === findNames;
    });
    if(seacrhName){
        //tăng thêm bàn thắng cập nhật thêm
        seacrhName.goals += 1;
        alert(`Cập nhật thành công: 
            Cầu thủ: ${seacrhName.name}
            bàn mới: ${seacrhName.goals}`);   
    }else{
        alert(`Không có cầu thủ.`)
    }
};

//case 5:Chuyển nhượng
const removeplayer = () => {
    const deletePlayer = +prompt(`Nhập Id cầu thủ cần xoá: `);
    const locationPlayer = squad.findIndex((element,index) => {
        return element.id === deletePlayer;
    });
    if(locationPlayer !== -1){
        const playerName = squad[locationPlayer].name;
        squad.splice(locationPlayer, 1); 

        alert(`Xóa thành công cầu thủ: ${playerName}`);
    } else {
        alert(`Không tìm thấy cầu thủ có ID là ${deletePlayer}`);
    }
};



do {
    displayerMenu();
    switch (choice) {
        case 1:
            displayRead();
            break;
        case 2:
            Creat();
            break;
        case 3:
            readFind();
            break;
        case 4:
            upAchievements();
            break;
        case 5:
            removeplayer();
            break;
        case 0:
            
            break;

        default:
            break;
    }
} while (choice !== 0);