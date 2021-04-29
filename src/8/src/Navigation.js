// import React from 'react';
// // Link 컴포넌트 넣기
// import { Link } from 'react-router-dom';
// // Navigation.css 임포트
// import './Navigation.css';

// // Navigation 컴포넌트 작성 + a 태그 사용 + App.js 에서 문제 상황 확인
// function Navigation() {
//     return (
//         <div>
//             <a href="/">Home </a>
//             <a href="/#/about">About</a>
//         </div>
//     );
// 


// Link 컴포넌트 활용하기
// function Navigation() {
//     return (
//         <div>
//             <Link to="/">Home </Link>
//             <Link to="/about">About</Link>
//         </div>
//     );
// }


// Navigation.css 적용
// function Navigation() {
//     return (
//         <div className="nav">
//             <Link to="/">Home </Link>
//             <Link to="/about">About</Link>
//         </div>
//     );
// }


// console 확인 + route props에 데이터를 담기 위해 navigation.js 수정하기
// function Navigation() {
//     return (
//         <div className="nav">
//             <Link to="/">Home </Link>
//             <Link to={{ pathname: '/about', state: { fromNavigation: true }}}>About</Link>
//         </div>
//     );
// }

// 기존 코드 복구 + Movie 컴포넌트에 Link 컴포넌트 반영 (상세정보 넣기 위해) + Detail 컴포넌트 만들기
// function Navigation() {
//     return (
//         <div className="nav">
//             <Link to="/">Home </Link>
//             <Link to="/about">About</Link>
//         </div>
//     );
// }


// export default Navigation;