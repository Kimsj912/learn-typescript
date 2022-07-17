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

// type을 적어 함수를 호출하면 logText함수에선 T의 자리를 입력받은 type으로 채워넣는다. 
function logText<T>(text: T) {
    console.log(text);
    return text;
}
// 타입추론을 통해 반환값의 타입까지도 제어가 가능하다
let retVal: string = logText<string>('10'); 

