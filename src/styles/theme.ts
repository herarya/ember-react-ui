export type StyleEmberTheme = {
    colors: { [key in keyof typeof colors]: string };
    breakpoints: { [key in keyof typeof breakpoints]: string };
    fontSizes: { [key in keyof typeof fontSizes]: string };
  }
  
  const colors = {
    primary: '#5C50BB',
    accent: '#EFEDFD',
    secondary: '#F7F7F7',
    black: '#000',
    white: '#fff',
    border: '#999',
    tableHeaderBg: '#F7F7F7',
    divider: '#E1E1E1',
    rowSelected: '#EFEDFD',
  };
  
  const fontSizes = {
    sm: '14px',
    md: '18px',
    lg: '20px',
  };
  
  const breakpoints = {
    mobile: '599px',
    tablet: '768px',
    desktop: '1025px',
  };
  
  const theme: StyleEmberTheme = {
    colors,
    breakpoints,
    fontSizes,
  };

 const darkTheme = {
    ...theme,
    colors: {
      primary: '#3A1078',
      accent: '#EFEDFD',
      secondary: '#F7F7F7',
      black: '#000',
      white: '#fff',
      border: '#999',
      tableHeaderBg: '#F7F7F7',
      divider: '#E1E1E1',
      rowSelected: '#EFEDFD',
    },
  };
  
  export { theme, darkTheme };
  