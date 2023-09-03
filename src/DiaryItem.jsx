const DiaryItem = (author, content, created_date, emotion, id) => {
  // unique "key" prop 에러 해결 (최상위 태그에 적기)
  return (
    <div className="DiaryItem">
      <div key={it.id}>
        <div className="info">
          <div>작성자 : {it.author}</div>
          <div>일기 : {it.content}</div>
          <div>감정 : {it.emotion}</div>
          <div>작성 시간(ms) : {it.created_date}</div>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
