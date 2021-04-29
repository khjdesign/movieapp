import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //내가만든 app.js에서 가져올거야

//브라우저가 그릴 수 있게 렌더함수 갖다쓰자. 
//앱 컴퍼넌트 가지고 와서, html 파일의 getElementByID 아이디가 루트인 엘리먼트 가져와서, 렌더링할거야.
ReactDOM.render( < App / > , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); //이걸 왜 숨겨야 나오는지?