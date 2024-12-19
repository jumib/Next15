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
      {children}
    </div>
  );
}
