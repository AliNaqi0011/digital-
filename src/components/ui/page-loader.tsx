
'use client';

import { Briefcase } from "lucide-react";

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 animate-fade-out">
      <div className="relative flex flex-col items-center gap-4">
        <Briefcase className="w-12 h-12 text-primary animate-pulse" />
        <div className="w-32 h-2 rounded-full bg-primary/20 overflow-hidden">
            <div className="h-full bg-primary animate-loader-progress"></div>
        </div>
      </div>
    </div>
  );
}

