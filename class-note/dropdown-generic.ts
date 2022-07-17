// 기본문법으로 풀면, value의 타입만 다른 대상을 위해 여러 인터페이스를 만드는 수고가 생긴다.
interface Email {
    value: string;
    selected: boolean;
}
interface ProductNumber {
    value: number;
    selected: boolean;
}
interface TrueFalse {
    value: boolean;
    selected: boolean;
}

const emails: Email[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
];



const numberOfProducts: ProductNumber[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
];

function createDropdownItem(item : Email | ProductNumber) {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
    const item = createDropdownItem(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag?.appendChild(item);
});


// 인터페이스에서 제네릭을 사용하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const dbobj: Dropdown<string> = { value: 'abc', selected: false };

