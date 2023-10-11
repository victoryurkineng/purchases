import { FC } from 'react';
import cx from 'classnames';
import styles from './image.module.css';

interface ImageProps {
  src: string;
  alt: string;
  size?: 'small' | 'large';
}

export const Image: FC<ImageProps> = ({src, alt, size = 'large'}) => {
  const sizeClasses = cx({
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
  });
  return <div className={cx(styles.container, sizeClasses)}>
    <img src={src} alt={alt} className={sizeClasses} />
  </div>;
}
