import { FC } from 'react';
import cx from 'classnames';
import styles from './image.module.css';

interface ImageProps {
  src: string;
  alt: string;
  size?: 'small' | 'large';
}

export const Image: FC<ImageProps> = ({ src, alt, size = 'large' }) => {
  const sizeClasses = cx({
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
  });
  return (
    <div className={cx(styles.container, sizeClasses)}>
      <object data={src} type="image/jpg">
        <img
          src="https://victoryurkineng.github.io/purchases/app/images/no-image.jpg"
          alt={alt}
          className={sizeClasses}
        />
      </object>
    </div>
  );
};
