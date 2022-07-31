interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {
        name: '마동석',
        age: 30,
        skill: '아무것도 아님',
    };
}

// Type assertion
var tony = introduce();
if ((tony as Developer).skill) {
    console.log((tony as Developer).skill);
} else if((tony as Person).age) {
    console.log((tony as Person).age);
}

// Type Guard
function isDeveloper(target: Developer | Person) : target is Developer{
    return (target as Developer).skill !== undefined;
}
if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}