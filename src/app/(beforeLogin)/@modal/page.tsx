"use client";
// 같은 루트여야 함
// 두가지 화면을 한 페이지에 같이 띄워야 할 때
// layout에 들어간다.

import { useState } from "react";

export default function Page() {
  const [id, setId] = useState("");
  const onChangeId = () => {};
  const onSubmit = () => {};

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>아이디</label>
            <input type="text" value={id} onChange={onChangeId}></input>
          </div>
        </form>
      </div>
    </>
  );
}
