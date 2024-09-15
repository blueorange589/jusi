const events = {
  cardViewClick: () => {
    alert('view clicked')
  },
  getPosts: async() => {
    const r = await request('https://dummyjson.com/posts/?limit=10')
    render(app.grid, app.postCards(r.posts)) 
  }
}


