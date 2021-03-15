function MotelStaff(name, age, workPermit, languages){
    this.name = name;
    this.age = age;
    this.workPermit = workPermit;
    this.languages = languages;
    this.cleanRoom = function() {
        alert("Your room has been clean & santised, go jump in!");
 }
}
 // var houseKeeper1 = new MotelStaff("Nancy", 28, true, ["english","hindi","gujarati","malayalam"]);
 // houseKeeper1.cleanRoom();