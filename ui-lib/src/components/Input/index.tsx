import { useState } from 'react';

const UIInput: React.FC = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return <input type='text' value={value} onChange={handleChange} />;
};

export default UIInput;
