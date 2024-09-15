const jusi = {}

const scales = { 768: 2, 1024: 3, 1200: 4 }
const device = {
  type: 'desktop',
  width: window.innerWidth,
  height: window.innerHeight,
  scale: 1
}

const setDeviceType = () => {
  const w = window.innerWidth
  device.type = (w < 540) ? 'mobile' : (w < 1024) ? 'tablet' : 'desktop'
  document.body.classList.remove('desktop')
  document.body.classList.remove('tablet')
  document.body.classList.remove('mobile')
  document.body.classList.add(device.type)
  // console.log(device.type)
}
setDeviceType()

window.addEventListener("resize", setDeviceType);


const styleMap = {
  textColor: 'color',
  fontSize: 'font-size',
  backgroundColor: 'background-color',
  borderColor: 'border-color',
  borderWidth: 'border-width'
}


const rems = ['padding', 'fontSize', 'gap']
const pixies = ['width', 'height', 'borderWidth', 'borderRadius', 'borderTopRightRadius', 'borderTopLeftRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'maxWidth', 'top', 'right', 'bottom', 'left']


jusi.createStyles = (elementCSS) => {
  let file = ''
  Object.keys(elementCSS).map(tag => {
    file += makeCSSLine(tag, elementCSS[tag])
  })

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = file
  // console.log(file)
  document.getElementsByTagName('head')[0].appendChild(style);
}

jusi.page = {
  app: document.getElementById('app'),
  push: (content) => {
    jusi.page.app.innerHTML = ''
    console.log(content)
    content.map(part => {
      jusi.page.app.appendChild(part)
    })
  }
}