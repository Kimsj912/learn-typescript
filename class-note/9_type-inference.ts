// 타입 추론 기본
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<String> = {
    value: 'acv',
    title: '아이스크림',
}

// 타입추론 기본 3
interface Dropdown2<T> {
    value: T;
    title: string;
}
interface DetailDropdown<K> extends Dropdown2<K> {
    description: string;
    tag: K;
}

var shoppingItem2: DetailDropdown<string> = {
    value: 'acv',
    title: '아이스크림',
    description: '아이스크림',
    tag: 'acv',
}

// Best Common Type
var arr = [1, 2, true, 'a'];




