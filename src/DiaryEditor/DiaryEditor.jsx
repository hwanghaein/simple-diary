import React, {useState, useEffect, useContext} from "react";
import {useRef} from "react"; 
import './DiaryEditor.css';
import { DiaryDispatchContext } from "../App";

const DiaryEditor = () => {

  const {onCreate} = useContext(DiaryDispatchContext);
 
  const authorInput = useRef();
  const contentInput = useRef();


  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  };
 

  // 입력 강제하기
  const handleSubmit = ()=>{
    if(state.author.length < 1){
      // focus
      authorInput.current.focus(); // useRef라는 기능으로 생성한 객체는 현재 가리키는 값을 current라는 프로퍼티로 불러와서 사용 가능
      return;
    } 

    if(state.content.length < 5){
      contentInput.current.focus();
      // focus
      return;
    } 
     
    onCreate(state.author, state.content, state.emotion);  // 11 (일기 저장이 발생했을때 onCreate 함수 호출)
    alert("저장성공");
    setState({ // 기본값으로 초기화
      author: "",
      content: "",
      emotion: 1,
    })
  };

  

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState} />  
      </div>
      {/* input과 textarea에 useRef 전달해주기 */}
      <div>
        <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState} />
      </div>
      <div>
        <select  name="emotion" value={state.emotion} onChange={handleChangeState} > 
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      
      </div>
      <div> 
      <button onClick={handleSubmit}>일기 저장하기</button> 
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
