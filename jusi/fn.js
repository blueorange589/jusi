/* METHODS */
jusi.fn = {}
jusi.fn.layout = {}
jusi.fn.layout.suspense = () => { jusi.els.loadingOverlay.style.display = 'flex' }
jusi.fn.layout.release = () => { jusi.els.loadingOverlay.style.display = 'none' }
jusi.fn.layout.scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
jusi.fn.string = {}
jusi.fn.string.ucfirst = () => str.charAt(0).toUpperCase() + str.slice(1)
jusi.fn.string.hash = (numChars = 8) => Math.random().toString(36).substring(0, numChars)
jusi.fn.string.formatMoney = (str) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return formatter.format(str)
}
jusi.fn.date = {}
jusi.fn.date.daysUntil = (end) => {
  const now = Math.floor(Date.now() / 1000)
  if (now > end) {
    return false
  }
  return Math.floor((end - now) / 86400)
}
jusi.fn.date.ISOtoDate = (iso) => iso.split('T')[0]
jusi.fn.date.dateToISO = (dateStr) => {
  const dt = new Date(dateStr)
  return dt.toISOString()
}
jusi.fn.date.nowUnix = () => Math.floor(new Date().getTime() / 1000)
jusi.fn.date.currentYear = () => new Date().getFullYear()
jusi.fn.date.format = (dateStr, locale = 'en-US') => {
  const date = new Date(dateStr),
    dt = new Intl.DateTimeFormat(locale).format(date);
  return dt
}