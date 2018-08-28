 /*
typeof undefined //"undefined"
typeof 1         //"number"
typeof true      // "boolean"
typeof "foo"     // "string"
typeof {}        // "object"
typeof []        // "object"
typeof null      // виведеться "object", але це помилка самого JS, бо null це окремий тип  
"1" + 2;         // Результат "12", Якщо хоча б один аргумент типу string, то бінарний "+" приведе другий аргумент до типу string
1 + "2";         // "12"
1 + "2" - 0;     // 12 так як у операції "+" та "-" пріорітети однакові, то операції відбуваються зліва направо
"1" - 0 + 2;     // 3
null == undefined; // true
null == 0;         // false null >= 0, але нулю не дорівнює
"a" > "b";         // false бо unicode 'а' менший за 'б' 
"a" > "A";         // true бо unicode 'а' більший за 'А'
!!a //(если a = 1 -- true
    // если a = “1” -- true
    // если a = 0  -- false
    // если a = true -- true
    // если a = { b: 1 }) -- true 
*/
    var arr = [1, 4, 7];

    var rooms = {
        room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' }
        ],
        room2: [
        { name: 'room2 name1' },
        { name: 'room2 name2' },
        { name: 'room2 name3' },
        { name: 'room2 name4' }
        ],
        room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
        { name: 'room3 name4' }
        ]
        
       };
       
var myFunctionMap = array => {
    var res = array.map( value => value * value );
     return res;
}
var myFunctionForEach = array =>{
    var res = [];
    array.forEach(value => res.push(value * value));
    return res;
}

var getName = obj => {
    var names = [];
    for(var room in obj){
         obj[room].forEach(value => names.push(value.name));
    }
    return names;
}
  
console.log("Map: " + myFunctionMap(arr));
console.log("forEach: " + myFunctionForEach(arr));
console.log(getName(rooms));
  
