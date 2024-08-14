function getUserData(id,callback){
    setTimeout(()=>{
        const user = {
            id: id,
            name: "Gorang",
            email: "Gorangmalvi@gmail.com"
        }
        callback(user)
    },2000);

}

function displayData(user) {
    console.log("User ID :", user.id);
    console.log("User Name :", user.name);
    console.log("User Email :", user.email);

}
getUserData(1,displayData);