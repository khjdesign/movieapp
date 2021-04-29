import React from 'react';
// Movie 컴포넌트 대신 Home 컴포넌트 임포트 
import Home from './routes/Home';
import './App.css';
// // HashRouter와 Route 임포트
// import { HashRouter, Route } from 'react-router-dom';
// // About 컴포넌트 임포트 
// import About from './routes/About';
// // Home 컴포넌트 재임포트
// import Home from './routes/Home';
// // Navigation 컴포넌트 임포트
// import Navigation from './components/Navigation';
// // Detail 컴포넌트 임포트
// import Detail from './routes/Detail';


// App에 있었던 클래스 컴포넌트를 Home 컴포넌트로 모두 이동하기
// Home 컴포넌트를 만들어주었기 때문에, App 컴포넌트는 다시 함수형 기본 형태로 수정
// App 컴포넌트에선 Home 컴포넌트를 호출하고, Home 컴포넌트에서 Movie 컴포넌트를 호출하는 형태로 변경된 상태

function App() {
  return <Home />;
}


// 라우터 만들기 (경로확인 : http://localhost:3000/#/)
// function App() {
//   return (
//     <HashRouter>
//       <Route />
//     </HashRouter>
//   );
// }


// Route 컴포넌트에서 path, component props 추가하기 + About 컴포넌트 작성해주기 (About.js)
// function App() {
//   return (
//     <HashRouter>
//       <Route path="/about" component={About} />
//     </HashRouter>
//   );
// }


// 또다른 Route 컴포넌트에 Home 컴포넌트 부분 추가하기 + 경로확인 : http://localhost:3000/#/about
// function App() {
//   return (
//     <HashRouter>
//       <Route path="/" component={Home} />
//       <Route path="/about" component={About} />
//     </HashRouter>
//   );
// }


// 문제 해결을 위해 라우터 동작 살펴보기
// http://localhost:3000/#/이후경로
// function App() {
//   return (
//     <HashRouter>
//       <Route path="/home">
//         <h1>Home</h1>
//       </Route>
//       <Route path="/home/introduction">
//         <h1>introduction</h1>
//       </Route>
//       <Route path="/about">
//         <h1>About</h1>
//       </Route>
//     </HashRouter>
//   );
// }


// exact props 추가하기 
// function App() {
//   return (
//     <HashRouter>
//       <Route path="/" exact={true} component={Home} />
//       <Route path="/about" component={About} />
//     </HashRouter>
//   );
// }


// About 컴포넌트 정리 + About.js 에 className 반영하기 + About.css 작성하기 


// Navigation 컴포넌트 사용 + 에러 확인 
// function App() {
//   return (
//     <HashRouter>
//       <Navigation />
//       <Route path="/" exact={true} component={Home} />
//       <Route path="/about" component={About} />
//     </HashRouter>
//   );
// }

// Navigation 컴포넌트 정리 (Link to 컴포넌트 쓰기) + Navigation.js 에 className 반영하기 + Navigation.css 작성하기 

// Detail 컴포넌트를 Route 컴포넌트에서 반영하기 + 콘솔에서 로그 확인 
// function App() {
//   return (
//     <HashRouter>
//       <Navigation />
//       <Route path="/" exact={true} component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/movie-detail" component={Detail} />
//     </HashRouter>
//   );
// }


// movie-detail로 직접 접근하는 경우 받아올 데이터가 없음 -> 이럴 때 리다이렉트 처리하기
// route props의 history 키 활용
// Detail 컴포넌트를 클래스형 컴포넌트로 바꾸기

export default App;