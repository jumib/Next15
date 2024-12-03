import Link from "next/link";
import Image from "next/image";
import rocket from "../../../../public/rocket.png";

export default function Home() {
  return (
    <div className="flex gap-4">
      <div className="flex-1 flex justify-center items-center w-dvw h-dvh">
        <Image src={rocket} alt="rocket" width={300} />
      </div>
      <div className="flex-1 flex flex-col justify-center w-dvw h-dvh">
        <p className="text-2xl font-bold">ROCKET WORLD</p>
        <p className="text-xl font-bold">지금 가입하세요.</p>
        <Link href="/i/flow/signup">계정 만들기</Link>
        <p className="text-xl font-bold">이미 가입하셨나요?</p>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
}
