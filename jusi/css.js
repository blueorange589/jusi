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
const pixies = ['width', 'height', 'borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderRadius', 'borderTopRightRadius', 'borderTopLeftRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'maxWidth', 'top', 'right', 'bottom', 'left']


const css = {}
css.flex = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

css.row = { ...css.flex, gap: .4 }
css.col = { ...css.flex, flexDirection: 'column', gap: .4 }
css.hstack = { ...css.row, alignItems: 'center', alignSelf: 'stretch' }
css.vstack = { ...css.col, alignItems: 'center', alignSelf: 'stretch' }


const cssUtils = (styles) => {
  const utils = {
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
    '.row': css.row,
    '.col': css.col,
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
    '.hstack': css.hstack,
    '.vstack': css.vstack
  }

  const jss = {
    'body, #app': {
      maxWidth: '100vv',
      overflowX: 'hidden'
    },
    fieldset: {
      ...css.row,
      gap: .6,
      fontWeight: 900
    },
    ".form-field": {
      ...css.col,
      padding: styles.padding.section
    },
    ".form-field.form-radio, .form-field.form-checkbox": {
      flexDirection: 'row',
    },
    ".form-field .radio-label, .form-field .checkbox-label": {
      fontWeight: 400
    },
    'input[type="text"], input[type="email"], input[type="number"], input[type="date"]': {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
    },
    'input[type="radio"], input[type="checkbox"]': {
      border: 'none',
      outline: 0,
      width: "20px",
      height: "20px"
    },
    select: {
      backgroundColor: "lightgray",
      width: "100%",
      padding: "10px",
      borderRadius: "4px"
    },
    'option:checked': {
      backgroundColor: styles.colors.button,
      color: 'white'
    },
    textarea: {
      backgroundColor: "pink",
      width: "100%",
      height: "100px",
      padding: "10px 0",
      boxSizing: "border-box",
      borderRadius: "4px",
      color: "purple"
    },
    "table": {
      backgroundColor: '#fff',
      width: "100%"
    },
    "table td, table th": {
      ...styles.border,
      borderRadius: '0px',
      padding: styles.padding.element
    },
    "table.striped tr:nth-child(even)": {
      backgroundColor: styles.colors.tableStripe
    },
    "table.hover tr:hover": {
      backgroundColor: styles.colors.tableHover
    },
    "table th": {
      padding: styles.padding.element,
      textAlign: "left",
      backgroundColor: styles.colors.tableHead,
      color: "white"
    },
    '.close-btn': {
      fontSize: '20px',
      fontWeight: 'bold',
      color: styles.colors.danger,
      cursor: 'pointer',
      position: 'absolute',
      top: 12,
      right: 12,
      display: 'block',
    },
    '.close-btn:hover': {
      textDecoration: 'underline'
    },
    '.loading-overlay, .modal-overlay': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: styles.colors.overlay,
      zIndex: '9999',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '.loading': {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      border: '10px solid #ddd',
      borderTopColor: 'orange',
      animation: 'loading 1s linear infinite',
    },
    '@keyframes loading': {
      to: {
        transform: 'rotate(360deg)'
      }
    },
    '.modal': {
      position: 'relative',
      ...utils['.col'],
      backgroundColor: styles.colors.modal,
      color: styles.colors.modalText,
      padding: styles.padding.modal,
      borderRadius: styles.border.borderRadius
    },
    '.modal-header': {
      borderBottomWidth: styles.border.borderWidth,
      borderBottomStyle: styles.border.borderStyle,
      borderBottomColor: styles.border.borderColor,
      padding: styles.padding.modal
    },
    '.modal-body': {
      padding: styles.padding.modal
    },
    '.modal-footer': {
      ...utils['.between'],
      padding: styles.padding.modal
    },
    '.dropbtn': {
      backgroundColor: '#04AA6D',
      padding: styles.padding.element,
      fontSize: styles.fontSizes.button,
      border: styles.border
    },
    '.dropdown': {
      position: 'relative',
      display: 'inline-block'
    },
    '.dropdown-content': {
      display: 'none',
      position: 'absolute',
      backgroundColor: styles.colors.dropdown,
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1
    },
    '.dropdown-content a': {
      color: styles.colors.dropdownText,
      padding: styles.padding.element,
      textDecoration: 'none',
      display: 'block'
    },
    '.dropdown:hover .dropdown-content': {
      display: 'block'
    }
  }

  return { ...utils, ...jss }
}

