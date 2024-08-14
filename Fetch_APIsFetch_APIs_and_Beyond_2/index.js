let api = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`



let container = document.getElementById("container")

const displayData = (data)=>{
    
    container.innerHTML=""
    
   
    data.forEach(({id,country,Rank,population}) => {
        
        let box = document.createElement("div")
        box.id="box"
        let id1 =document.createElement("p")
        id1.innerText=id
        let country1= document.createElement("h3")
        country1.innerText= country
        let rank1 = document.createElement("p")
        rank1.innerText = Rank;
        let population1 = document.createElement("p")
        population1.innerText = population
        box.append(id1,country1,rank1,population1)
        container.append(box)
    });
}
const getData= async(api) =>{
    
    try{
        let res = await fetch(`${api}`);
        let data = await res.json()
        console.log("data",data)
        displayData(data.data)
       
      
    }
    catch(error){
        console.log(error)
    }
}

getData(api)
 document.getElementById("sortData").addEventListener("change",()=>{
    
    let sortValue =document.getElementById("sortData").value
    getData(`${api}?sort=population&order=${sortValue}`)
 })
 

 