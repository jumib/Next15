"use client";
// FIXME: Parallel Route
// Parallel = 동시에 보여주는 것
// 폴더링이 같은 루트여야 함
// layout에서 쓸 수 있다.

import { useState } from "react";

export default function Page() {
  const [id, setId] = useState("");
  const onChangeId = () => {};
  const onSubmit = () => {};

  return (
    <>
      <div className="flex w-screen h-full justify-center absolute inset-0">
        <div className="w-fit h-40 bg-white text-black relative top-1/3 p-4">
          <button>X</button>
          <form onSubmit={onSubmit} className="flex flex-col items-center">
            <label>Enter Code</label>
            <input
              type="text"
              value={id}
              onChange={onChangeId}
              placeholder="입장 코드를 입력하세요"
            />
            <button type="submit">제출</button>
          </form>
        </div>
      </div>
    </>
  );
}

// FIXME: use client
// 기본적으로 모든 컴포넌트는 모두 서버 컴포넌트다.
// 클라이언트 컴포넌트도 서버에서 실행은 된다.(훅은 안됨)
// 훅 쓰려면 클라이언트 컴포넌트로 바꿔줘야 한다. "use client";
