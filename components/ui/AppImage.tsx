'use client';

import React, { useState } from 'react';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
  onClick?: () => void;
  fallbackSrc?: string;
  [key: string]: any;
}

function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  sizes,
  onClick,
  fallbackSrc = '/assets/images/no_image.png',
  ...props
}: AppImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // ✅ basePath-aware src (GitHub Pages)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const resolvedSrc =
    imageSrc.startsWith('/') && basePath && !imageSrc.startsWith(basePath + '/')
      ? `${basePath}${imageSrc}`
      : imageSrc;

  // external URL detection (use resolvedSrc here too)
  const isExternal = resolvedSrc.startsWith('http://') || resolvedSrc.startsWith('https://');
  const isLocal = resolvedSrc.startsWith('/') || resolvedSrc.startsWith('./') || resolvedSrc.startsWith('data:');

  const handleError = () => {
    if (!hasError && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const commonClassName = `${className} ${isLoading ? 'bg-gray-200' : ''} ${
    onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''
  }`;

  const imgStyle: React.CSSProperties = {};
  if (width) imgStyle.width = width;
  if (height) imgStyle.height = height;

  // ✅ Use <img> for everything (simplest + works on GitHub Pages export)
  if (fill) {
    return (
      <div className={`relative ${className}`} style={{ width: width || '100%', height: height || '100%' }}>
        <img
          src={resolvedSrc}   // ✅ CHANGED
          alt={alt}
          className={`${commonClassName} absolute inset-0 w-full h-full object-cover`}
          onError={handleError}
          onLoad={handleLoad}
          onClick={onClick}
          style={imgStyle}
          {...props}
        />
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}     // ✅ CHANGED
      alt={alt}
      className={commonClassName}
      onError={handleError}
      onLoad={handleLoad}
      onClick={onClick}
      style={imgStyle}
      {...props}
    />
  );
}

export default AppImage;
