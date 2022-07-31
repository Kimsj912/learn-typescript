// 인터페이스
interface Developer12{
    name: string;
    skill: string;
}

interface Person12 {
    name: string;
}

class PersonClass {
    name: string;
}
person = new PersonClass();
var developer: Developer12 = {
    name: 'dfdf',
    skill: '',
}
var person: Person12 = {
    name: '마동석',
};
// developer = person;
// person = developer;


// 함수
var add = function (a:number) {
    // ...
}
var sum = function (a:number, b:number) {
    // ...
}
add = sum; // add는 하나의 인자만 받는 상태고 sum은 두개의 인자를 받기에 타입호환이 불가하다.
sum = add; // sum은 두개의 인자를 받고, add보다 더 넓기에 가능함.

// 제네릭
interface Empty<T>{

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;