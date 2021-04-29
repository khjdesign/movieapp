import React from 'react';
import PropTypes from 'prop-types';
// css 임포트
import './Movie.css';


// Movie 컴포넌트 기본 구조 작성하기
// function Movie() {
//     return <h1></h1>;
// }

// Movie.PropTypes = {};


// https://yts-proxy.now.sh/list_movies.json 에서 필요한 데이터의 키 찾기 + propTypes 작성하기
// function Movie() {
//     return <h1></h1>;
// }

// Movie.PropTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
// };

// https://yts.mx/api#list_movies 에서 정렬하기 위한 요소 찾기
// https://yts-proxy.now.sh/list_movies.json?sort_by=rating&order_by=asc 의 결과 확인


// Movie 컴포넌트에 props 추가하기
// function Movie({ id, title, year, summary, poster }) {
//     return <h4>{title}</h4>;
// }


// Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
// };


//Movie 컴포넌트에 HTML (css를 입히기 위한 class 정의) 추가 + id props 삭제 + style={{ backgroundColor: 'red'}} 바로 적용해보기 

function Movie({ title, year, summary, poster }) {
    return ( <
        div class = "movie" >
        <
        img src = { poster }
        alt = { title }
        title = { title }
        /> <
        div class = "movie__data" >
        <
        h3 class = "movie__title" > { title } < /h3> <
        h5 class = "movie__year" > { year } < /h5> <
        p class = "movie__summary" > { summary } < /p> < /
        div > <
        /div>
    );
}


Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};


export default Movie;