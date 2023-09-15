import { useContext, useEffect, useRef } from "react";
import React, { useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
}) => {

const { onDelete, onEdit} = useContext(DiaryDispatchContext)

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput =  useRef(); // 레퍼런스 객체 만들기

  const handleDelete = () => {
    console.log(id);
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

const handleQuitEdit = () => { 
  setIsEdit(false);
  setLocalContent(content);
}

const handleEdit = () =>{
  if(localContent.length < 5){
    localContentInput.current.focus(); // 포커스 명령 넣기
    return;
  }

  if(window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)){
    onEdit(id, localContent);
    toggleIsEdit();
  }


}

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정 점수: {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput} // textarea에 레퍼런스로 추가 
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleDelete}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
