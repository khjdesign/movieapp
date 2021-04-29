// import React from 'react';
// About.css 임포트
// import './About.css';

// About 컴포넌트 작성 후 경로 확인 : http://localhost:3000/#/about 
// function About() {
//     return <span>About this page: I built it because I love movies.</span>;
// }


// CSS 적용을 위해 JSX 구성 변경
// function About() {
//     return (
//         <div className="about__container">
//             <span>
//                 “Freedom is the freedom to say that two plus two make four. If that is
//                 granted, all else follows.”
//         </span>
//             <span>− George Orwell, 1984</span>
//         </div>
//     );
// }


// 이제 Home과 About으로 갈 수 있는 Navigation 만들기


// 상세정보 만들기 전 route props 살펴보기
// route props : 직접 넘겨주지 않아도 라우팅 대상이 되는 컴포넌트에 기본으로 넘어가게 되는 props
// console 확인 + route props에 데이터를 담기 위해 navigation.js 수정하기
// function About(props) {
//     console.log(props);
//     return (
//         <div className="about__container">
//             <span>
//                 “Freedom is the freedom to say that two plus two make four. If that is
//                 granted, all else follows.”
//         </span>
//             <span>− George Orwell, 1984</span>
//         </div>
//     );
// }


// export default About;