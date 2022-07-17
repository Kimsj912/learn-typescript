/**
// JS방식
function logText(text) {
    console.log(text);
    return text;
}
logText(10); // 숫자 10
logText('hello'); // 문자열 하이
logText(true); // 진위값 true


// Generic의 장점 1 : 함수의 중복을 막는다.
function logText<T>(text: T) {
    console.log(text);
    return text;
}
logText<number>(10); // 숫자 10
logText<string>('10'); // 문자 10

function logText<T>(text: T) {
    console.log(text);
    return text;
}
logText(10); // 숫자 10
logText('10'); // 문자 10
logText(true); // 진위값 true


// Generic의 장점 2 : 타입 유니온의 단점을 해결
function logText(text: string | number) {
    console.log(text);
    return text;
}
const a = logText('a');
a.split(''); 

*/

import { stringify } from "query-string";

// // type을 적어 함수를 호출하면 logText함수에선 T의 자리를 입력받은 type으로 채워넣는다.
// function logText<T>(text: T) {
//     console.log(text);
//     return text;
// }
// // 타입추론을 통해 반환값의 타입까지도 제어가 가능하다
// let retVal: string = logText<string>('10');

// interface Dropdown<T> { // 코드의 중복을 줄일 수 있다.
//     value: T;
//     selected: boolean;
// }
// const dbObj: Dropdown<number> = { value: 1, selected: true };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     //함수 내에선 text가 배열이라는 가정이 이뤄져 관련 API만 가능하도록 변경된다.
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text)
//     });
//     return text;
// }
// logTextLength<string>(['a', 'b', 'c']);

// 제네릭의 타입 제한 - 2 정의된 타입 이용하기
interface LengthType {
    length : number;
}
function logTextLength<T extends LengthType>(text: T): T{
    text.length;
    return text;
}

// LengthType은 length를 포함하는 값이라면 상관없음.
logTextLength({ value: 'a' });
// 문자열은 length라는 함수가 자동으로 있어서 문제가 되지않음.
logTextLength<string>('a');
// 반면, 숫자는 length가 없어서 error가 발생함
logTextLength<number>(10);


// 제네릭의 타입 제한 - 3 keyof로 타입제한하기
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// ShoppingItem의 아이템들 중에 한가지가 T로 들어갈 수 있음을 의미
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}

getShoppingItemOption("name");
