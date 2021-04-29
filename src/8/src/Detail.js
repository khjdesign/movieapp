// import React from 'react';
// Detail.css 임포트
// import './Detail.css';

// Detail 컴포넌트 작성 + App.js Route 컴포넌트 추가하기
// function Detail(props) {
//     console.log(props);
//     return <span>Hello!</span>;
// }


// 클래스형 Detail 컴포넌트 만들기
// Detail 컴포넌트가 마운트되면, route props에서 location, history를 할당하고, location.state가 없다면 Home으로 이동시키기
// class Detail extends React.Component {
//     componentDidMount() {
//         const { location, history } = this.props;
//         if (location.state === undefined) {
//             history.push('/');
//         }
//     }

//     render () {
//         return <span>Hello!</span>;
//     }
// }


// 상세정보 페이지 화면 구성 시작하기 + 리다이렉트 에러 재확인
// class Detail extends React.Component {
//     componentDidMount() {
//         const { location, history } = this.props;
//         if (location.state === undefined) {
//             history.push('/');
//         }
//     }

//     render () {
//         const { location } = this.props;
//         return <span>{location.state.title}</span>;
//     }
// }


// 리다이렉트 대응하기
// class Detail extends React.Component {
//     componentDidMount() {
//         const { location, history } = this.props;
//         if (location.state === undefined) {
//             history.push('/');
//         }
//     }

//     render () {
//         const { location } = this.props;
//         if (location.state) {
//             return <span>{location.state.title}</span>;
//         } else {    
//             return null;
//         }
//     }
// }


// 조금 더 꾸며본다면
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <p className = "about__container" > { location.state.summary } < /p>;
        } else {
            return null;
        }
    }
}


export default Detail;