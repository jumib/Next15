"use client";

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
