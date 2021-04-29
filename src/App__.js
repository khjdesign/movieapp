import React from 'react';
// 직접 정의하지 않고 가져오거나 설치한 것들을 임포트하기
// import PropTypes from 'prop-types'; 

// 이 부분이 (나중에 GET 타입의 API를 호출한 뒤 응답받은) json 포맷의 데이터를 다시 array+object화 하여 사용하는 부분이라고 상상
const foodIlike = [
  {
    name: 'kimchi',
    image: 'https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/12/113.jpg'
  },
  {
    name: 'samgeopsal',
    image: 'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG'
  },
  {
    name: 'ramen',
    image: 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg'
  },
  {
    name: 'kimbob',
    image: 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG'
  }
];

// map 함수를 사용하여 배열 데이터를 활용한 뒤 컴포넌트 호출하기
// 지난주 코드와 어디가 어떻게 달라졌는지 확인하기

function Food({ name }) {
  return <h1>I like {name} </h1>
}

function App() {
  return (
    <div>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgeopsal" />
      <Food fav="zzuggumi" />
      {foodIlike.map(dish => (<Food name={dish.name} />))}
    </div>
  );
}

// map 함수를 사용하여 배열 데이터를 활용한 뒤 컴포넌트 호출하기 + 이미지도 출력하기

// function Food({ name , picture }) {
//   return (
//     <div>
//       <h2>I like {name} </h2>
//       <img src={picture} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       {foodIlike.map(dish => (
//         <Food name={dish.name} picture={dish.image}/>
//         ))}
//     </div>
//   );
// }

// App() -> map() -> renderFood() -> Food() -> App()의 매커니즘으로 이해하기

// function Food({ name , picture }) {
//   return (
//     <div>
//       <h2>I like {name} </h2>
//       <img src={picture} />
//     </div>
//   );
// }

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// function App() {
//   // 반환값 콘솔에서 먼저 확인하기
//   console.log(foodIlike.map(renderFood));
//   return (
//     <div>
//       {foodIlike.map(renderFood)}
//     </div>
//   );
// }

// 에러메시지 해결하기 : key(1)와 alt(3)

// const foodIlike = [
//   {
//     id: 1, 
//     name: 'kimchi',
//     image: 'https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/12/113.jpg'
//   },
//   {
//     id: 2, 
//     name: 'samgeopsal',
//     image: 'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG'
//   },
//   {
//     id: 3, 
//     name: 'ramen',
//     image: 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg'
//   },
//   {
//     id: 4, 
//     name: 'kimbob',
//     image: 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG'
//   }
// ];

// function Food({ name , picture }) {
//   return (
//     <div>
//       <h2>I like {name} </h2>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       {foodIlike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image}/>
//         ))}
//     </div>
//   );
// }

// prop-types 반영하기 (prop-types 설치 및 임포트)

// const foodIlike = [
//   {
//     id: 1, 
//     name: 'kimchi',
//     image: 'https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/12/113.jpg',
//     rating: 1
//   },
//   {
//     id: 2, 
//     name: 'samgeopsal',
//     image: 'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG',
//     rating: 2.9
//   },
//   {
//     id: 3, 
//     name: 'ramen',
//     image: 'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg',
//     rating: 3.4
//   },
//   {
//     id: 4, 
//     name: 'kimbob',
//     image: 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
//     rating: 4.1
//   }
// ];

// function Food({ name , picture , rating }) {
//   return (
//     <div>
//       <h2>I like {name} </h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} width="500" />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       {foodIlike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
//         ))}
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };


export default App;
