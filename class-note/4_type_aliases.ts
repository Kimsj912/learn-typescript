import { type } from "express/lib/response";

// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}
var seho: Person = {
    name: 'seho',
    age: 30,
}




// type vs. interface
// 1. type은 type을 정의할 수 있는 모든 곳에 사용할 수 있음. (그저 기존 타입에 이름 주는 것 뿐)
type MyString = string;
var str : MyString = 'hello';

// 2. type은 확장을 할 수 없음.


