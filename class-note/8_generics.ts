// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); // 숫자 10
// logText('hello'); // 문자열 하이
// logText(true); // 진위값 true

// generic사용법과 특징
function logText<T>(text: T) {
    console.log(text);
    return text;
}
logText<number>(10); // 숫자 10
logText<string>('10'); // 문자 10
