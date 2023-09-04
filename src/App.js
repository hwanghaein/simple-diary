import logo from './logo.svg';
import './App.css';
import DiaryEditor from './DiaryEditor/DiaryEditor';
import DiaryList from './DiaryList';
import { useRef, useState } from 'react';

// const dummyList = [
//   {
//     id:1,
//     author: "황혜인", 
//     content: "하이1",
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author: "짱구", 
//     content: "하이2",
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author: "철수", 
//     content: "하이3",
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id:4,
//     author: "흰둥이", 
//     content: "하이4",
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
// ]

function App() {

  
  const [data, setData] = useState([]);  // 1 (상태변화함수 만들기, 빈배열로 시작(일기 없는 상태로 출발))

  const dataId = useRef(0); // 7 (id 인덱스 추가-> 변수 처럼 사용 필요 -> useRef 사용)

  const onCreate = (author, content, emotion) => {; // 3 (data를 새로 생성하는 함수 만들기 - 새로운 일기 추가하는 함수)
  const created_date = new Date().getTime(); // 5 (현재시간)
  const newItem = { // 6 (새로운 일기 아이템으로 추가돼야하는것)
  author, 
  content,
  emotion,
  created_date,
  id: dataId.current 
  };
    dataId.current += 1; // 8 (하나 만들면 id가 +1 증가해야함)
    setData([newItem,...data]); // 9 (원래 아이템에서 맨 위에 새로운 일기 올라오게 하기)
  }

return (
    <div className="App">
<DiaryEditor onCreate={onCreate}/> {/*4 (글쓰기로 data 업데이트, 생성)*/}
<DiaryList diaryList={data} /> {/*2 (리스트에 data 상태 전달*/} 
    </div>
  );
};

export default App;
