import { useEffect, useState } from 'react';
import { RadioProps } from './types';
import RadioStyled from './styles/radio';

const Radio: React.FC<RadioProps> = ({
  id,
  isChecked = false,
  value,
  name,
  onChange,
}: RadioProps) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleRadioChange = () => {
    if (onChange) {
        onChange(value);
      }
      setChecked(true);
  };

  return (
    <RadioStyled
        id={id}
        onChange={handleRadioChange}
        autoComplete="off"
        checked={checked}
        value={value}
        name={name}
        type="radio"
      />
  );
};

export default Radio;
