export default function BeforeLoginLayout({
  children,
  modal, //  Parallel  router 적용
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      {modal}
      {/* modal -> default.tsx를 작성하지 않으면 modal을 찾을 수가 없기 때문에 404가 발생 */}
      {children}
    </div>
  );
}

// 주소가 root일 때는 children -> page.tsx, modal -> @modal/default.tsx
// 주소가 /i/flow/login일 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx

// FIXME: intercepting route
// (.)i/flow/login을 사용해서 i/flow/login 경로를 가로챘다. (@modal은 경로에 포함 안 됨)
// 여기서, 가로챈 페이지가 패러렐 라우트이므로 children이 아니라 modal에 노출된다.

// Q. 그럼 i/flow/login 페이지는 인터셉트 당하니까 평생 실행 안되는거 아니야?
// A. 클라이언트에서 라우팅할때만 인터셉트 라우트가 적용된다. (<Link />, navigate() 등)
//    브라우저에서 주소치고 바로 들어오거나 새로고침 시에는 적용안됨 (본래의 i/flow/login로 라우팅됨)

// (.) - 현재 폴더
// (..) - 상위 폴더
