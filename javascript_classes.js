//class
class Person{
    constructor(name,year_born){
        this.name=name
        this.year_born=year_born
        //yuqoridagilar qolip bo'lib yodalab olisg kerak.
    }
    
    what(){
        console.log(this.name+` is a person`);
    }
    static arms(){
        return 2
    }
}

let me= new Person(`Jamshid`,1994);
console.log(me.name+` was born in ` +me.year_born);
me.what()
console.log(me.name +` has ` +Person.arms()+ ` arms`);


class Juggler extends Person{
    what(){
        super.what();
        //bu yerda supper buyrugi yuqori classdagi ma'lumotlarni shu yerga chaqirib beradi.
        console.log(this.name+` is a juggler`);
    }
}
let you= new Juggler(`Shoxrux`,1997)
me.what()
you.what()