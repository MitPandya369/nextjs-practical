'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Header() {
  const segment = useSelectedLayoutSegment();
  return (
    <header className="flex items-center justify-between bg-gray-800 p-8 text-white">
      <div className="text-lg font-bold">
        <Link href="/">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>

      <nav className="flex space-x-6">
        <Link href="/" className={segment === null ? 'text-yellow-400' : ''}>
          Home
        </Link>
        <Link
          href="/dashboard"
          className={segment === 'dashboard' ? 'text-yellow-400' : ''}
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
