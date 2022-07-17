// JS방식
// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('hello'); // 문자열 하이
// logText(true); // 진위값 true

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