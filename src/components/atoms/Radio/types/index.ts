export type RadioProps = {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * Specifies whether a checkbox should be checked or not.
     * @defaultValue false
     */
    isChecked?: boolean;
    /**
     * Indicate the value of the Radio
     */
    value: string | number;
    /**
     * The name of the Radio
     */
    name?: string;
    /**
     * Handle the event onChange
     */
    onChange?: (value?: any) => void;
  };
  