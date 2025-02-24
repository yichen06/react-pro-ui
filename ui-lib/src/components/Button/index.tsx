import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'default';
}

export const UIButton: React.FC<ButtonProps> = ({
  children,
  type = 'default',
}: ButtonProps) => {
  const handleClick = () => {
    console.log('Button clicked');
    console.log(children);
    console.log(type);
  };
  return (
    <div>
      {children}
      <button className={`btn-${type}`} onClick={handleClick}>
        Click
      </button>
    </div>
  );
};
// export default UIButton;
