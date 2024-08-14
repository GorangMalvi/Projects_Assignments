document.getElementById("get-category-data").addEventListener("click",function(){
    getCategory()
})
async function getCategory(){
    try{
        let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
        console.log(res)
        let data = res.json();
        console.log("Data",data);
    }
    catch(error){
        console.log(error);
    }
}
document.getElementById("get-ingrediant-data").addEventListener("click",function(){
    getIngredient()
})
async function getIngredient(){
    try{
        let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);
        console.log(res)
        let data = res.json();
        console.log("Data",data);
    }
    catch(error){
        console.log(error);
    }
}