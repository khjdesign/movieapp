// map()함수 기본개념 잡기 - 크롬 콘솔창에서의 실습

// 프렌즈 변수를 선언하고 4개의 string 값이 담긴 array 할당하기 
const friends = ["franz", "judy", "natalie", "summer"];

// 크롬 콘솔창에서 변수에 담긴 배열값 출력하기
console.log(friends);

// map 함수 기본구조 정의하기 + friends.map()으로 표현된 문법이해하기 + '출력'과 '반환'의 개념을 각각 이해하기
// 중요한 부분 : friends 변수에 array가 할당되어있다
friends.map(friend => {
    console.log(friend);
    return 0;
})

// 기본 array에 대해 map 함수를 사용하고, map 함수 안에서 값을 추가할 수 있는 또다른 함수 정의한 뒤 새로운 배열 만들기
// friends.map(function(prams)) 구조 이해하기
friends.map(function(friend){
    return friend + " krew" ;
})

// map 함수로 컴포넌트 재구성하기 (여기서부터는 우리의 리액트앱으로)