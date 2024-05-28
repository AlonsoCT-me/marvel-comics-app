import React from 'react';
import '../styles/ComicSkeleton.scss';

const ComicSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
    </div>
  );
};

export default ComicSkeleton;