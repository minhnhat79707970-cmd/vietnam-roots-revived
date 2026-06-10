import React, { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  fallbackSrc?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
}

function toWebPUrl(src: string): string {
  if (!src) return src;
  if (src.includes("r2.dev") && !src.includes("format=")) {
    return src + (src.includes("?") ? "&format=webp" : "?format=webp");
  }
  if (src.includes("supabase") && src.includes("/storage/v1/")) {
    return src + (src.includes("?") ? "&" : "?") + "format=webp";
  }
  return src;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  priority = false,
  fallbackSrc = "/placeholder.svg",
  objectFit = "cover",
}) => {
  const [imgSrc, setImgSrc] = useState(toWebPUrl(src));
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onError={handleError}
      style={{
        objectFit,
        maxWidth: "100%",
        height: height ? `${height}px` : "auto",
        ...style,
      }}
    />
  );
};

export default OptimizedImage;