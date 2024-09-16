const jusi = {}

const scales = { 768: 2, 1024: 3, 1200: 4 }
const device = {
  type: 'desktop',
  width: window.innerWidth,
  height: window.innerHeight,
  scale: 1
}

const styleMap = {
  textColor: 'color',
  fontSize: 'font-size',
  backgroundColor: 'background-color',
  borderColor: 'border-color',
  borderWidth: 'border-width'
}

const rems = ['padding', 'fontSize', 'gap']
const pixies = ['width', 'height', 'borderWidth', 'borderRadius', 'borderTopRightRadius', 'borderTopLeftRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'maxWidth', 'top', 'right', 'bottom', 'left']


const cssUtils = (styles) => {
  return {
    '.cols-2': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '.cols-3': { gridTemplateColumns: 'repeat(3, 1fr)' },
    '.cols-4': { gridTemplateColumns: 'repeat(4, 1fr)' },
    '.gap-1': { gap: .25 },
    '.gap-2': { gap: .5 },
    '.gap-3': { gap: 1 },
    '.gap-4': { gap: 2 },
    '.gap-5': { gap: 4 },
    '.rounded': { borderRadius: styles.border.borderRadius },
    '.rounded-top': { borderTopLeftRadius: styles.border.borderRadius, borderTopRightRadius: styles.border.borderRadius },
    '.rounded-bottom': { borderBottomLeftRadius: styles.border.borderRadius, borderBottomRightRadius: styles.border.borderRadius },
    '.row': { display: 'flex' },
    '.col': { display: 'flex', flexDirection: 'column' },
    '.between': { display: 'flex', justifyContent: 'space-between' },
    '.col-between': { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    '.content-center': { justifyContent: 'center' },
    '.content-start': { justifyContent: 'start' },
    '.content-end': { justifyContent: 'end' },
    '.items-center': { alignItems: 'center' },
    '.items-start': { alignItems: 'start' },
    '.items-end': { alignItems: 'end' },
    '.stretch': { alignSelf: 'stretch' },
    '.w-full': { width: '100%' },
    '.hstack': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch'
    },
    '.vstack': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch'
    },
  }
}