class TSPerson {
    // 1. 변수 선언을 미리해야함.
    // 2. 접근제어자 및 변수 속성 제어가능
    private name: string;
    protected age: number;
    readonly log: string;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}