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
// function Movie({title, year, summary, poster }) {
//     return (
//         <div class="movie">
//             <img src={poster} alt={title} title={title} />
//             <div class="movie__data">
//                 <h3 class="movie__title">{title}</h3>
//                 <h5 class="movie__year">{year}</h5>
//                 <p class="movie__summary">{summary}</p>
//             </div>
//         </div>
//     );
// }


// Movie.propTypes = {
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
// };


// 7주차 시작 - 장르 컴포넌트 추가하기 (API 에서 장르의 type 확인) + 에러 확인 (class, genres) + className 수정하기
// function Movie({title, year, summary, poster, genres }) {
//     return (
//         <div className="movie">
//             <img src={poster} alt={title} title={title} />
//             <div className="movie__data">
//                 <h3 className="movie__title">{title}</h3>
//                 <h5 className="movie__year">{year}</h5>
//                 <p className="movie__summary">{summary}</p>
//             </div>
//         </div>
//     );
// }


// Movie.propTypes = {
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired
// };


// 배열 형태로 담긴 장르 데이터를 리스트로 출력하기 + key 에러 확인
// function Movie({title, year, summary, poster, genres }) {
//     return (
//         <div className="movie">
//             <img src={poster} alt={title} title={title} />
//             <div className="movie__data">
//                 <h3 className="movie__title">{title}</h3>
//                 <h5 className="movie__year">{year}</h5>
//                 <p className="movie__summary">{summary}</p>
//                 <ul className="movie__genres">
//                     {genres.map(genres => {
//                         return (
//                             <li className="movie__genres">{genres}</li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// }


// Movie.propTypes = {
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired
// };


// key 에러 수정
// function Movie({ title, year, summary, poster, genres }) {
//     return (
//         <div className="movie">
//             <img src={poster} alt={title} title={title} />
//             <div className="movie__data">
//                 <h3 className="movie__title">{title}</h3>
//                 <h5 className="movie__year">{year}</h5>
//                 <p className="movie__summary">{summary}</p>
//                 <ul className="movie__genres">
//                     {genres.map((genres, index) => {
//                         return (
//                             <li key={index} className="movie__genre">
//                                 {genres}
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// }


// Movie.propTypes = {
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired
// };


// css 꾸미기 : App.css 와 Movie.css


// 화면에 보이는 문자 줄이기
function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
                <ul className="movie__genres">
                    {genres.map((genres, index) => {
                        return (
                            <li key={index} className="movie__genre">
                                {genres}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}


Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;