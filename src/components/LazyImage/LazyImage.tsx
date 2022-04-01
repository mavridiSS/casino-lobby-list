import React, { useState } from "react";
import clsx from "clsx";

import styles from "./LazyImage.module.css";

interface LazyImageProps {
  alt?: string;
  src: string;
  onError?: () => void;
}

const LazyImage = ({ alt, src, onError }: LazyImageProps) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const onLoad = () => {
    setLoaded(true);
  };
  const handleError = () => {
    setLoaded(true);
    if (onError) onError();
  };

  return (
    <img
      ref={imgRef}
      className={clsx(styles.img, {
        [styles.loaded]: loaded,
      })}
      loading="lazy"
      src={src}
      alt={alt}
      onLoad={onLoad}
      onError={handleError}
    />
  );
};

export default LazyImage;
