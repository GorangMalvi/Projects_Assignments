function Artist(name, skill, profession) {
    this.name = name;
this.skill = skill;
this.profession = profession;
}




// Remove the empty assigned objects and  work on them..
//  create the below object from the above constructor function and pass the follwing values "Rahul Dravid","Cricket","Cricketer"

Artist.prototype.getProfession = function() {
    return this.profession;
};
//create the below object from the above artists objects as per the problem statement
Artist.prototype.print = function() {
    return "I am " + this.name;
};
var artists = new Artist("Rahul Dravid", "Cricket", "Cricketer");

var artistsObject = Object.create(artists);


// Do not change this
export { Artist, artistsObject };
