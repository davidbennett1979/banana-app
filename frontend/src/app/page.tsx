'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [data, setData] = useState({ message: '', time: '' });

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">{data.message || 'Loading...'}</h1>
      <p className="mt-4">Server Time: {data.time}</p>
      <Button variant="default" className="mt-4">
        shadcn/ui Button
      </Button>
    </main>
  );
}
