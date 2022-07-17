// 기본문법으로 풀면, value의 타입만 다른 대상을 위해 여러 인터페이스를 만드는 수고가 생긴다.
interface Dropdown<T> { // 코드의 중복을 줄일 수 있다.
    value: T;
    selected: boolean;
}

const emails: Dropdown<string>[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
];



const numberOfProducts: Dropdown<number>[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
];

function createDropdownItem(item : Dropdown<number | string>) {
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
