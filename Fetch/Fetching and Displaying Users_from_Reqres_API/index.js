document.getElementById("btn").addEventListener("click",function(){
    getData()
})




async function getData(){
        // try{
        //     let res= await fetch(`https://reqres.in/api/users?page=2`);
        //     console.log(res)
        //     let data = res.json();
        //     console.log("Data",data);
        //     displayData(data)
        // }
        // catch(error){
        //     console.log(error);
        // }
        fetch(`https://reqres.in/api/users?page=2`)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)
           displayData(data.data) 
        })
        .catch(function(error){
            console.log(error)
        })
    
    }
function displayData(arr){
    arr.forEach(function(ele){
       var container = document.getElementById("container")
        var user =document.createElement("div")
        var userName = document.createElement("h3")
        userName.innerText = ele.first_name+" "+ele.last_name
        email = document.createElement("h3")
        email.innerText= ele.email
        avatar = document.createElement("img")
        avatar.src = ele.avatar
        user.append(userName,email,avatar);
        container.append(user)
    });
}