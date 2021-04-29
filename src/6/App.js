import React from 'react';
// axios import 하기, axios : HTTP통신(API 호출)을 지원하는 Javascript 라이브러리
import axios from 'axios';
// // Movie 컴포넌트 임포트
import Movie from './Movie';
// // css 임포트
import './App.css';


// App class component 정의 + 영화 데이터 API 호출 하기 + 크롬 Network 탭에서 확인하기
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };


//   componentDidMount() {
//     axios.get('https://yts-proxy.now.sh/list_movies.json');
//   }


//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
//   }
// }


// axios.get()d의 분리 + 비동기처리 + 데이터를 호출해온 결과를 크롬 console 탭에서 확인하기
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };


//   getMovies = async () => {
//     const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
//     console.log(movies);
//   };


//   componentDidMount() {
//     this.getMovies();
//   }


//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
//   }
// }


// data -> data -> movies 순서로 객체에 접근하기 
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };


//   getMovies = async () => {
//     const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
//     console.log(movies.data.data.movies);
//   };


//   componentDidMount() {
//     this.getMovies();
//   }


//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
//   }
// }


// 구조 분해 할당 사용하기
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };


//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies }
//       }
//     } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
//     console.log(movies);
//   };


//   componentDidMount() {
//     this.getMovies();
//   }


//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
//   }
// }


// setState : state 내의 movies에 API 호출 결과인 response data(data.data.movies) 저장하기 + Movie 컴포넌트 만들러 가기
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };


//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies }
//       }
//     } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
//     this.setState({ movies: movies })
//     // 객체키와 변수명이 같을 때 축약하기 
//     // this.setState({ movies })
//     // isLoding state도 변경하기
//     // this.setState({ movies, isLoading: false });
//   };


//   componentDidMount() {
//     this.getMovies();
//   }


//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
//   }
// }


// App 컴포넌트에서 Movie 컴포넌트 그리기 + map() 함수 사용하기 + Movie 컴포넌트를 반환하기 + Movie 컴포넌트에 props 전달하기   
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: []
//   };


//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies }
//       }
//     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
//     this.setState({ movies, isLoading: false });
//   };


//   componentDidMount() {
//     this.getMovies();
//   }


//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <div>
//         {isLoading
//           ? 'Loading...'
//           : movies.map((movie) => {
//             console.log(movie);
//             return (
//               <Movie
//                 key={movie.id}
//                 id={movie.id}
//                 year={movie.year}
//                 title={movie.title}
//                 summary={movie.summary}
//                 poster={movie.medium_cover_image}
//               />
//             );
//           })}
//       </div>
//     );
//   }
// }


//App 컴포넌트에 HTML (css를 입히기 위한 class 정의) 추가 -> Movie 컴포넌트도 HTML (css를 입히기 위한 class 정의) 추가
class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };


    getMovies = async() => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies, isLoading: false });
    };


    componentDidMount() {
        this.getMovies();
    }


    render() {
        const { isLoading, movies } = this.state;
        return ( <
            section class = "container" > {
                isLoading ? ( <
                    div class = "loader" >
                    <
                    span class = "loader__text" > Loading... < /span> <
                    /div>
                ) : ( <
                    div class = "movies" > {
                        movies.map(movie => ( <
                            Movie key = { movie.id }
                            id = { movie.id }
                            year = { movie.year }
                            title = { movie.title }
                            summary = { movie.summary }
                            poster = { movie.medium_cover_image }
                            />
                        ))
                    } <
                    /div>
                )
            } <
            /section>
        );
    }
}


export default App;