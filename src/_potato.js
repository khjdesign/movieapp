// 우리의 리액트 앱이 JSX를 이해하기 위해 미리 정의된 것을 가져오기 위한 코드
import React from 'react';

// potato 함수 정의하기 - 함수의 구조는 다시 다루게 됩니다. (+ 함수의 이름은 대문자로 작성)
// Potato 컴포넌트가 JSX 문법으로 작성된 값을 반환하도록 정의
// 자바스크립트에선 무언가 실행하고자 할 때 코드(문장) 마지막 마침표로 세미콜론을 작성합니다.
function Potato() {
    return <h3 > I love potato < /h3>;
}

export default Potato;