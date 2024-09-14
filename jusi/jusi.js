const createStyles = () => {
  let file = ''
  Object.keys(elements).map(tag => {
    file += makeCSSLine(tag, elements[tag])
  })

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = file
  // console.log(file)
  document.getElementsByTagName('head')[0].appendChild(style);
}
createStyles()