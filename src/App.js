import logo from './logo.svg';
import './App.css';
import DiaryEditor from './DiaryEditor/DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author: "황혜인", 
    content: "하이1",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author: "짱구", 
    content: "하이2",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author: "철수", 
    content: "하이3",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id:4,
    author: "흰둥이", 
    content: "하이4",
    emotion: 1,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div>
<DiaryEditor />
<DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
