'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ICON_URL, SSRSuspense } from '@/common';

export const BackHeader = () => {
  const router = useRouter();
  return (
    <SSRSuspense
      fallback={<div className="h-54px bg-gray-120">로딩중입니다..</div>}
    >
      <nav className="sticky left-0 right-0 top-0 z-50 h-54px bg-gray-120">
        <div className="flex h-full w-full items-center justify-between">
          <button type="button" onClick={() => router.back()}>
            <Image
              className="h-auto w-24px"
              src={ICON_URL.CHEVRON_LEFT_BIG}
              alt="뒤로가기 버튼"
              width="0"
              height="0"
            />
          </button>
        </div>
      </nav>
    </SSRSuspense>
  );
};
