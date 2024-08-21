import React from 'react';

const View = ({ children, style,className , ...props}) => {
  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};

export default View;