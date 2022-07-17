interface User {
    age: number;
    name: string;
}

// 1) 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: 'seho',
}

// 2) 함수에 인터페이스 활용
function getUser(user: User): void {
    console.log(user);
}
getUser(seho);
/*
* const capt = {
*     name: '캡틴'
* }
* getUser(capt); // getUser함수의 파라미터인 user 인터페이스와 달라서 에러가 발생
*/

// 3) 함수 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}
let sum : SumFunction;
sum = function (a: number, b: number): number{ return a + b; }


// 4) 인덱싱
interface StringArray {
    [index: number]: string;
}
var arr: StringArray = ['a', 'b', 'c'];
arr[0]; //'a'

// 5) 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}
// 객체의 인덱스에 접근
var obj = {
    sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

obj['sth']; // /abc/ // 이런식으로 접근 가능
// obj['sth'] = "SDFS"; // sth에 대한 값이 RegExp가 아니면 에러가 발생
Object.keys(obj).forEach(function (value) { }); // 이런식으로 looping 가능


// 6) 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var captain: Developer = {
    name: '캡틴',
    age: 33,
    language: 'TypeScript',
}