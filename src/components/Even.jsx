import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    //클린업, 정리함수 => 컴포넌트가 언마운트 될 때 실행된다.
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
