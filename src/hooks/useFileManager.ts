import { useEffect, useMemo } from 'react';
import { useState } from 'react';
export default function useFileManager(f: string | string[]) {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    setFiles(Array.isArray(f) ? f : [f])
  }, [])

  return useMemo(() => files, [f])
}