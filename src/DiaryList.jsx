import DiaryItem from './DiaryItem';

const DiaryList = ({diaryList})=> {
  return (
  <div className="DiaryList">
    <h2>일기 리스트</h2>
    <h4>{diaryList.length}개의 일기가 있습니다.</h4>
  <div>
    {diaryList.map((it)=>
    (   // unique "key" prop 에러 해결 (최상위 태그에 적기)
      <DiaryItem key={it.id} {...it}/>

  ))}
  </div>
  
  </div>
  );
}

// undefined로 전달 될 경우를 대비해서 props의 기본값을 설정해줌
DiaryList.defaultProps={
diaryList:[] // 빈배열로 기본값 설정
}

export default DiaryList;