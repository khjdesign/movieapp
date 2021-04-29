import React from 'react';


// App 클래스는 React.Component 클래스를 상속받음
// class App extends React.Component {
// }


// App 클래스에 render()함수 사용하기 - 함수형태 컴포넌트와 클래스형태 컴포넌트
// class App extends React.Component {
//   render() {
//     return <h1>I'm a class component</h1>;
//   }
// }


// 함수형 컴포넌트 정의 후 호출하는 구조 비교 : return문 사용
// function Movie() {
//   return <h3>I'm a class component</h3>;
// }


// function App() { 
//   return (
//     <div> 
//       <Movie />
//     </div>
//   );
// }


// state 정의 + this.state.count 구조의 이해
// class App extends React.Component {
//   state = {
//     count: 0
//   };
//   render() {
//     return <h1>The number is: {this.state.count}</h1>;
//   }
// }


// state의 count를 변경하기 위한 UI 요소를 JSX로 반영
// class App extends React.Component {
//   state = {
//     count: 0
//   };
//   render() {
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button>Add</button>
//         <button>Minus</button>
//       </div>
//     );
//   }
// }


// 버튼 동작하게 하기 : 버튼 클릭 이벤트가 발생할 때 호출할 함수의 정의 (먼저 console.log 를 통한 테스트코드 작성하기)
// class App extends React.Component {
//   state = {
//     count: 0
//   };


//   add = () => {
//     console.log('add');
//   };


//   minus = () => {
//     console.log('minus');
//   };


//   render() {
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }


// 에러 문구 확인 - state를 직접 바꾸려고 시도하게 되면
// class App extends React.Component {
//   state = {
//     count: 0
//   };


//   add = () => {
//     this.state.count = 1;
//   };


//   minus = () => {
//     this.state.count = -1;
//   };


//   render() {
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }


// setState() 함수 사용하기 + 변화하는 HTML 확인하기
// class App extends React.Component {
//   state = {
//     count: 0
//   };


//   add = () => {
//     this.setState({ count: 1 });
//   };


//   minus = () => {
//     this.setState({ count: -1 });
//   };


//   render() {
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }


// 증감기능 만들기 : add 및 minus 함수 재정의하기
// class App extends React.Component {
//   state = {
//     count: 0
//   };


//   add = () => {
//     this.setState({ count: this.state.count + 1 });
//   };


//   minus = () => {
//     this.setState({ count: this.state.count - 1 });
//   };


//   render() {
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }


// 함수의 리팩토링
// class App extends React.Component {
//   state = {
//     count: 0
//   };


//   add = () => {
//     this.setState(current => ({
//       count: current.count + 1
//     }));
//   };


//   minus = () => {
//     this.setState(current => ({
//       count: current.count - 1
//     }));
//   };

  
//   render() {
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }


// class 형 component의 생명주기 - Mount
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('hello');
//   }


//   state = {
//     count: 0
//   };


//   add = () => {
//     this.setState(current => ({
//       count: current.count + 1
//     }));
//   };


//   minus = () => {
//     this.setState(current => ({
//       count: current.count - 1
//     }));
//   };

  
//   componentDidMount() {
//     console.log('component rendered');
//   }


//   render() {
//     console.log("I'm rendering");
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }


// class 형 component의 생명주기 - Update와 Unmount
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('hello');
//   }


//   state = {
//     count: 0
//   };


//   add = () => {
//     this.setState(current => ({
//       count: current.count + 1
//     }));
//   };


//   minus = () => {
//     this.setState(current => ({
//       count: current.count - 1
//     }));
//   };

  
//   componentDidMount() {
//     console.log('component rendered');
//   }


//   componentDidUpdate() {
//     console.log("I just updated");
//   }


//   componentWillUnmount() {
//     console.log('goodbye');
//   }


//   render() {
//     console.log("I'm rendering");
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }


// 영화 앱 워밍업 - 필요한 코드로 변경 + 삼항연산자 이해
// class App extends React.Component {
//   state = {
//     isLoading: true
//   };


//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
//   }
// }


// 영화 앱 워밍업 - 로딩 현상의 구현
// class App extends React.Component {
//   state = {
//     isLoading: true
//   };


//   componentDidMount() {
//     // 영화 데이터 API 호출 후 로딩이 완료되면
//     setTimeout(() => {
//       this.setState({ isLoading: false});
//     }, 3000);
//   }


//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? 'Loading...' : '여기에 영화데이터가 로딩됩니다'}</div>;
//   }
// }


// 영화 데이터 로딩 후 state에 담기
class App extends React.Component {
  state = {
    isLoading: true,
    // API 호출로 응답받은 데이터를 배열 형태로, 그리고 그 안의 객체로 구성해서 movie라는 공간에 할당하기
    movie: []
  };


  componentDidMount() {
    // 영화 데이터 API 호출 후 로딩이 완료되면
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 3000);
  }


  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : '여기에 영화데이터가 로딩됩니다'}</div>;
  }
}


export default App;