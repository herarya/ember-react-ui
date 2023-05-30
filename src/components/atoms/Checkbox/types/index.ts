export type CheckBoxProps = {
    /**
     * The name of the control
     */
    name: string;
    /**
     * Value of checkbox
     */
    isChecked: boolean;
    /**
     * Indicate the value of the checkbox corresponding to the name
     */
    value: string | number;
    /**
     * Handle the event onChange
     */
    onChange?: (isChecked: boolean, value: any) => void;
  };
  