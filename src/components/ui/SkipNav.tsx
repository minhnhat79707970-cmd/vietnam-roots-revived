import React from "react";

export const SkipNav: React.FC<{ targetId?: string; label?: string }> = ({
  targetId = "main-content",
  label = "Chuyển đến nội dung chính",
}) => (
  <a
    href={`#${targetId}`}
    className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-sm focus:bg-vermilion focus:text-white focus:shadow-lg"
  >
    {label}
  </a>
);

export default SkipNav;