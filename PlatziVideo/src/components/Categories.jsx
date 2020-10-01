import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title, isSearch }) => {
  const searchStyle = classNames('div', {
    isSearch,
  });
  return (
    <div className={`categories ${searchStyle}`}>
      <h3 className={`categories__title ${searchStyle}`}>{title}</h3>
      {children}
    </div>
  );
};

export default Categories;
