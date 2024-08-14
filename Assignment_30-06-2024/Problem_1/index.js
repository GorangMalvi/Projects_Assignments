function CreateApp1(appName,rating,developer,catergory,platform,price){
    return{
        appName:appName,
        rating:rating,
        developer:developer,
        catergory:catergory,
        platform:platform,
        price:price,
        getAppInfo:function(){
            return
        }
    }
}
function CreatApp2(appName,rating,developer,catergory,platform,price){
    this.appName = appName;
    this.rating = rating;
    this.developer = developer;
    this.catergory = catergory;
    this.platform  = platform;
    this.price = price
    this.getAppInfo = function(){
        
    }
}
class CreatApp3{
    constructor(appName,rating,developer,catergory,platform,price){
        this.appName = appName;
        this.rating = rating;
        this.developer = developer;
        this.catergory = catergory;
        this.platform  = platform;
        this.price = price
        this.getAppInfo = function(){
            
        }
    }
}