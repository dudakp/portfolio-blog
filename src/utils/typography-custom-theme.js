// custom theme based on fairy-gates typography.js theme
import verticalRhythm from 'compass-vertical-rhythm'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme = {
  title: 'Custom theme',
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Work Sans', 'sans-serif'],
  bodyFontFamily: ['Quattrocento Sans', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: '600',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const linkColor = '#1ca086'
    const vr = verticalRhythm({
      baseFontSize: '17px',
      baseLineHeight: '24.65px',
    })
    return {
      a: {
        color: linkColor,
        textDecoration: 'none',
        textShadow:
          '.03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff', // eslint-disable-line
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
      },
      'a:hover,a:active': {
        textShadow: '6px 6px 15px rgba(104, 104, 104, 0.25)',
        backgroundImage: 'none',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
      },
    }
  },
}

export default theme
