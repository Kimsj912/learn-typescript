// 1. 숫자형 enum
enum Shoes {
	Nike, 
	Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes);   // 0


// 2. 문자열형 enum
enum ShoesString {
	Nike = 'Nike', 
	Adidas  = 'Adidas'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 'Nike'


// 3. Enum의 활용
enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: string) {
    if (answer === Answer.Yes) console.log('정답입니다');
    if (answer === Answer.No) console.log('오답입니다');
}
// enum이 제공하는 데이터만 넣을 수 있게하여 에러 발생 가능성을 낮춤
askQuestion(Answer.Yes);



