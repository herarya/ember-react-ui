export type CheckBoxProps = {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * The name of the control
     */
    name: string;
    /**
     * Value of checkbox
     * @defaultValue false
     */
    isChecked: boolean;
    /**
     * Indicate the value of the radio corresponding to the name
     */
    value: string | number;
    /**
     * Handle the event onChange
     */
    onChange?: (isChecked: boolean, value: any) => void;
  };
  