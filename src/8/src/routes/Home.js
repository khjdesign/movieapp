import React from 'react';
import axios from 'axios';
// Movie 컴포넌트의 경로를 수정하여 임포트
import Movie from '../components/Movie';
// App.css 대신 Home.css 임포트
import './Home.css';

//클래스 명 수정 (App -> Home)
class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };


    getMovies = async () => {
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
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}


export default Home;