import React, { useEffect, useState } from "react";

const UnmountTest = () => {

  useEffect(()=>{
  console.log("Mount!"); // Mount 시점에 실행이 됨
  
  return ()=>{
    console.log("Unmount!");  // Unmount 시점에 실행이 됨 
  }
  },[])


  return <div>Unmount Testing Component</div>
}


const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest/>}
    </div>
  );
};

export default Lifecycle;
