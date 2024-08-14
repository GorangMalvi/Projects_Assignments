const numbers = [1,2,3,4,5,6,7]
function filterArray(arr ,callback){
    const filteredarray = []
    for(const element of arr){
        if(callback(element)){
            filteredarray.push(element)
        }
    } 
    console.log("Before filter",arr)
    console.log("After filter",filteredarray)
     return filteredarray;

}
function isEven(num){
    if(num %2===0){
        return true
    }
}
function isOdd(num){
    if(num%2 !==0){
        return false
    }
}

filterArray(numbers,isEven)
