// 타입 단언 (type asssertion)
var ta;
ta = 20;
ta = 'a';
var b = ta as string;

// Dom API (html 태그에 접근하고 조작할 수 있는 API) 조작
var div = document.querySelector('div')
if (div) {
    div.innerText = 'Hello';
}
var divAS = document.querySelector('div') as HTMLDivElement;
divAS.innerText = 'Hello';
