import * as React from 'react';
import CheckboxStyled from './styles/checkbox';
import { CheckBoxProps } from './types';

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  name,
  isChecked = false,
  value,
  onChange,
}: CheckBoxProps) => {
  const [checked, setChecked] = React.useState(isChecked);

  const checkRef = React.useRef<any>();

  React.useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleChangeCheckBox = () => {
    if (onChange) {
      onChange(!isChecked, value);
    }
    setChecked((currentChecked) => !currentChecked);
  };
  
  return (
    <CheckboxStyled
      id={id}
      ref={checkRef}
      name={name}
      onChange={handleChangeCheckBox}
      type="checkbox"
      checked={checked}
      value={value}
    />
  );
};

export default CheckBox;
