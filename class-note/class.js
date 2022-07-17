// class는 ES2015 (ES6) 부터 등장한 것임.

// class는 instance를 만들어주는게 목적인 아이임.
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다.')
        this.name = name;
        this.age = age;
    }
}

var snsd = new Person('소녀시대', 20);

// 생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴마블', 40);