// function logMessage(value: string) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100); // 이런 경우도 넣고 싶은데 숫자마다 함수 만드는건 유지보수성 하락시킬 가능성이 높다


// Type Operator ============================================
function logMessage(value: string | number) { 
    if (typeof value === 'string') {
        value.toLocaleLowerCase();
    }
    throw new TypeError('value must be string');
}

logMessage('hello');
logMessage(100); // 이제 number타입도 들어갈 수 있다.

interface RealPerson {
    name: string;
    age: number;
}

interface RealDeveloper {
    name: string;
    skill: string;
}


// 1) Union Type
function unionSomeone(someone: RealPerson | RealDeveloper) {
    // someone은 developer 와 person의 공통만 갖는 타입을 갖기에 에러발생
    someone.name
    someone.age // 공통이 아니라서 에러발생
    someone.skill // 공통이 아니라서 에러발생
}

// 2) Intersection Type
function intersectionSomeone(someone: RealPerson & RealDeveloper) {
    // someone은 developer 와 person을 모두 갖는 타입을 갖기에 에러발생하지 않음
    someone.name
    someone.age 
    someone.skill 
}

// 3) union vs. intersection
// developer 혹은 person을 가지면 가능
unionSomeone({ name: 'seho', age: 30 });
unionSomeone({ name: 'capt', skill: '웹 개발' });


// developer와 person 모두를 가져야 가능
intersectionSomeone({ name: 'seho', age: 30 });
intersectionSomeone({ name: 'capt', skill: '웹 개발' });
