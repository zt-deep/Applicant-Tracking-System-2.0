import { createTheme, alpha } from '@mui/material/styles';

let secondaryColor = '#335aff';
// const secondaryColor = "#FFBE00";
export const updateSecondaryColor = (color = '#335aff') => {
  secondaryColor = color;
};
const AccountTheme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#ED3833',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(secondaryColor, 0.05),
            color: secondaryColor,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: 'inherit',
          '&:hover': {
            color: secondaryColor,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 4,
          color: '#EBECF0',
          '&:checked': {
            color: secondaryColor,
          },
          '&:indeterminate': {
            color: '#757575',
          },
          '&:hover': {
            color: '#BDBDBD',
          },
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          '&:foucs .MuiInputLabel-root': {
            color: `${secondaryColor} !important`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#BDBDBD',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderColor: '#EBECF0',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: 50,
          '&:hover .MuiInputLabel-root': {
            color: '#172B4D',
          },
        },
        notchedOutline: {
          borderColor: '#EBECF0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 35,
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: '#EBECF0',
          },
        },
        {
          props: { variant: 'contained', disabled: true },
          style: {
            color: '#fff !important',
            height: 35,
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: '#fff !important',
            height: 35,
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: '#172B4D',
            backgroundColor: '#EBECF0',
            height: 35,
            '&:hover': {
              backgroundColor: '#EBECF0',
            },
          },
        },
      ],
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: 60,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          height: 60,
        },
      },
    },
  },
  spacing: (factor) => `${factor * 10}px`,
  palette: {
    primary: {
      main: '#172B4D',
    },
    secondary: {
      main: '#335aff',
    },
    background: {
      default: '#fff',
    },
    info: {
      main: '#EBECF0',
    },
    text: {
      primary: '#172B4D',
      secondary: '#335aff',
    },
    divider: '#F0F0F0',
    action: {
      disabledBackground: alpha(secondaryColor, 0.5),
    },
  },
  mixins: {
    toolbar: {
      height: 60,
      background: '#fff',
      color: '#172B4D',
      boxShadow: '0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    subtitle1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 'bold',
      fontSize: '1.25rem',
      lineHeight: 1.5,
      color: '#172B4D',
      letterSpacing: 0,
    },
    subtitle2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#172B4D',
      letterSpacing: 0,
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#172B4D',
      letterSpacing: 0,
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#172B4D',
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h5: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: '0.6875rem',
      lineHeight: 1.5,

      color: '#828282',
      opacity: 0.8,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#172B4D',
      letterSpacing: 0,
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#172B4D',
      letterSpacing: 0,
    },
    body2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#172B4D',
      letterSpacing: 0,
    },
    caption: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#757575',
      letterSpacing: 0,
    },
    button: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      textTransform: 'capitalize',
    },
    pxToRem: (size) => `${size / 16}rem`,
  },
});
export default AccountTheme;
