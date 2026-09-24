"use client";

import React from "react";
import SkeletonComponent, { SkeletonProps } from "react-loading-skeleton";
import { cn } from "@/lib/utils";

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <SkeletonComponent
      baseColor="#18271D"
      highlightColor="#233B2B"
      className={cn("rounded-md", className)}
      {...props}
    />
  );
};

export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="glass-panel rounded-xl p-6 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-4">
            <Skeleton width={80} height={20} />
            <Skeleton width={60} height={20} />
          </div>
          <Skeleton height={24} className="mb-2" />
          <Skeleton count={2} height={16} className="mb-4" />
          <div className="pt-4 border-t border-white/5 flex justify-between items-center">
            <Skeleton width={100} height={16} />
            <Skeleton width={70} height={28} borderRadius={999} />
          </div>
        </div>
      ))}
    </div>
  );
};
