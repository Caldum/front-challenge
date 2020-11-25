import { createMuiTheme } from '@material-ui/core/styles'

const N5Palette = {
    primary: {
      main: '#0170d4',
      light: "#5e9eff",
      dark: "#0046a2",
      contrastText: '#fff'
    },
    secondary: {
      main: '#33517a',
      light: "#627da9",
      dark: "#00294e",
      contrastText: '#fff'
    },
    text: {
      primary: '#3E3E3E',
      secondary: '#666666',
      disabled: '#9E9E9E',
    },
    defaultFont: 'Muli, sans-serif',
}

const N5Theme = () => createTheme(N5Palette)
export default N5Theme

const createTheme = (palette) =>
    createMuiTheme({
        palette: {
            primary: {
                light: palette.primary.light,
                main: palette.primary.main,
                dark: palette.primary.dark,
                contrastText: palette.primary.contrastText,
            },
            secondary: {
                light: palette.secondary.light,
                main: palette.secondary.main,
                dark: palette.secondary.dark,
                contrastText: palette.secondary.contrastText,
            },
            text: {
                primary: '#3E3E3E',
                secondary: '#666666',
                disabled: '#9E9E9E',
            },
            error: {
                light: '#FFC6D7',
                main: '#ff004f',
                dark: '#c40028',
                contrastText: '#3e3e3e',
            },
            info: {
                light: '#e5f0fb',
                main: '#2196f3',
                dark: '#1976b2',
                contrastText: '#3e3e3e',
            },
            success: {
                main: "#46ce7f",
                light: "#d5f4e2",                
                dark: '#009c52',
                contrastText: '#3e3e3e',
            },
            warning: { 
                main: '#ffbb00',
                light: '#fff0c7',
                dark: '#c78b00',
                contrastText: '#3e3e3e',
            }
        },
        typography: {
            fontFamily: palette.defaultFont,
            letterSpacing: 1,
            fontSize: 16,
            useNextVariants: true,
            h1: {
                fontSize: '3rem',
                fontWeight: 600,
                lineHeight: 1,
            },
            h2: {
                fontSize: '2.25rem',
                fontWeight: 800,
                textTransform: 'capitalize',
                color: palette.textMain,
                lineHeight: 1,
            },
            h3: {
                fontSize: '2.25rem',
                fontWeight: 400,
                lineHeight: 1,
            },
            h4: {
                fontSize: '1.5rem',
                fontWeight: 400,
                lineHeight: 1,
            },
            h5: {
                fontSize: '1.25rem',
                fontWeight: 400,
                lineHeight: 1,
            },
            h6: {
                fontSize: 20,
                fontWeight: 300,
                color: palette.textMain,
                lineHeight: 1.25,
            },
            body1: {
                fontSize: '1rem',
            },
            body2: {
                fontSize: '0.875rem',
            },
            subtitle1: {
                fontSize: 16,
            },
            caption: {
                fontSize: 12,
                fontWeight: 300,
            },
            button: {
                fontSize: 14,
                lineHeight: 1.25,
                textTransform: 'capitalize',
            },
        },

        overrides: {
            MuiFormControl: {
                root: {
                    minWidth: 184,
                    marginTop: 8,
                    marginBottom: 4,
                    width: '100%',
                },
            },
            MuiInput: {
                root: {
                    fontWeight: 500,
                },
                underline: {
                    '&:before': {
                        borderBottom: `1px solid ${palette.text.secondary}`,
                    },
                    '&:after': {
                        borderBottom: `1px solid ${palette.primary.main}`,
                    },
                    '&:hover:not($disabled):not($focused):not($error):before': {
                        borderBottom: `1px solid ${palette.primary.dark}`,
                    },
                },
            },
            MuiPrivateNotchedOutline: {
                root: {
                    borderRadius: 35,
                    borderWidth: '1px !important',
                },
            },
            PrivateNotchedOutline: {
                root: {
                    borderRadius: '35px !important',
                },
            },
            MuiOutlinedInput: {
                '&$focused': {
                    borderWidth: '1px !important',
                },
                input: {
                    padding: '10px 14px',
                },
                root: {
                    '&:hover fieldset': {
                        borderColor: `${palette.primary.dark} !important`,
                    },
                },
            },
            MuiCard: {
                root: {
                    borderRadius: 8,
                    border: 0,
                },
            },
            MuiCardContent: {
                root: {
                    padding: '24px',
                },
            },
            MuiInputLabel: {
                outlined: {
                    transform: 'translate(15px, 12px) scale(1)',
                },
            },
            MuiInputBase: {
                inputMarginDense: {
                    paddingTop: 6,
                },
            },
            MuiFab: {
                root: {
                    boxShadow: 'none !important',
                },
                sizeMedium: {
                    label: {
                        fontSize: '14px',
                    },
                },
                label: {
                    MuiIcon: {
                        root: {
                            fontSize: '14px',
                        },
                        fontSizeLarge: {
                            fontSize: '18px',
                        },
                    },
                },
            },
            MuiBreadcrumbs: {
                separator: {
                    marginRight: 0,
                    marginLeft: 0,
                },
            },
            MuiButton: {
                root: {
                    borderRadius: 18,
                    border: 0,                    
                    textTransform: 'none',
                    height: '36px',
                    minWidth: '152px',
                    padding: '8px 24px',
                    '&:focused': {
                        backgroundColor: palette.primary.dark,
                        opacity: 1,
                    },
                },
                containedPrimary: {
                    color: 'white',
                    '&:hover': {
                        backgroundColor: palette.primary.light,
                        color: '#FFF',
                    },
                    '&:disabled': {
                        backgroundColor: palette.text.disabled,
                        color: '#FFF',
                    },
                },
                sizeSmall: {
                    fontSize: 14,
                    padding: '4px 20px',
                    minWidth: '124px',
                },
                sizeLarge: {
                    fontSize: 16,
                    padding: '12px 24px',
                    height: '44px',
                    minWidth: '152px',
                },
            },
            MuiChip: {
                root: {
                    margin: '0 5px',
                    fontSize: '14px',
                    color: 'a',
                },
            },
            MuiFormLabel: {
                root: {
                    zIndex: 1,
                    fontSize: 14,
                    color: palette.text.secondary,
                    pointerEvents: 'none',
                    '&$focused': {
                        color: palette.primary.main,
                    },
                },
                '&$disabled': {
                    color: `${palette.primary.main} !important`,
                },
            },
            MuiSlider: {
                markLabel: {
                    fontSize: 10,
                },
            },
            MuiTable: {
                root: {
                    borderRadius: 10,
                    overflow: 'auto',
                },
            },
            MuiTableCell: {
                head: {
                    //backgroundColor: palette.hoverGrey,
                    color: palette.primary.main,
                    fontSize: 16,
                    fontWeight: 'bold',
                },
                body: {
                    color: palette.text.primary,
                    fontSize: 14,
                },
            },
            MuiTooltip: {
                root: {
                    background: palette.primary.dark,
                },
            },
        },
    })
