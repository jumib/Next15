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
