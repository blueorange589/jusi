import {header, footer} from '../scripts/parts.js';

const pageHeader = div({ 
  classList: ['page-header'], 
  contains: [
    h1({ text: 'Homepage' }), 
    div({ 
      classList: ['hstack', 'gap-3'], 
      contains: [button({ text: 'Add' }), button({ text: 'Filter' })] 
    })
  ] 
})





const card1 = card({
  header: [
    img({
      classList: ['rounded-top'],
      attrs: { src: './assets/img/example1.jpeg' }
    })
  ],
  body: [
    h5({ text: 'card1 title' }),
    span({ text: 'this is a test card' })
  ],
  footer: [
    button({
      text: 'View',
      icon: 'bookmark',
      classList: ['w-full'],
      events: { click: events.cardViewClick }
    })
  ]
})


const card2 = card({
  header: [img({ classList: ['rounded-top'], attrs: { src: './assets/img/example1.jpeg' } })],
  body: [h5({ text: 'card2 title' }), span({ text: 'this is a test card' })],
  footer: [
    button({
      text: 'View',
      classList: ['w-full', 'rounded-bottom'],
      attrs: {
        style: {
          borderBottomLeftRadius: styles.borderRadius,
          borderBottomRightRadius: styles.borderRadius
        }
      }
    })
  ]
})


const cards = [card1, card2]
const cardsGrid = grid({
  cols: 3,
  gap: 3,
  contains: cards
})

const main = createElement('main', {
  contains: [
    container({
      contains: [pageHeader, cardsGrid]
    })
  ]
})

console.log(header)


const layout = createElement('div', { contains: [header, main, footer] })

    const app = document.getElementById('app')
    app.appendChild(layout)
    // console.log(layout)