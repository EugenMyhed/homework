// 1
/*
function printing() {
    console.log(1); // Виведеться другим 
    setTimeout(function() { console.log(2); }, 1000); // Виведеться п'ятим 
    setTimeout(function() { console.log(3); }, 0); //Виведеться четвертим, бо навіть мін. час затримки по стандарту 4мс
    console.log(4); // Виведеться третім
   }

   console.log(5); // Виведеться першим, бо знаходиться перед викликом ф-ції
   printing(); // 5, 1, 4, 3, 2
*/

//2
var myname = "global";

function func() {
    console.log(myname);
    var myname = "local";
    console.log(myname);    
}

func(); // Виведеться першим console.log() - undefined, а другим console.log() - local

//3
var foo = 1;
function bar() {
    console.log(foo); //undefined
    if (!foo) { //заходимо в блок if, бо undefined аналогічно false
        var foo = 10; //присвоюємо foo = 10
    }
    console.log(foo); // 10
}

bar();// undefined, 10

//4
for (var i = 0; i < 10; i++) { 
    setTimeout(function() {
    console.log(i); // Тут виведеться 10 10 10 10 10 10 10 10 10 10, так як в ф-ції нема змінної і. Коли така ф-ція викликається то і береться 
    }, 0);          // з зовнішнього LexicalEnvironment, а на момент взяття значення цикл закінчив роботу і значення дорівнює 10.
   }                //Можна виправити за допомогою  додаткової ф-ції, яка буде брати поточне значення і, як в наст. прикладі
                    //Або прописати замість var i = 0 - let i = 0;

   for (var i = 0; i < 10; i++) {
    (function(i) {
    setTimeout(function() {
    console.log(i); //0 1 2 3 4 5 6 7 8 9
    }, 0);
    })(i);
   }
   
//5
var fullname = 'John Doe';

var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};
console.log(obj.prop.getFullname()); // Aurelio De Rosa
var test = obj.prop.getFullname; //втратили контекст
console.log(test()); // undefined
console.log(test.call(obj.prop)); // вказали контекст obj.prop - Aurelio De Rosa
console.log(test.call(obj)); // вказали контекст obj - Colin Ihrig

//6
var createCounter = () => {
    var count = 1;
    return () => count++;
};

var counter = createCounter();
console.log( counter() ); 
console.log( counter() ); 
console.log( counter() ); 

var counter2 = createCounter();
console.log( counter2() ); 
console.log( counter2() ); 
