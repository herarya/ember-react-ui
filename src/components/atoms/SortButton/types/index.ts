export type SortButtonProps = {
  /**
   * Specifies card Id
   */
  id?: string;
  /**
   * The variant of Button allows values:
   * default, up, down
   */
  variant: 'default' | 'up' | 'down';
  /**
   * Handle the event onClick
   */
  onClick?: (value?: any) => void;
};
